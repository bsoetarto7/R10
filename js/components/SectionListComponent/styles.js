import {
  StyleSheet
} from 'react-native';
import { colors, typography } from '../../configs/styles'

export default StyleSheet.create({
  separator:{
    height:StyleSheet.hairlineWidth,
    flex: 1,
    backgroundColor: colors.mediumGrey
  },
  title:{
    backgroundColor: colors.lightGrey,
    padding:15,
    fontFamily:typography.fontMainReg
  },
  subtitle:{
    fontSize:16,
    paddingBottom:5,
    paddingTop:15,
    fontFamily:typography.fontMainReg
  },
  location:{
    fontSize:14,
    color: colors.mediumGrey,
    fontFamily:typography.fontMainReg,
    paddingBottom:15
  },
  container:{
    paddingRight:15,
    paddingLeft:15,
  }
});