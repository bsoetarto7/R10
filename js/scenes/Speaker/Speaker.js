import React from 'react';
import{
  View,
  Text,
  Image,
  Linking,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { closeSpeaker } from '../../lib/navigationHelpers';
import styles from './styles';
import { colors, typography } from '../../configs/styles';

const Speaker = ({ speakerSingleData }) => {
  return(
    <ScrollView>
      <View style={styles.header}>
        <TouchableHighlight underlayColor={colors.black} onPress={() => closeSpeaker()}>
          <Icon name={'ios-close'} size={30} color={'white'} />
        </TouchableHighlight>
        <Text style={styles.headerTitle}>About the Speaker</Text>
      </View>
      <View style={styles.blackContainer}>
        <View style={styles.whiteContainer}>
          <Image
            style={styles.speakerImage}
            source={{uri: `${speakerSingleData.image}`}}
          />
          <Text style={styles.speakerTitle}>{speakerSingleData.name}</Text>
          <Text style={styles.speakerBio}>{speakerSingleData.bio}</Text>
          <View style={styles.buttonContainer}>
            <LinearGradient 
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 0}}
              locations={[0,1]}
              colors={[colors.purple, colors.blue]}
              style={styles.buttonGradient}>
                <TouchableHighlight underlayColor={colors.purple} onPress={() => Linking.openURL(`${speakerSingleData.url}`)}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>
                        Read More on Wikipedia 
                      </Text>
                  </View>
                </TouchableHighlight>
            </LinearGradient>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

export default Speaker;