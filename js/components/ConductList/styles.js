import {
  StyleSheet
} from 'react-native';

import { colors, typography } from '../../configs/styles'

export default StyleSheet.create({
  conductSubtitle:{
    fontSize:21,
    fontWeight:'bold',
    marginBottom:15,
    color:colors.purple,
    fontFamily: typography.fontMainReg
  },
  description:{
    fontSize:16,
    fontFamily: typography.fontMainReg,
    marginBottom:15,
    lineHeight:24
  }
});