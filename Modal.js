import React from 'react';
import { FormLabel, TextInput, Text, View, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import Button from './Button';
//import Form from 'react-bootstrap/Form';

class Modal extends React.Component {

  //const User =

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
            <Text style={{fontSize: 20, marginLeft: 20, marginRight: 20, marginTop: 15}}>Hello World</Text>
            <TouchableOpacity>
              <Button buttonStyle={{alignItems: 'center', marginTop: 15, marginLeft: 20, marginRight: 20, padding: 10, backgroundColor: "#6a8a69"}} textStyle={{color: "#ffffff", fontSize: 20}} text="Submit" onPress={() => this.props.signUp()}/>
            </TouchableOpacity>
            <Button buttonStyle={{alignItems: 'center', justifyContent: 'center', width: 70, height: 70, position: 'absolute', right: 0}} textStyle={{fontSize: 25}} text={'✕'} onPress={() => this.props.hide()}/>
          </View>
        </View>
      )
    }
    return (<View></View>)
  }
}

export default Modal;
