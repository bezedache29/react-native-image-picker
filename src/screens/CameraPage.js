import { View, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchCamera } from 'react-native-image-picker';
import { useStoreActions } from 'easy-peasy';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob'
import { useFormik } from 'formik';

export default function CameraPage({ navigation }) {

  const loadImage = useStoreActions((actions => actions.images.loadImage))

  const [imageSource, setImageSource] = useState('')

  // const fpath = `${RNFetchBlob.fs.dirs.DownloadDir}/hello.jpg`;

  const formik = useFormik({
    initialValues: { title: 'test.jpg' },
    onSubmit: values => {
      // RNFetchBlob.config({
      //   addAndroidDownloads: {
      //       useDownloadManager: true,
      //       notification: true,
      //       path: fpath,
      //       description: "File downloaded by download manager.",
      //   },}).fetch('POST', `http://10.0.2.2:80/api/images`, {
      //   'Content-Type' : 'multipart/form-data',
      // },
      RNFetchBlob.fetch('POST', `http://10.0.2.2:80/api/images`, {
        'Content-Type' : 'multipart/form-data',
      },
      [
        {
          name : 'image', 
          filename : imageSource, 
          type: 'image/jpeg', 
          data: RNFetchBlob.wrap(imageSource)
        },
        { 
          name : 'title', 
          data : values.title
        },
      ]).then((resp) => {
        console.log('resp', resp.data)
      }).catch((err) => {
        // Alert.alert('An error occurred!', err.message, [{ text: 'Okay' }]);
        console.log(err)
      })
    }
  });

  /**
   * Au lancement de la page
   * On demande l'autorisation de la caméra et de l'ecriture dans le telephone, pour prendre une photo
   */
  useEffect(() => {
    requestCameraPermission()
  }, [])

  useEffect(() => {
    if (imageSource !== '') {
      // sendForm(imageSource)
      formik.handleSubmit()
      loadImage(imageSource)
      navigation.navigate('Home')
    }
  }, [imageSource])

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
        includeBase64: true,
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
  
      launchCamera(options, (res) => {
        // console.log('Response = ', res);
  
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          // const source = { uri: res.assets[0].uri };
          // console.log('response', JSON.stringify(res));
          console.log(res)

          

          // const image = res.assets[0].uri
          // const data = res.assets[0]
          
          // const formData = new FormData()
          // formData.append('file', {type: 'image/jpg', uri: image, name: 'uploaded.jpg'})

          const uri = res.assets[0].uri
          const filename = res.assets[0].fileName
          const base64 = res.assets[0].base64
          const type = res.assets[0].type
          const img = res.assets[0]

          setImageSource(uri)

          // const data = new FormData()
          // // data.append('base64', base64, filename)
          // // data.append('uri', uri, filename)
          // // data.append('type', type, filename)
          // // data.append('filename', filename, filename)

          // let s = JSON.stringify({ uri: base64, name: filename, type: type });

          // data.append('file', s);

          // let config = {
          //   method: 'post',
          //   url: 'http://10.0.2.2:80/api/images',
          //   headers: {
          //     Accept: 'application/json',
          //     'Content-Type': 'multipart/form-data',
          //   },
          //   data: data
          // }
      
          // axios(config)
          //   .then((res) => {
          //     console.log('backend', res.data)
          //   })
          //   .catch((error) => {
          //     console.log(error)
          //   })


          // setImageSource(source.uri)

          
        }
      });
  
    } else {
      console.log("Camera permission denied");
    }

  }


  




  const sendForm = async (image) => {
    let formdata = new FormData();
    formdata.append('image', image, 'test.jpg');

    // const response = await fetch('http://10.0.2.2:80/api/images', {
    //   method: 'POST',
    //   body: formdata,
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   }
    // })

    // const responseAgain = await response.text()
    // console.log('ici', responseAgain)


    let config = {
      method: 'post',
      url: 'http://10.0.2.2:80/api/images',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: formdata
    }

    axios(config)
      .then((res) => {
        console.log('ici', res.data)
      })
      .catch((error) => {
        console.log(error)
      })

    // let res = await axios.post('http://10.0.2.2:80/api/images', formdata, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Accept': "application/json",
    //   }
    // })

    // console.log(res.data)

    // try {
    //   const res = await axios.get('https://api-camera.test/api/home')

    //   console.log(res)
    // } catch (error) {
    //    console.log(error)
    // }

    // const res = await axios.get('https://api-camera.test/api/home')

    // console.log(res)
  }

  return (
    <View></View>
  )
}