import React from 'react';
import { View, Text } from 'react-native';

export default class UpdateScreen extends React.Component {
  static navigationOptions = {
    title: 'Update'
  };
  
    render(){
      return (
          <View>
            <Text>Update Screen</Text>
          </View>
      );
    }
}