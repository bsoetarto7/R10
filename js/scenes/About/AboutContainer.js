import React, {Component} from 'react';
import About from './About';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchConduct } from '../../redux/modules/conduct'

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  static propTypes = {
    conductData: PropTypes.array.isRequired,
    isLoading : PropTypes.bool.isRequired
  }

  componentDidMount(){
    this.props.dispatch(fetchConduct());
  }

  render(){
    const { conductData, isLoading } = this.props
    return(
      <About data={conductData} isLoading={isLoading} />
    )
  }
}
const mapStateToProps = state => {
  return {
    conductData: state.conduct.conductData,
    isLoading: state.conduct.isLoading
  }
}
export default connect(mapStateToProps)(AboutContainer)