import React, { Component } from 'react';
import Session from './Session';
import { fetchSingleSpeaker } from '../../redux/modules/speaker';
import { connect } from 'react-redux';
import { queryFaves } from '../../configs/models';
import { getAllFaves } from '../../redux/modules/favourites';
import realm from '../../configs/models';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  componentDidMount = () => {
    realm.addListener('change', this.updateFave);
    this.props.dispatch(getAllFaves());
    this.props.dispatch(fetchSingleSpeaker(this.props.sessionData.speaker));
  }
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render() {
    const { sessionData, speakerSingleData, allFavourites } = this.props;
    return (
      <Session sessionData={sessionData} speakerSingleData={speakerSingleData} allFavourites={allFavourites} /> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    speakerSingleData: state.speaker.speakerSingleData,
    allFavourites: state.favourite.allFavourites
  }
}

export default connect(mapStateToProps)(SessionContainer);