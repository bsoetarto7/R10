import React from 'react';
import {
  Text,
  View,
  SectionList,
  TouchableHighlight,
  Platform
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import { colors } from '../../configs/styles'
import { goToSession } from '../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';

const SessionList = ({ data, goSession, currentNavigatorUID }) => (
  <SectionList
    renderItem={({item}) => {
      return(
        <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, item)}>
          <View>
            <View style={styles.container}>
              <Text style={styles.subtitle}>{item.title}</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.location}>{item.location}</Text>
              <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={25} color={colors.red} />
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