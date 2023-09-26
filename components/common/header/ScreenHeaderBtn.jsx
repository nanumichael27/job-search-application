import React from 'react';

import styles from './screenheader.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl}
      resizeMode="cover"
      style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn