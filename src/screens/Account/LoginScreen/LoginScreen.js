import React from 'react'
import { View, ScrollView} from 'react-native'
import {Text, Button, Image} from 'react-native-elements'
import {useNavigation}  from '@react-navigation/native'
import { screen } from '../../../utils'
import { styles } from "./LoginScreen.style";

export function LoginScreen() {
  const navigation = useNavigation()
  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  }
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
      <Text>Estamos en el Login</Text>
      <Text onPress={goToRegister}>Registrarse</Text>
      </View>
    </ScrollView>
  );
}