import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { SessionList } from '../../components/SessionList';
import { formatSessionData } from '../../lib/dataHelpers';

const Schedule = ({ sessionData, isLoading }) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <SessionList data={formatSessionData(sessionData)} currentNavigatorUID={'schedule'}/>
    )
  }
}

export default Schedule;