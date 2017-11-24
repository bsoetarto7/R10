import {
  StyleSheet
} from 'react-native';

import { colors, typography } from '../../configs/styles';

export default StyleSheet.create({
  separator:{
    height:StyleSheet.hairlineWidth,
    marginTop:15,
    marginBottom:15,
    backgroundColor: colors.mediumGrey
  },
  container:{
    position: 'relative',
    paddingRight:15,
    paddingLeft:15
  },
  locationContainer:{
    position:'relative',
    marginTop:15
  },
  faveHeart:{
    position:'absolute',
    right:15
  },
  location:{
    color:colors.mediumGrey,
    fontFamily:typography.fontMainReg
  },
  title:{
    fontSize:24,
    fontFamily:typography.fontMainReg,
    paddingTop:15,
    paddingBottom:10
  },
  time:{
    paddingBottom:15,
    fontSize:14,
    fontFamily:typography.fontMainReg,
    color:colors.red
  },
  description:{
    fontSize:16,
    fontFamily:typography.fontMainReg,
    marginBottom:15,
    lineHeight:24
  },
  speakerLabel:{
    color:colors.mediumGrey,
    fontSize:16,
    fontFamily:typography.fontMainReg,
  },
  speakerInfo:{
    marginTop:15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  speakerName:{
    fontSize:16,
    fontFamily:typography.fontMainReg,
    marginLeft:10,
    fontFamily:typography.fontMainReg,
  },
  buttonGradient:{
    maxWidth:250,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius:50,
    overflow:'hidden'
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:15
  },
  buttonText:{
    fontSize:16,
    padding: 15,
    fontFamily:typography.fontMainReg,
    color:colors.white
  }
});