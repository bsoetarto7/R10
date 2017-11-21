import React, {Component} from 'react';
import About from './About';

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      isLoading: true
    };
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  componentDidMount(){
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ data })
    })
    .catch(err => console.log(err))
  }
  componentDidUpdate(){
    if(this.state.data && this.state.isLoading){
      this.setState ({ isLoading: false })
    }
  }
  render(){

    return(
      <About data={this.state.data} isLoading={this.state.isLoading} />
    )
  }
}

export default AboutContainer