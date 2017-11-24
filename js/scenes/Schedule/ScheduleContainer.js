import React, {Component} from 'react';
import Schedule from './Schedule';
import { connect } from 'react-redux';
import { fetchSession } from '../../redux/modules/session';
import { getAllFaves } from '../../redux/modules/favourites'
import realm from '../../configs/models';

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  componentDidMount(){
    realm.addListener('change', this.updateFave);
    this.props.dispatch(getAllFaves());
    this.props.dispatch(fetchSession())
  }
  updateFave = () => {
    this.props.dispatch(getAllFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render(){
    const { sessionData, isLoading, allFavourites } = this.props

    return(
      <Schedule sessionData={sessionData} isLoading={isLoading} allFavourites={allFavourites} />
    )
  }
}

const mapStateToProps = state => {
  return {
    sessionData: state.session.sessionData,
    isLoading: state.session.isLoading,
    allFavourites: state.favourite.allFavourites
  }
}

export default connect(mapStateToProps)(ScheduleContainer);