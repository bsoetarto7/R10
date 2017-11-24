import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';
import moment from 'moment';

import { goToSpeaker } from '../../lib/navigationHelpers';

import { createFave, deleteFave } from '../../configs/models';

const Session = ({ sessionData, speakerSingleData, allFavourites }) => {
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
      <View>
      <Button
        onPress={allFavourites.indexOf(sessionData.session_id) >=0 ? () => deleteFave(sessionData.session_id): () => createFave(sessionData.session_id)}
        title={allFavourites.indexOf(sessionData.session_id) >=0 ? "Remove from Favourites" : "Add to Favourites"}
        color="#841584"
        accessibilityLabel={allFavourites.indexOf(sessionData.session_id) >=0 ? "Add session to favourite" : "Remove session to favourite"}
      />
      </View>
    </View>
  )
}


export default Session;