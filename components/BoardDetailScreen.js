import React, { Component } from 'react';  
import { View, Text, StyleSheet } from 'react-native';  
import ItemComponent from '../components/ItemComponent';

import { db } from '../src/config';

let itemsRef = db.ref('/dummy1');

export default class List extends Component {  
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <Text> {this.state.items} </Text>
        ) : (
          <Text>Eweuh data na</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});