import React from 'react';
import{
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { closeSpeaker } from '../../lib/navigationHelpers'
const Speaker = () => {
  return(
    <View>
      <View style={{backgroundColor:'black'}}>
        <Icon name={'ios-close'} size={30} color={'white'} onPress={() => closeSpeaker()} />
        <Text style={{color:'white'}}>About the Speaker</Text>
      </View>
      <Text>Speaker</Text>
    </View>
  )
};

export default Speaker;