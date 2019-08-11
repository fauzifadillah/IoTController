import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Content, Button, Icon, Text } from 'native-base'
import Conf from '../components/JSON.js';

// const Screen2_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Second: {
//     screen: Conf,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 2',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

class BoardScreen extends Component {
  static navigationOptions = {
    title: 'Smart Office IoT',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#0c3953'
    },
  };


  render() {
    return (

      <ImageBackground source={require('../images/backgroundunpad.jpg')} style={styles.backgroundImage} >

        <TouchableOpacity>
        <Button bordered light style={{  marginLeft: 110, marginTop: 180, marginBottom: 20}} onPress={() => this.props.navigation.navigate('Konfigurasi')}>
            <Icon name='cog' style={{  color:'#0c3953' }} />
            <Text style={{  color:'#0c3953' }}>Configure</Text>
          </Button>
        </TouchableOpacity>
        <Button bordered light style={{  marginLeft: 110, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.navigate('Back')}>
            <Icon name='cog' style={{  color:'#0c3953' }} />
            <Text style={{  color:'#0c3953' }}>Controller</Text>
          </Button>
          <Button bordered light style={{  marginLeft: 110, marginTop: 20, marginBottom: 20}} onPress={() => this.props.navigation.navigate('Data')}>
              <Icon name='cog' style={{  color:'#0c3953' }} />
              <Text style={{  color:'#0c3953' }}>Data Logs</Text>
            </Button>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  }

});

export default BoardScreen;
