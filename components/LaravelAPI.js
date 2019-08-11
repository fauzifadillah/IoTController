// Coin.js

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../src/FetchCoins';
import CoinList from '../components/ArduList';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { Dimensions, ScrollView } from 'react-native'
const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
})

export class Coin extends Component {

  state = {
    coins: []
  }

  async componentDidMount() {
    const coins = await ajax.fetchCoins();
    this.setState({coins});
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.coins.length > 0
        ? <CoinList coins={this.state.coins} />
        : <Text>No coins</Text>
      }	
      <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 2) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      </View>
    )
  }
}

export default Coin;