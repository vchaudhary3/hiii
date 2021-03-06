import React from 'react';
import { Text, View } from 'react-native';
import MenuButton from './MenuButton';

class UserProfileScreen extends React.Component {
    render() {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={{padding: 10, fontSize: 25}}>User Profile</Text>
        </View>
      );
    }

} export default UserProfileScreen;
