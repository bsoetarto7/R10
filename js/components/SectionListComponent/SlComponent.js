import React from 'react';
import {
  Text,
  View,
  SectionList
} from 'react-native';
import moment from 'moment';
import styles from './styles'

const Slcomponent = ({data}) => (
  <SectionList
    renderItem={({item}) => {
      return(
        <View>
          <View style={styles.container}>
            <Text style={styles.subtitle}>{item.title}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      )
    }}
    keyExtractor={(item, index) => index}
    ItemSeparatorComponent = {()=>{
      return (
        <View
          style={styles.separator}
        />
      )
    }}
    renderSectionHeader={({section}) => <Text style={styles.title}>{moment(section.title).format("h:mm a")}</Text>}
    sections={data}
  />
);

export default Slcomponent;