import React from 'react'
import { View, Text } from 'react-native'
import {screen} from '../../utils'
import { Button } from "react-native-elements";


export  function RestauransScreen(props) {
  const  {  navigation } = props
  const goToAddRestaurant = () => {
     navigation.navigate(screen.restaurant.addRestaurant);
    //  navigation.navigate(screen.account.tab, {screen: screen.account.account});
  }
  return (
    <View>
      <Text>Estamos en la screen de Restaurans </Text>
      <Button title={'Crear restaurante'} onPress={goToAddRestaurant}/>
    </View>
  )
}