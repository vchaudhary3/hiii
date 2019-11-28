import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen'
//import SignupScreen from '../Containers/SignupScreen'
import HomeScreen from './HomeScreen';
import UserProfileScreen from './UserProfileScreen';
import ActivitiesScreen from './ActivitiesScreen';
import LogoutScreen from './LogoutScreen';
import MenuButton from './MenuButton';

// drawer stack
const DrawerStack = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: UserProfileScreen },
  Activites: { screen: ActivitiesScreen },
  LogOut: { screen: LogoutScreen}
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack } 
})

// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  //signupScreen: { screen: SignupScreen },
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default createAppContainer(PrimaryNav)
