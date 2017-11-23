import React from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { ConductList } from '../../components/ConductList'

const About = ({ data, isLoading }) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <ConductList data={data}/>
    );
  }
}
export default About;