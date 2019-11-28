import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class MenuButton extends React.Component {
    render(){
      return(
        <Ionicons
          name='md-menu'
          color='#000000'
          size={32}
          style={{zIndex: 0, position: 'absolute', top: 40, left: 20}}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      )
    }
}
