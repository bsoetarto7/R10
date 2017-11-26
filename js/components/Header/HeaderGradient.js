import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { colors } from '../../configs/styles';
const HeaderGradient = ({colors}) => {
  return (
    <LinearGradient 
      start={{x: 0.9, y: 0}} 
      end={{x: 0.3, y: 1.0}}
      locations={[0,1]}
      colors={colors}
      style={styles.linearGradient}>
      
    </LinearGradient>
  )
}
export default HeaderGradient;