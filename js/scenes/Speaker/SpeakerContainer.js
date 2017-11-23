import React, { Component } from 'react';
import Speaker from './Speaker';
class SpeakerContainer extends Component {
  
  render() {
    const { speakerSingleData } = this.props;
    return (
      <Speaker speakerSingleData={speakerSingleData} />
    );
  }
}

export default SpeakerContainer;