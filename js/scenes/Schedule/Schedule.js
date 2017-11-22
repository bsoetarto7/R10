import React from 'react';
import {
  Text,
  View,
  SectionList,
  ActivityIndicator
} from 'react-native';

const Schedule = ({sessionData, isLoading}) => {
  console.log(sessionData);
  if(isLoading){
    return (
      <ActivityIndicator animating={true} size="small" color="red" />
    )
  }else{
    return (
      <SectionList
        renderItem={({item}) => <Text>{item.description}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        sections={sessionData}
      />
    )
  }
}

export default Schedule;