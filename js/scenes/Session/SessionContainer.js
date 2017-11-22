import React, { Component } from 'react';
import Session from './Session';
import { fetchSingleSpeaker } from '../../redux/modules/speaker';
import { connect } from 'react-redux';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  componentDidMount = () => {
    this.props.dispatch(fetchSingleSpeaker(this.props.sessionData.speaker));
  }
  render() {
    const { sessionData, speakerSingleData } = this.props;
    return (
      <Session sessionData={sessionData} speakerSingleData={speakerSingleData} /> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    speakerSingleData: state.speaker.speakerSingleData
  }
}

export default connect(mapStateToProps)(SessionContainer);