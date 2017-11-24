import React from 'react';
import {
  FlatList,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import styles from './styles';
import ConductItem from './ConductItem';

const ConductList = ({data}) => {
  return(
    <FlatList
      data={data}
      renderItem={({ item }) => 
          <ConductItem item={item} styles={styles} />}
      ItemSeparatorComponent = {()=>
        <View
          style={styles.separator}
        />
      }
      keyExtractor={(item, index) => index}
    />
  )
}

export default ConductList;