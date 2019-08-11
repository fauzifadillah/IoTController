import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BoardScreen extends Component {
  static navigationOptions = {
    title: 'Board List',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Board List</Text>
        <Button
          title="ARDUINO DUMMY 1 FIREBASE"
          onPress={() => this.props.navigation.navigate('BoardDetails')}
        />
        <Button
          title="ARDUINO DUMMY 2 API"
          onPress={() => this.props.navigation.navigate('DATA')}
        />
        <Button
          title="ARDUINO DUMMY 3 LARAVEL API"
          onPress={() => this.props.navigation.navigate('LaravelAPI')}
        />
      </View>
    );
  }
}

export default BoardScreen;