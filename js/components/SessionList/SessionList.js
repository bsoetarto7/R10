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

const SessionList = ({ data, goSession, currentNavigatorUID, allFavourites }) => (
  <SectionList
    renderItem={({item}) => {
      console.log(allFavourites);
      return(
        <TouchableHighlight onPress={() => goToSession(currentNavigatorUID, item)}>
          <View>
            <View style={styles.container}>
              <Text style={styles.subtitle}>{item.title}</Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.location}>{item.location}</Text>
              {allFavourites.indexOf(item.session_id) >=0 ? <Icon style={styles.faveHeart} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.red} /> : false}
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