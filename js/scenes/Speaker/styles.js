import {
  StyleSheet
} from 'react-native';

import { colors, typography } from '../../configs/styles';

export default StyleSheet.create({
  header:{
    backgroundColor:'black',
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 45,
    paddingBottom:15,
    position:'relative',
    paddingLeft:15
  },
  headerTitle:{
    fontSize:18,
    fontFamily:typography.fontMainReg,
    color:colors.white,
    textAlign:'center',
    position:'absolute',
    right:'25%',
    bottom: 22
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
  },
  speakerImage:{
    width: 120, 
    height: 120, 
    borderRadius: 60,
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:15,
    marginBottom:15
  },
  speakerTitle:{
    fontFamily:typography.fontMainReg,
    fontSize: 24,
    textAlign:'center',
    marginTop:15,
    marginBottom:15
  },
  speakerBio:{
    fontFamily:typography.fontMainReg,
    fontSize: 14,
    marginTop:15,
    marginBottom:15,
    paddingLeft:15,
    paddingRight:15,
    lineHeight:24
  },
  blackContainer:{
    backgroundColor:colors.black,
    paddingRight:10,
    paddingLeft:10
  },
  whiteContainer:{
    backgroundColor:colors.white,
  }
});