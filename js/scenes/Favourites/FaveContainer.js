import React, { Component } from 'react';
import Fave from './Fave'

class FaveContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Favourites',
    }
  }
  render() {
    return (
      <Fave />
    );
  }
}

export default FaveContainer;