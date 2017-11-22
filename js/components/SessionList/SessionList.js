import React from 'react';
import {
  Text,
  View,
  SectionList,
  TouchableHighlight
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import { goToSession } from '../../lib/navigationHelpers';

const SessionList = ({ data, goSession, currentNavigatorUID }) => (
  <SectionList
    renderItem={({item}) => {
      return(
        <TouchableHighlight onPress={()=> goToSession(currentNavigatorUID, item)}>
          <View>
            <View style={styles.container}>
              <Text style={styles.subtitle}>{item.title}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        </TouchableHighlight>
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
    renderSectionHeader={({section}) => <Text style={styles.title}>{moment.unix(section.title).format("h:mm a")}</Text>}
    sections={data}
  />
);

export default SessionList;