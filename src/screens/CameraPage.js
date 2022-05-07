import { View, PermissionsAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { launchCamera } from 'react-native-image-picker';
import { useStoreActions } from 'easy-peasy';

export default function CameraPage({ navigation }) {

  const loadImage = useStoreActions((actions => actions.images.loadImage))

  /**
   * Au lancement de la page
   * On demande l'autorisation de la caméra et de l'ecriture dans le telephone, pour prendre une photo
   */
  useEffect(() => {
    requestCameraPermission()
  }, [])

  /**
   * Fonction qui demande l'autorisation de la camera et les droits d'écriture dans le tel
   * Si ok, on lance la camera pour prendre une photo et la save dans le telephone
   */
  const requestCameraPermission = async () => {

    const grantedcamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );

    const grantedstorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );

    if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage ===  PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera & storage permission given");
        
      const options = {
        mediaType: 'photo', // Uniquement la photo
        saveToPhotos: true,  // Sauvegarde la photo temporaire et dans le dossier pictures
        includeBase64: false,
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
  
      launchCamera(options, (res) => {
        console.log('Response = ', res);
  
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          const source = { uri: res.assets[0].uri };
          console.log('response', JSON.stringify(res));

          loadImage(source.uri)
          navigation.navigate('Home')
        }
      });
  
    } else {
      console.log("Camera permission denied");
    }

  }

  return (
    <View></View>
  )
}