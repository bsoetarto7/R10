import React, { Component } from 'react';
import Session from './Session';
import { fetchSingleSpeaker } from '../../redux/modules/speaker';
import { connect } from 'react-redux';
import { queryFaves } from '../../configs/models';
import { setAllFave } from '../../redux/modules/favourites';
import realm from '../../configs/models';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }
  componentDidMount = () => {
    const allFave = queryFaves().reduce((acc,curr)=>{
      acc.push(curr.id);
      return acc
    }, []);
    this.props.dispatch(setAllFave(allFave));
    this.props.dispatch(fetchSingleSpeaker(this.props.sessionData.speaker));
    realm.addListener('change', this.updateFave);
  }
  updateFave = () => {
    const allFave = queryFaves().reduce((acc,curr)=>{
      acc.push(curr.id);
      return acc
    }, []);
    this.props.dispatch(setAllFave(allFave));
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render() {
    const { sessionData, speakerSingleData, allFavourites } = this.props;
    console.log(allFavourites);
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