import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { SessionList } from '../../components/SessionList';
import { formatSessionData } from '../../lib/dataHelpers';

const Fave = ({faveSession, allFavourites}) => {
  return(
    <SessionList data={formatSessionData(faveSession)} currentNavigatorUID={'favourite'} allFavourites={allFavourites}/>
  )
}

Fave.propTypes = {
  faveSession: PropTypes.array.isRequired,
  allFavourites : PropTypes.array.isRequired
}

export default Fave;