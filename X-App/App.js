import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CreateScreen from './components/CreateScreen';
import ReadScreen from './components/ReadScreen';
import UpdateScreen from './components/UpdateScreen';

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        layout: ''
      }
   }
   
    render() {
      return (
          <View style={styles.mainContainer}>
            <Button
              title='Tab Mode'
              onPress={() => this.setState({
                layout: 'tab'
              })}
            />
          </View>
      );
    }
}

const RootStackTab = createBottomTabNavigator({
    Home: {
      screen: HomeScreen
    },
    Create: {
      screen: CreateScreen
    },
    Read: {
      screen: ReadScreen
    },
    Update: {
      screen: UpdateScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if(routeName === 'Home') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
          } else if(routeName === 'Create') {
            iconName = `ios-add${focused ? '' : '-outline'}`;
          } else if(routeName === 'Read') {
            iconName = `ios-add${focused ? '' : '-outline'}`;
          } else if(routeName === 'Update') {
            iconName = `ios-add${focused ? '' : '-outline'}`;
          }
          
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
});


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

