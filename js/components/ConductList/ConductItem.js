import React, { Component } from 'react';
import {
  View,
  Text,
  LayoutAnimation
} from 'react-native';


class ConductItem extends Component {
  state = {
    showText:false
  }
  animate = () => {
    LayoutAnimation.easeInEaseOut();
  }
  toggleText = () => {
    const { showText } = this.state
    this.setState({
      showText: !showText
    });
    this.animate();
  }
  render() {
    const { styles, item } = this.props;
    return (
      <View>
        <Text style={styles.conductSubtitle} onPress={this.toggleText}>{item.title}</Text>
        {this.state.showText ? <Text style={styles.description}>{item.description}</Text> : false}
      </View>
    );
  }
}

export default ConductItem;