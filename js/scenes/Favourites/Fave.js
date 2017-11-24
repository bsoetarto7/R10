import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import { SessionList } from '../../components/SessionList';
import { formatSessionData } from '../../lib/dataHelpers';

const Fave = ({faveSession}) => {
  return(
    <SessionList data={formatSessionData(faveSession)} currentNavigatorUID={'favourite'}/>
  )
}

export default Fave;