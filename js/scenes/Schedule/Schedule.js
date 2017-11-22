import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { SlComponent } from '../../components/SectionListComponent'

const Schedule = ({sessionData, isLoading}) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <SlComponent data={sessionData} />
    )
  }
}

export default Schedule;