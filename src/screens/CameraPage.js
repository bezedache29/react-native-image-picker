import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

export default function App() {
  const devices = useCameraDevices('wide-angle-camera') // On utilise cette camera
  const device = devices.back
  const camera = useRef(null)

  const [cameraPermission, setCameraPermission] = useState('denied') // denied par defaut - authorized quand le user accepte

  /**
   * Fonction qui se trigger au click sur le btn de prise de photo
   * On check si l'utilisateur a accepter de pouvoir utiliser sa camera
   * On allume le flash pour prendre la photo
   * Sa nous retourne un tableau de json avec entre autre le chemin de la photo
   */
  const takePhoto = async () => {
    const res = await Camera.getCameraPermissionStatus()
    if (res === 'authorized') {
      const response = await camera.current.takePhoto({
        flash: 'on'
      })
      console.log(response)
    }
  }

  /**
   * Permet de demander a l'utilisateur d'accepter l'utilisation de sa camera
   */
  const checkCameraPersmission = async () => {
    const response = await Camera.requestCameraPermission()
    setCameraPermission(response)
  }

  useEffect(() => {
    checkCameraPersmission()
  }, [])

  if (device == null) {
    return <Text>Loading ...</Text>
  } else if (cameraPermission === 'authorized') {
    return (
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          ref={camera}
          device={device}
          isActive={true}
          preset="medium"
          enableZoomGesture={true}
          enableAutoStabilization={true}
          fps={240}
          photo={true}
        />
        <Button onPress={takePhoto} title='Take' />
      </>
    )
  }

  return <View></View>
}