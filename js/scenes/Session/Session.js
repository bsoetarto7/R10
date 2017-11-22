import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import moment from 'moment';

import { goToSpeaker } from '../../lib/navigationHelpers'

const Session = ({ sessionData, speakerSingleData }) => {
  return (
    <View>
      <View>
        <Text>{sessionData.location}</Text>
      </View>
      <View>
        <Text>{sessionData.title}</Text>
        <Text>{moment.unix(sessionData.start_time).format('LT')}</Text>
        <Text>{sessionData.description}</Text>
      </View>
      <View>
        <Text>Presented by</Text>
        {speakerSingleData ? 
        <TouchableHighlight onPress={() => goToSpeaker(speakerSingleData)}>
          <View>
            <Image
              style={{width: 60, height: 60, borderRadius: 30}}
              source={{uri: `${speakerSingleData.image}`}}
            />
            <Text>{speakerSingleData.name}</Text>
          </View> 
        </TouchableHighlight>: false}
      </View>
    </View>
  )
}


export default Session;