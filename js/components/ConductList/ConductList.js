import React from 'react';
import {
  FlatList,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import styles from './styles'

const ConductList = ({data}) => {
  return(
    <ScrollView>
      <Image
        style={styles.about_header_img}
        resizeMode={"contain"}
        source={require('../../assets/images/r10_logo.png')}
      />
      <View style={styles.content}>
        <Text style={styles.description}>R10 is a conference that focuses on just about any topic related to dev</Text>
        <Text style={styles.subtitle}>Date & Venue</Text>
        <Text style={styles.description}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
        <Text style={styles.subtitle}>Code of Conduct</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => 
              <View>
                <Text style={styles.conductSubtitle}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>}
          ItemSeparatorComponent = {()=>
            <View
              style={styles.separator}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </View>
      </ScrollView>
  )
}

export default ConductList;