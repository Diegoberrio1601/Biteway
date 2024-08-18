import React from 'react'
import { ScrollView } from "react-native";
import { Text, Button, Image } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { styles } from './UserGuestScreen.styles'
import {screen} from '../../../utils'

export function UserGuestScreen(props) {
const navigation = useNavigation()
  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de Biteway</Text>
      <Text style={styles.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sito tu experiencia.
      </Text>

      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}