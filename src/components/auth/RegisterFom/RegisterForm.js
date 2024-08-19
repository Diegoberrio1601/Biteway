import React, {useState} from 'react'
 import { View } from 'react-native'
 import { Input, Icon, Button } from 'react-native-elements'
 import {useFormik} from 'formik'
 import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
 import {useNavigation} from '@react-navigation/native'
 import Toast from 'react-native-toast-message'
 import {initialValues, validationSchema} from './RegisterForm.data.js'
 import {screen} from '../../../utils'
import {styles} from './RegisterForm.style.js'
 
 export function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation()

    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
            const auth = getAuth()
            await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            navigation.navigate(screen.account.account)
            // navigation.goBack()
        } catch (error) {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Error al registrarse inténtalo más tarde'
            })
        }
      },
    });

    const showHiddenPassword = () =>
      setShowPassword((prevState) => !prevState);
   return (
     <View style={styles.content}>
       <Input
         placeholder="Correo electronico"
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
           <Icon type="material-community" name={showPassword ? 'eye-outline' : 'eye-off-outline'} iconStyle={styles.icon} onPress={showHiddenPassword}/>
         }
         onChangeText={text => formik.setFieldValue('password', text)}
         errorMessage={formik.errors.password}
       />
       <Input
         placeholder="Repetir Contraseña"
         secureTextEntry={showPassword ? false : true}
         containerStyle={styles.input}
         rightIcon={
           <Icon type="material-community" name={showPassword ? 'eye-outline' : 'eye-off-outline'} iconStyle={styles.icon} onPress={showHiddenPassword} />
         }
         onChangeText={text => formik.setFieldValue('repitPassword', text)}
         errorMessage={formik.errors.repitPassword}
       />

       <Button title="Unirse" containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
     </View>
   );
 } 