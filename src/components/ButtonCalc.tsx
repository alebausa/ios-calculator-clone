import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string,
  color?: string,
  double?: boolean,
  action: (numberKey: string) => void
}
export const ButtonCalc = ({ text, color = '#2d2d2d', double = false, action }:Props) => {
  return (
    <TouchableOpacity
        onPress={() => action(text)}
    >
      <View style={[
        styles.button,
        {
          backgroundColor: color,
          width: (double) ? 180 : 80
        }
      ]}>
        <Text
          style={{
          ...styles.buttonText,
          color: (color === '#9b9b9b' ? 'black' : 'white')
        }} > { text }</Text>
      </View> 
    </TouchableOpacity>
  )
}
