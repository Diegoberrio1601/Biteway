import React, {useState}  from 'react'
import { View } from 'react-native'
import {Button} from 'react-native-elements'
import {getAuth,  signOut} from 'firebase/auth'
import {LoadingModal} from '../../../components'
import { InfoUser } from '../../../components/Account'
import {styles} from './UserLoggedScreen.style'

export function UserLoggedScreen() {
  const [ loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const logout = async () => {
  const auth = getAuth()
  await signOut(auth);
  }
  return (
    <View style={styles.content}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <Button
        title={"Cerrar  sesión"}
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />
      <LoadingModal show={loading} text={loadingText}/>
    </View>
  );
}