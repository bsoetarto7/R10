import React, {Component} from 'react';
import Schedule from './Schedule';
import { connect } from 'react-redux';
import { fetchSession } from '../../redux/modules/session'

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchSession())
  }
  render(){
    const { sessionData, isLoading } = this.props

    return(
      <Schedule sessionData={sessionData} isLoading={ isLoading} />
    )
  }
}

const mapStateToProps = state => {
  return {
    sessionData: state.session.sessionData,
    isLoading: state.session.isLoading
  }
}

export default connect(mapStateToProps)(ScheduleContainer);