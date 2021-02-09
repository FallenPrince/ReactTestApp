import React, { Component } from 'react';
import { View, TextInput, Button, Label, Toast, Text } from 'react-native';
import styles from './src/css/commonStyles';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {

    return (

      <View style={[styles.container]}>
       <Text>
       HI
       </Text>
      </View>


    );
  }
}
