import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import {useFormik} from 'formik'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigation} from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import {initialValues, validationSchema} from './LoginForm.data.js'
import {screen} from '../../../utils'
import {styles} from './LoginForm.style'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation()

    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
            const auth = getAuth()
            await signInWithEmailAndPassword(
              auth, 
              formValue.email, 
              formValue.password)
              navigation.navigate(screen.account.account)
        } catch (error) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Usuario o contraseña incorrectos'
            })
        }
      },
    });

  const showHiddenPassword = () =>
    setShowPassword((prevState) => !prevState);
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={text => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={showPassword ? false : true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={showHiddenPassword}
          />
        }
        onChangeText={text => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />
      <Button  containerStyle={styles.btnContainer} buttonStyle={styles.btn}
      title="Iniciar sesión" 
      onPress={formik.handleSubmit} loading={formik.isSubmitting}
      />
    </View>
  );
}