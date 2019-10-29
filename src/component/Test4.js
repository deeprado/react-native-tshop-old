import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.test}>{this.props.text}</Text>
    );
  }
}

export default class Test4 extends Component {
  render() {
    return (
      <View >
        <Blink text='I love to blink'  />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    color: 'red'
  }
})