import React, { Component } from 'react';
import { View,TextInput,Text,Button,Alert } from 'react-native';

export default class AlignItemsBasics extends Component {

  state = {
    text: ''
  }

  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text>{this.state.text}</Text>
        <Button
  onPress={() => {
    Alert.alert("你点击了按钮！");
  }}
  title="点我！"
/>
      </View>
    );
  }
};
