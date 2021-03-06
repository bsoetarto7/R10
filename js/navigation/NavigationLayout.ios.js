import React, { Component } from 'react';
import Router from './routes';
import {
  Text
} from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import HeaderGradient from '../components/Header/HeaderGradient';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../configs/styles';

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
  }
  renderIcon(iconName, isSelected){
    // determine what color the icons should be base on isSelected
    // return the icon component with appropriate props set
    return <Icon name={iconName} size={30} color={isSelected ? colors.white : colors.mediumGrey} />
  }
  renderTitle(isSelected,title){
    return <Text style={{ color: isSelected ? 'white': colors.mediumGrey, fontFamily: typography.fontMainReg }}>{title}</Text>
  }
  render() {
    return (
      <TabNavigation
        initialTab="schedule"
        tabBarColor="black">
        <TabItem
          id="schedule"
          title="Schedule"
          // selectedStyle={styles.selectedTab}
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon('ios-calendar', isSelected)}
          >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig = {defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="favourite"
          title="favourite"
          // selectedStyle={styles.selectedTab}
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon('ios-heart', isSelected)}
          >
          <StackNavigation
            id="favourite"
            navigatorUID="favourite"
            initialRoute={Router.getRoute('favourite')}
            defaultRouteConfig = {defaultRouteConfig}
          />
        </TabItem>

        <TabItem
          id="about"
          title="About"
          // selectedStyle={styles.selectedTab}
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon('ios-information-circle', isSelected)}
          >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig = {defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout