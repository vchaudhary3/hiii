import React from 'react';
import { Text, View } from 'react-native';
import Modal from './Modal';
import Button from './Button';
//import Form from './Form';
//import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Login from './Login';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DrawerNavigator from './DrawerNavigator';
import AppNav from './AppNav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //showModal: false,
      showSignUp: false,
      showLogin: false,
      test: '',
      currState: 1
    }
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      this.currPage()
    );
  }

  // <Modal width={300} height={600} show={this.state.showModal} hide={() => this.hideModal()} signUp={() => this.signUp()}/>
  // showModal() {
  //   this.setState({showModal: true});
  // }
  //
  // hideModal() {
  //   this.setState({showModal: false});
  // }
  currPage(){
    var currState = this.state.currState;
    if (currState == 0){
      // Starting State (user may login or create account)
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button buttonStyle={{backgroundColor: '#aaaaaa', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10}} textStyle={{color: '#ffffff'}} text={'Sign Up'} onPress={() => this.showSignUp()}/>
          <Button buttonStyle={{marginTop: 10, backgroundColor: '#aaaaaa', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10}} textStyle={{color: '#ffffff'}} text={'Login'} onPress={() => this.showLogin()}/>

          <SignUp width={300} height={600} show={this.state.showSignUp} hide={() => this.hideSignUp()} signUp={this.signUp}/>
          <Login width={300} height={600} show={this.state.showLogin} hide={() => this.hideLogin()} login={this.login}/>
        </View>
      );

    } else if (currState == 1) {
      // Logged in
      return(
        <AppNav logout={this.logout}/>
      );
    } else {
      // Error?
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{padding: 10, fontSize: 25}}>Error Loading State</Text>
        </View>
      );
    }

  }

  showSignUp() {
    this.setState({showSignUp: true});
  }
  hideSignUp() {
    this.setState({showSignUp: false});
  }

  showLogin() {
    this.setState({showLogin: true});
  }
  hideLogin() {
    this.setState({showLogin: false});
  }

  changePage(num){
    this.setState({currState: num});
  }

  logout(){
    this.setState({currState: 0});
  }

  // Sign Up
  signUp(newUsername, newPassword){
    console.log("in app signup: " + newUsername);
    this.createUser(newUsername, newPassword);
    this.hideSignUp();
  }

  // SignIn / Login
  login(username, password){
    console.log("in app login: " + username);
    this.state.test = "Welcome " + username;
    this.hideLogin();
    this.changePage(1);
  }

  //
  // POST -- Username and password
  createUser(userName, password){
    fetch("https://mysqlcs639.cs.wisc.edu/users",{
      method: 'POST',
      headers: {
        'Accept' : 'application/JSON',
        'Content-Type' : 'application/JSON'
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      })
    })
    .then((response) => {console.log(response)})
    .catch((error) => {console.log("ERROR" + error);})

  }
  //
  // // SignIn
  // signIn(){
  //
  // }
  //
  // // Get
  // get(){
  //   fetch("https://mysqlcs639.cs.wisc.edu"){
  //     .then(function(response) {
  //       return response.json();
  //   })
  //   fetch("https://mysqlcs639.cs.wisc.edu",{
  //     method: 'GET',
  //   })
  //
  // }

}

export default App;
