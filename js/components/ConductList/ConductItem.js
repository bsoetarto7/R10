import React, { Component } from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  Animated,
  Easing
} from 'react-native';
import styles from './styles';
import { colors } from '../../configs/styles';
import Icon from 'react-native-vector-icons/Ionicons';

class ConductItem extends Component {
  constructor(){
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental 
      && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    super();
    this.state={
      showText:false,
      spinValue: new Animated.Value(0)
    }
  }
  animate = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.parallel([
      Animated.timing(
        this.state.spinValue, 
        { 
          toValue: 1,
          duration: 300,
          easing:Easing.elastic(0.4)
        }
      )
    ]).start();
  }
  reset = () => {
    this.setState({
      spinValue: new Animated.Value(0)
    })
  }
  toggleText = () => {
    const { showText } = this.state
    this.setState({
      showText: !showText
    });
    if(showText){
      this.reset()
    }
    this.animate();
  }
  render() {
    const { styles, item } = this.props;
    console.log(this.state.spinValue);
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View>
        <Text style={styles.conductSubtitle} onPress={this.toggleText}>
          <Animated.View
            style={{
              width:16,
              height:16,
              transform: [{rotate: spin}]
            }}
          >
            <Icon name={!this.state.showText ? Platform.OS === 'ios' ? 'ios-add' : 'md-add' : Platform.OS === 'ios' ? 'ios-remove' : 'md-remove'} size={20} color={colors.purple} />
          </Animated.View> {item.title}
        </Text>
        {this.state.showText ? <Text style={styles.description}>{item.description}</Text> : false}
      </View>
    );
  }
}

export default ConductItem;