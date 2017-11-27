import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { colors } from '../../configs/styles';
import PropTypes from 'prop-types';

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

HeaderGradient.propTypes = {
  colors: PropTypes.array.isRequired
}

export default HeaderGradient;