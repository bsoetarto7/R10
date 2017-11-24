import React, { Component } from 'react';
import Fave from './Fave'
import { queryFaves } from '../../configs/models';
import { connect } from 'react-redux';
import { getAllFaves } from '../../redux/modules/favourites';
import realm from '../../configs/models';

class FaveContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Favourites',
    }
  }

  componentDidMount = () => {
    this.props.dispatch(getAllFaves());
    realm.addListener('change', this.updateFave);
  }
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render() {
    const { sessionData, allFavourites } = this.props;
    const faveSession = sessionData.filter(session => {
      return allFavourites.indexOf(session.session_id) >= 0
    });
    return (
      <Fave faveSession={faveSession} />
    );
  }
}


const mapStateToProps = state => {
  return {
    sessionData: state.session.sessionData,
    allFavourites: state.favourite.allFavourites
  }
}

export default connect(mapStateToProps)(FaveContainer);