import React, { Component } from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  Animated,
  Easing
} from 'react-native';
import PropTypes from 'prop-types';
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
    this.duration = 300
    this.state={
      showText:false,
      toggleIcon:false,
      spinValue: new Animated.Value(0)
    }
  }

  static propTypes = {
    item: PropTypes.object.isRequired,
    styles : PropTypes.object.isRequired
  }

  animate = () => {
    LayoutAnimation.easeInEaseOut();
    Animated.parallel([
      Animated.timing(
        this.state.spinValue, 
        { 
          toValue: 1,
          duration: this.duration,
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
    const { showText, toggleIcon } = this.state
    this.setState({
      showText: !showText,
    });

    setTimeout(() => {
      this.setState({
        toggleIcon: !toggleIcon
      })
    }, !showText? this.duration : 0);
    
    if(showText){
      this.reset()
    }
    this.animate();
  }
  render() {
    const { styles, item } = this.props;
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
            <Icon name={!this.state.toggleIcon ? Platform.OS === 'ios' ? 'ios-add' : 'md-add' : Platform.OS === 'ios' ? 'ios-remove' : 'md-remove'} size={20} color={colors.purple} />
          </Animated.View> {item.title}
        </Text>
        {this.state.showText ? <Text style={styles.description}>{item.description}</Text> : false}
      </View>
    );
  }
}

export default ConductItem;