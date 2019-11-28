import React from 'react';
import { FormLabel, TextInput, Text, View, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import Button from './Button';
//import Form from 'react-bootstrap/Form';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newUsername: '',
      newPassword: '',
      RePassword: '',
    }
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleUsername(event = {}){
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;

    this.setState({[name]: value});
  }

  render() {
    if(this.props.show) {
      const screenWidth = Math.round(Dimensions.get('window').width);
      const screenHeight = Math.round(Dimensions.get('window').height);

      return (
        <View style={{position: 'absolute'}}>
          <TouchableWithoutFeedback onPress={() => this.props.hide()}>
            <View style={{width: screenWidth, height: screenHeight, backgroundColor: 'black', opacity: 0.75}}>
            </View>
          </TouchableWithoutFeedback>
          <View style={{position: 'absolute', width: this.props.width, height: this.props.height, left: (screenWidth - this.props.width)/2, top: (screenHeight - this.props.height)/2, backgroundColor: 'white', borderRadius: 10}}>
            <Text style={{fontSize: 25, marginLeft: 20, marginTop: 15}}>Create Account</Text>
            <Text style={{fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 15}}>Please Enter A Username And Password:</Text>
            <TextInput style={{fontSize: 25, marginLeft: 20, marginTop: 15, marginRight: 20, borderBottomWidth: 1, borderColor: '#727a72'}}
                maxLength={20} placeholder="Username" name="userName" onChangeText={(newUsername) => this.setState({newUsername})} value={this.state.newUsername}/>
            <TextInput style={{fontSize: 25, marginLeft: 20, marginTop: 15, marginRight: 20, borderBottomWidth: 1, borderColor: '#727a72'}}
                maxLength={20} placeholder="Password" name="password" onChangeText={(newPassword) => this.setState({newPassword})} value={this.state.newPassword}
                secureTextEntry={true}/>
            <TextInput style={{fontSize: 25, marginLeft: 20, marginTop: 15, marginRight: 20, borderBottomWidth: 1, borderColor: '#727a72'}}
                maxLength={20} placeholder="RePassword" name="repassword" onChangeText={(RePassword) => this.setState({RePassword})} value={this.state.RePassword}
                secureTextEntry={true}/>
            <TouchableOpacity>
              <Button
                  buttonStyle={{alignItems: 'center', borderRadius: 20, marginTop: 15, marginLeft: 20, marginRight: 20, padding: 10, backgroundColor: "#6a8a69"}}
                  textStyle={{color: "#ffffff", fontSize: 20}}
                  text="Submit" onPress={() => this.signUp()}/>
            </TouchableOpacity>
            <Button buttonStyle={{alignItems: 'center', justifyContent: 'center', width: 70, height: 70, position: 'absolute', right: 0}} textStyle={{fontSize: 25}} text={'✕'} onPress={() => this.props.hide()}/>
          </View>
        </View>
      )
    }
    return (<View></View>)
  }

  signUp() {
    var username = this.state.newUsername;
    var password = this.state.newPassword;
    var repass = this.state.RePassword;

    // Clear State here
    this.state.newUsername = "";
    this.state.newPassword = "";
    this.state.RePassword = "";

    // Send data back to App.js
    this.props.signUp(username, password, repass);
  }

} export default SignUp;
