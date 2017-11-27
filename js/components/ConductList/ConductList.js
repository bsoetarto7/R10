import React from 'react';
import {
  FlatList,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ConductItem from './ConductItem';

const ConductList = ({data}) => {
  return(
    <View>
      {
        data.map((item,index) => {
          return (
            <ConductItem key={index} item={item} styles={styles} />
          )
        })
      }
    </View>
  )
}

ConductList.propTypes = {
  data: PropTypes.array.isRequired
}

export default ConductList;