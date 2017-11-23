import React from 'react';
import{
  View,
  Text,
  Image,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { closeSpeaker } from '../../lib/navigationHelpers'
const Speaker = ({ speakerSingleData }) => {
  return(
    <View>
      <View style={{backgroundColor:'black'}}>
        <Icon name={'ios-close'} size={30} color={'white'} onPress={() => closeSpeaker()} />
        <Text style={{color:'white'}}>About the Speaker</Text>
      </View>
      <Image
        style={{}}
      />
      <Image
        style={{width: 60, height: 60, borderRadius: 30}}
        source={{uri: `${speakerSingleData.image}`}}
      />
      <Text>{speakerSingleData.name}</Text>
      <Text>{speakerSingleData.bio}</Text>
      <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(`${speakerSingleData.url}`)}>
        Read More on Wikipedia 
      </Text>
    </View>
  )
};

export default Speaker;