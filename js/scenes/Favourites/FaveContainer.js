import React, { Component } from 'react';
import Fave from './Fave'
import { queryFaves } from '../../configs/models';
import { connect } from 'react-redux';
import { setAllFave } from '../../redux/modules/favourites';
import realm from '../../configs/models';

class FaveContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Favourites',
    }
  }

  componentDidMount = () => {
    const allFave = queryFaves().reduce((acc,curr)=>{
      acc.push(curr.id);
      return acc
    }, []);
    this.props.dispatch(setAllFave(allFave));
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