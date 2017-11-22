import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { SessionList } from '../../components/SessionList'

const Schedule = ({ sessionData, isLoading }) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <SessionList data={sessionData} currentNavigatorUID={'schedule'}/>
    )
  }
}

export default Schedule;