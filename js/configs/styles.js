import { Platform } from 'react-native'

export const colors = {
  white: '#fff',
  mediumGrey:'#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  black: '#000'
}

export const typography = {
  ...Platform.select({
    ios: {
      fontMainReg: 'Montserrat',
    },
    android: {
      fontMainReg: 'Montserrat-Regular',
    },
  }),
  fontMainLight: 'Montserrat-Light'
}