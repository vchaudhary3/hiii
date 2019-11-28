import React from 'react';
import { Platform, Dimensions, View, Button, Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import UserProfileScreen from './UserProfileScreen';
import SafeAreaView from 'react-native-safe-area-view';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const DrawerConfig = {
    drawerWidth: screenWidth*0.85,
}

const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: UserProfileScreen
    }
  },
  DrawerConfig
);

// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  //signupScreen: { screen: SignupScreen },
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})

const PrimaryNavigator = createStackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default createAppContainer(PrimaryNavigator);
