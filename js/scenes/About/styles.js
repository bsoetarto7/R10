import {
  StyleSheet
} from 'react-native';

import { colors, typography } from '../../configs/styles'

export default StyleSheet.create({
  about_header_img: {
    width: 200, 
    height: 100,
    marginRight: 'auto',
    marginLeft: 'auto'
  }, 
  content:{
    padding:10
  },
  subtitle:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:15,
    marginTop:15,
    fontFamily: typography.fontMainReg
  },
  description:{
    fontSize:16,
    fontFamily: typography.fontMainReg,
    marginBottom:15,
    lineHeight:24
  }
});