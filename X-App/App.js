import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CreateScreen from './components/CreateScreen';

export default class App extends React.Component {
    render() {
      return (
        <RootStack/>
      );
    }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Create: {
    screen: CreateScreen
  }
});

