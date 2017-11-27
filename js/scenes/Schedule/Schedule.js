import React from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { SessionList } from '../../components/SessionList';
import { formatSessionData } from '../../lib/dataHelpers';

const Schedule = ({ sessionData, isLoading, allFavourites }) => {
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <SessionList data={formatSessionData(sessionData)} currentNavigatorUID={'schedule'} allFavourites={allFavourites} />
    )
  }
}

Schedule.propTypes = {
  sessionData: PropTypes.array.isRequired,
  isLoading : PropTypes.bool.isRequired,
  allFavourites : PropTypes.array.isRequired
}

export default Schedule;