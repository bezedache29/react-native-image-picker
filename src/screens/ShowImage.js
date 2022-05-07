import { View, Text, Image } from 'react-native'
import React from 'react'
import { useStoreState } from 'easy-peasy'

export default function ShowImage() {

  const image = useStoreState((state) => state.images.image)

  const test = `file://${image}`

  console.log(test)

  return (
    <View>
      <Text>ShowImage</Text>
      <Text>{image}</Text>
      {/* {image && <Image source={require(image)} />} */}
    </View>
  )
}