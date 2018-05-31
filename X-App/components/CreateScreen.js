import React from 'react';
import { View, Text } from 'react-native';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    title: 'Create'
  };
  
    render(){
      return (
          <View>
            <Text>Create Screen</Text>
          </View>
      );
    }
}