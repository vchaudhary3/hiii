import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from './Modal';
import Button from './Button';
import base64 from 'react-native-base64';
//import Form from './Form';
//import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Login from './Login';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //showModal: false,
      showSignUp: false,
      showLogin: false,
      test: '',
    }
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button buttonStyle={{backgroundColor: '#aaaaaa', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10}} textStyle={{color: '#ffffff'}} text={'Sign Up'} onPress={() => this.showSignUp()}/>
        <Button buttonStyle={{marginTop: 10, backgroundColor: '#aaaaaa', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 10}} textStyle={{color: '#ffffff'}} text={'Login'} onPress={() => this.showLogin()}/>
        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
          Pretend we logged in/ testing
        </Text>

        <SignUp width={300} height={600} show={this.state.showSignUp} hide={() => this.hideSignUp()} signUp={this.signUp}/>
        <Login width={300} height={600} show={this.state.showLogin} hide={() => this.hideLogin()} login={this.login}/>

      </View>

    )
  }

  // For Signup popup model, show and hide functions
  showSignUp() {
    this.setState({showSignUp: true});
  }
  hideSignUp() {
    this.setState({showSignUp: false});
  }

  // For Login popup model, show and hide functions
  showLogin() {
    this.setState({showLogin: true});
  }
  hideLogin() {
    this.setState({showLogin: false});
  }

  // Sign Up (information passed from SignUp popup)
  async signUp(newUsername, newPassword, confirmPass){
    console.log("in app signup: " + newUsername); //TESTING data passing
    var usr = newUsername;
    var pwd = newPassword;
    var post = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword,
      })
    }

    if (newUsername.length > 15 || newUsername.length < 2) {
    alert('Username should be between 2 and 15 characters');
    return;
  }
  // Check if Pasword is valid
  if (newPassword.length < 5){
    alert('Password must be at least 5 characters long');
    return;
  }
    // Check if Username is valid
    // Check if the re-entered password matches

    // Fetch
    await fetch("https://mysqlcs639.cs.wisc.edu/users", post)
      .then(async (response) => {
          console.log("in login");
          var json1 = response.json();
          // Check if signup was successful
          console.log(json1);
          message = '';
          if (response.ok){
            this.hideSignUp();
            console.log("Signup accepted");
            message = newUsername + ', your sign up is successful!\nYou will fuck up shit';

            const response1 = await fetch("https://mysqlcs639.cs.wisc.edu/login",
           {
             method: "GET",
             headers:
             {
               Accept: 'application/json',
               'Content-Type': 'application/json',
               Authorization: "Basic " + base64.encode(usr + ":" + pwd)
               }
             });

              var json = response1.json();
               console.log(json.token);
              if (json.token)
             {
               console.log('logging u in');
               this.props.navigation.navigate('drawerStack');
             }
             else {
              alert('Failed login');
             }
               }

          else {
            console.log("failed");
            message = 'Sign Up Failed'; }
         }
      );
      //.catch((error) => {console.log("ERROR" + error);})

  }

  // SignIn / Login
  async login(username, password){
    console.log("in app login: " + username);
    this.state.test = "Welcome " + username;
    this.hideLogin();
    const response = await fetch("https://mysqlcs639.cs.wisc.edu/login",
   {
     method: "GET",
     headers:
     {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       'Authorization': "Basic " + base64.encode(username + ":" + password)
       }
     });
      console.log(response);
      if (response.ok)
     {
       console.log('logging u in');
       this.props.navigation.navigate('drawerStack');
     }
     else {
      alert('Failed login');
     }

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linky: {
    color: 'blue',
    paddingTop: 10
  }
})
