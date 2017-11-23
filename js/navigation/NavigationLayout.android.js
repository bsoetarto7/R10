import React, { Component } from 'react';
import Router from './routes';
import {
  Text,
  StyleSheet,
  GradientBackground
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import HeaderGradient from '../components/Header/HeaderGradient';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../configs/styles'


const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {fontFamily: typography.fontRegular},
    renderBackground: () => (
      <HeaderGradient colors={[colors.purple, colors.red]}/>
    )
  }
}

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };
  renderIcon(iconName, isSelected){
    // determine what color the icons should be base on isSelected
    // return the icon component with appropriate props set
    return <Icon name={iconName} size={30} color={isSelected ? colors.purple : colors.mediumGrey} />
  }

  renderTitle(title, isSelected){
    return <Text style={{ color: isSelected ? colors.purple : colors.mediumGrey, fontFamily: typography.fontMainReg, paddingLeft: 10, fontSize:16 }}>{title}</Text>
  }

  render() {

    return (
      <DrawerNavigation
        id='main'
        initialItem='schedule'
        drawerWidth={300}
      >
        <DrawerNavigationItem
          id='schedule'
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
          renderIcon={(isSelected) => this.renderIcon('md-calendar', isSelected)}
        >
          <StackNavigation
            id='schedule'
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig = {defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='favourite'
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('Favourite', isSelected)}
          renderIcon={(isSelected) => this.renderIcon('md-heart', isSelected)}
        >
          <StackNavigation
            id='favourite'
            initialRoute={Router.getRoute('favourite')}
            defaultRouteConfig = {defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='about'
          // selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('About', isSelected)}
          renderIcon={(isSelected) => this.renderIcon('md-information-circle', isSelected)}
        >
          <StackNavigation
            id='about'
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig = {defaultRouteConfig}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }
}

export default NavigationLayout