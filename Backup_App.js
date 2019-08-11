import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super()
    this.state = {
      dataSource: []
    };
  }

  renderItem = ({ item }) => {
    return (
      <View  style={{ flex: 1, flexDirection: 'row', marginBottos: 3 }} >
      <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.image }} />
      <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} >
      <Text  styLe={{ fontSize: 18, coLor: 'green', morginBottom: 15}} >Book {item.name} </Text>
      <Text  style={{ fontsize: 16, coLor: 'red' }} > {item.author} </Text>
        </View>
      </View>
      )



  }

  componentDidMount() {
    const url = 'http://www.json-generator.com/api/json/get/bPryOjBcuq?indent=2'
    fetch(url)
    .then((response) => response.Json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.friends
          })
      })
    .catch((error) => {
      console.log(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text> IEU NAON </Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

///////////////////////

import React, {Component} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   FlatList,
   Image
   } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import BoardScreen from './components/BoardScreen.js';


   const RootStack = createStackNavigator(
     {
       Board: BoardScreen,

     },
     {
       initialRouteName: 'Board',
       navigationOptions: {
         headerStyle: {
           backgroundColor: '#777777',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       },
     },
   );
   const Lieur = createAppContainer(RootStack);

   export default class Example extends Component {

     constructor() {
            super();
            this.state = {
                  dataSource: []
            };
     }

     renderItem = ({item})=> {
       return (
        <View  style={{ flex: 1, flexDirection: 'row', marginBottos: 3 }} >
        <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.picture }} />
        <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} >
        <Text  styLe={{ fontSize: 18, color: 'green', morginBottom: 15}} > {item.name} </Text>
        <Text  style={{ fontsize: 16, color: 'red' }} > {item.age} </Text>
          </View>
        </View>
         )
     }

     componentDidMount() {
          const url = "http://www.json-generator.com/api/json/get/cpdiipfvSa?indent=4";
          fetch(url).then((response)=>response.json())
                    .then((responseJson)=> {
                      this.setState({
                        dataSource : responseJson
                      })
                     })
                     .catch((error)=> {
                       console.log(error);
                     })
     }


     render() {
        // return (
        //
        //
        //   <View>
        //       <Text> Hello</Text>
        //       <Text> Hello</Text>
        //
        //       <FlatList
        //        data={this.state.dataSource}
        //        renderItem={this.renderItem}
        //        />
        //   </View>
        //    )
        return <Lieur />;

     }
   }
