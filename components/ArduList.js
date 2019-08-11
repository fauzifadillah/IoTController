// CoinList.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class CoinList extends Component {

  static propTypes = {
      coins: PropTypes.array.isRequired
  }; 
  render() {
    return (
      <View style={styles.coinsList}>
        {this.props.coins.map((coin) => {
            return (
                <View key={coin.id}>
                    <Text style={styles.cointext}>{coin.dummy1} | { coin.dummy2 } | { coin.dummy3 } | { coin.dummy4 }| { coin.dummy5 } | { coin.dummy6 }</Text>
                </View>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    coinsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    cointext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});