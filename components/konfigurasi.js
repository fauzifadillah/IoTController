import React, {Component} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   FlatList,
   Image
   } from 'react-native';
import Smartconfig from 'react-native-smartconfig';
console.log(Smartconfig)
   export default class Example extends Component {

     constructor() {
            super();
            this.state = {
                  dataSource: []
            };
     }

     renderItem = ({item})=> {
       return (
        <View  style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }} >
        <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.picture }} />
        <View  style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }} >
        <Text  style={{ fontSize: 18, color: 'green', marginBottom: 15}} > {item.name} </Text>
        <Text  style={{ fontSize: 16, color: 'red' }} > {item.age} </Text>
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
        return (


          <View>
              <Text style={{ fontSize: 18, color: 'grey', textAlign: 'center', marginBottom: 10 }}> Please configure your connection first! </Text>
              <FlatList
               data={this.state.dataSource}
               renderItem={this.renderItem}
               />
          </View>
        );


     }
   }
