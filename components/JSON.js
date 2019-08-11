import React, {Component} from 'react';
 import {
   AppRegistry,
   StyleSheet,

   View,
   FlatList,
   Image, RefreshControl
   } from 'react-native';
   import { AreaChart, Grid } from 'react-native-svg-charts';
   import * as shape from 'd3-shape';
   import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

   export default class Example extends Component {

     constructor() {
            super();
            this.state = {
                  refreshing:false,
                  dataSource: []
            };
     }



     renderItem = ({item})=> {
       return (
        <View  style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }} >
        <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.picture }} />
        <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} >
        <Text  styLe={{ fontSize: 18, color: 'green', marginBottom: 15}} onPress={() => alert(item.name)} > {item.name} </Text>
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
                        refreshing: false,
                        dataSource : responseJson
                      })
                     })
                     .catch((error)=> {
                       console.log(error);
                     })
     }


     render() {
       const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

       return (
         <Content>
         <Card>

         <AreaChart
             style={{ height: 200 }}
             data={data}
             contentInset={{ top: 30, bottom: 30 }}
             curve={shape.curveNatural}
             svg={{ fill: 'rgba(12, 65, 22, 0.8)' }}
         >
             <Grid />
         </AreaChart>

          </Card>
          <Card>

          <AreaChart
              style={{ height: 200 }}
              data={data}
              contentInset={{ top: 30, bottom: 30 }}
              curve={shape.curveNatural}
              svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          >
              <Grid />
          </AreaChart>

          </Card>
          </Content>


       )

     }
   }
