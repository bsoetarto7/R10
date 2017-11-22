import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { SessionList } from '../../components/SessionList'

const Schedule = ({ sessionData, isLoading, currentNavigatorUID }) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <SessionList data={sessionData} currentNavigatorUID={currentNavigatorUID}/>
    )
  }
}

export default Schedule;