import React, { Component } from 'react';
import Speaker from './Speaker';
import PropTypes from 'prop-types';

class SpeakerContainer extends Component {
  static propTypes = {
    speakerSingleData : PropTypes.object.isRequired 
  }
  render() {
    const { speakerSingleData } = this.props;
    return (
      <Speaker speakerSingleData={speakerSingleData} />
    );
  }
}

export default SpeakerContainer;