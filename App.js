import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class ReadButton extends Component {
  render(){
    return(
      <Button color="purple" title="click"> </Button>
    )
  }
}
export default class App extends Component {
  render() {
    return (
        <View style = {{marginTop:350, width:100, marginLeft:125}}> 
        <ReadButton/>
        <Text> Primera App </Text>
        </View>
    );
  }
}