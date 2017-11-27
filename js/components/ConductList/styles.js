import {
  StyleSheet
} from 'react-native';

import { colors, typography } from '../../configs/styles'

export default StyleSheet.create({
  conductSubtitle:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:15,
    color:colors.purple,
    fontFamily: typography.fontMainReg,
    marginLeft: 10
  },
  description:{
    fontSize:16,
    fontFamily: typography.fontMainReg,
    marginBottom:15,
    lineHeight:24
  },
  conductTitle:{
    flexDirection:'row',
    alignContent:'center',
  }
});