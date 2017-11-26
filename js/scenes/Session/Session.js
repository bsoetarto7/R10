import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Platform,
  ScrollView
} from 'react-native';
import moment from 'moment';

import { goToSpeaker } from '../../lib/navigationHelpers';

import { createFave, deleteFave } from '../../configs/models';

import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import { colors, typography } from '../../configs/styles';

const Session = ({ sessionData, speakerSingleData, allFavourites }) => {
  const isFavourite = allFavourites.indexOf(sessionData.session_id) > -1 ? true : false
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{sessionData.location}</Text>
          {isFavourite ? <Icon style={styles.faveHeart} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color={colors.red} /> : false}
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.title}>{sessionData.title}</Text>
          <Text style={styles.time}>{moment.unix(sessionData.start_time).format('LT')}</Text>
          <Text style={styles.description}>{sessionData.description}</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.speakerLabel}>Presented by</Text>
          {speakerSingleData ? 
          <TouchableHighlight underlayColor={colors.lightGrey} onPress={() => goToSpeaker(speakerSingleData)}>
            <View style={styles.speakerInfo}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                source={{uri: `${speakerSingleData.image}`}}
              />
              <Text style={styles.speakerName}>{speakerSingleData.name}</Text>
            </View> 
          </TouchableHighlight>: false}
        </View>
        <View style={styles.separator}></View>
        <View style={styles.buttonContainer}>
          <LinearGradient 
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}}
            locations={[0,1]}
            colors={[colors.purple, colors.blue]}
            style={styles.buttonGradient}>
              <TouchableHighlight underlayColor={colors.purple} onPress={isFavourite ? () => deleteFave(sessionData.session_id): () => createFave(sessionData.session_id)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
                    </Text>
                </View>
              </TouchableHighlight>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  )
}


export default Session;