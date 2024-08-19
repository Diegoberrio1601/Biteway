import React from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {Image} from 'react-native-elements'
import {styles} from './RegisterScreen.style'
import { RegisterForm } from '../../../components/auth'

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content }>
        <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  )
} 