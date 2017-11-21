/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AboutContainer } from './scenes/About';

import Router from './navigation/routes';

import Store from './redux/store';

import { Provider } from 'react-redux'

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';



const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation 
            id="root"
            navigatorUID= "root"
            initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
      </Provider>
    );
  }
}