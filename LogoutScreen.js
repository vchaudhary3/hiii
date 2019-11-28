import React from 'react';
import { Text, View, Button } from 'react-native';
import MenuButton from './MenuButton';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={{padding: 10, fontSize: 25}}>Are you sure you want to log out?</Text>
          <Button buttonStyle={{backgroundColor: '#aaaaaa', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10}}
              textStyle={{color: '#ffffff'}}
              onPress={() => this.props.navigation.navigate('loginStack')}
              title="Log Out"/>
        </View>
      );
    }

} export default HomeScreen;
