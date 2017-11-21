import React, { Component } from 'react';
import Router from './routes';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="schedule">
        <TabItem
          id="schedule"
          title="schedule"
          // selectedStyle={styles.selectedTab}
          // renderIcon={(isSelected) => <Image source={require('./assets/images/home.png')} /> }
          >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>

        <TabItem
          id="about"
          title="about"
          // selectedStyle={styles.selectedTab}
          // renderIcon={(isSelected) => <Image source={require('./assets/images/posts.png')} /> }
          >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout