import React, { Component } from 'react';
import Session from './Session';
import { fetchSingleSpeaker } from '../../redux/modules/speaker';
import { connect } from 'react-redux';
import { queryFaves } from '../../configs/models';
import { getAllFaves } from '../../redux/modules/favourites';
import realm from '../../configs/models';
import PropTypes from 'prop-types';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  static propTypes = {
    sessionData: PropTypes.object.isRequired,
    speakerSingleData : PropTypes.object.isRequired,
    allFavourites : PropTypes.array.isRequired
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