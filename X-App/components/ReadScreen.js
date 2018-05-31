import React from 'react';
import { View, Text } from 'react-native';

export default class ReadScreen extends React.Component {
  static navigationOptions = {
    title: 'Read'
  };
  
    render(){
      return (
          <View>
            <Text>Read Screen</Text>
          </View>
      );
    }
}