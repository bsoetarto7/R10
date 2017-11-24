import React from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { ConductList } from '../../components/ConductList';

import styles from './styles';

const About = ({ data, isLoading }) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <ScrollView>
        <Image
          style={styles.about_header_img}
          resizeMode={"contain"}
          source={require('../../assets/images/r10_logo.png')}
        />
        <View style={styles.content}>
          <Text style={styles.description}>R10 is a conference that focuses on just about any topic related to dev</Text>
          <Text style={styles.subtitle}>Date & Venue</Text>
          <Text style={styles.description}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC</Text>
          <Text style={styles.subtitle}>Code of Conduct</Text>
          <ConductList data={data}/>
        </View>
      </ScrollView>
    );
  }
}
export default About;