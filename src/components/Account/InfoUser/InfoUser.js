import React, {useState} from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import { getAuth, updateProfile  } from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { styles } from "./InfoUser.style";

export function InfoUser(props) {
    const {  setLoading, setLoadingText  } = props
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL)

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.canceled) {
      const uri = result.assets[0]?.uri;

      uploadImage(uri); // Descomenta esto para subir la imagen
    } else {
      console.log("No se seleccionó ninguna imagen.");
    }
  };

  const uploadImage = async (uri) => {
    setLoadingText('Actualizando avatar')
    setLoading(true )
    const response = await fetch(uri);
    const blob = await response.blob();
    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);
    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath) 
    });
  };
  const updatePhotoUrl = async (imagePath ) => {
    const storage  = getStorage()
    const imageRef = ref(storage, imagePath)
    const imageUrl = await getDownloadURL(imageRef)
    const auth = getAuth()
    updateProfile(auth.currentUser, { photoURL: imageUrl})
    setAvatar(imageUrl)
    setLoading(false)
  }
  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{
          type: "material",
          name: "person",
        }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}