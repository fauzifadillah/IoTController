import React, {Component} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   View,
   FlatList,
   Image, RefreshControl, Button, Switch, ScrollView, ImageBackground
   } from 'react-native';
import firebase from 'firebase';
import { material } from 'react-native-typography';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

export default class RelayController extends Component {


  constructor() {
         super();
         this.state = {
               isLoading: true,
               isSwitchOn_1: false,
               switchValue_1: false,
               isSwitchOn_2: false,
               switchValue_2: false,
               isSwitchOn_3: false,
               switchValue_3: false,
               isSwitchOn_4: false,
               switchValue_4: false,
               isSwitchOn_5: false,
               switchValue_5: false,
               isSwitchOn_6: false,
               switchValue_6: false,
               isSwitchOn_7: false,
               switchValue_7: false,
               isSwitchOn_8: false,
               switchValue_8: false

         };
  }
  blah() {
    firebase.database().ref('mcu/relay/RELAY_1').on('value', function (x) {
        console.log(x.val());
        nilai = x.val();
        console.log(nilai);
        if (nilai == 1){
          this.setState({ switchValue_1: true });
          console.log(this.state.switchValue_1);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_2').on('value', function (x) {
        console.log(x.val());
        nilai_2 = x.val();
        console.log(nilai_2);
        if (nilai_2 == 1){
          this.setState({ switchValue_2: true });
          console.log(this.state.switchValue_2);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_3').on('value', function (x) {
        console.log(x.val());
        nilai_3 = x.val();
        console.log(nilai_3);
        if (nilai_3 == 1){
          this.setState({ switchValue_3: true });
          console.log(this.state.switchValue_3);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_4').on('value', function (x) {
        console.log(x.val());
        nilai_4 = x.val();
        console.log(nilai_4);
        if (nilai_4 == 1){
          this.setState({ switchValue_4: true });
          console.log(this.state.switchValue_4);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_5').on('value', function (x) {
        console.log(x.val());
        nilai_5 = x.val();
        console.log(nilai_5);
        if (nilai_5 == 1){
          this.setState({ switchValue_5: true });
          console.log(this.state.switchValue_5);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_6').on('value', function (x) {
        console.log(x.val());
        nilai_6 = x.val();
        console.log(nilai_6);
        if (nilai_6 == 1){
          this.setState({ switchValue_6: true });
          console.log(this.state.switchValue_6);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_7').on('value', function (x) {
        console.log(x.val());
        nilai_7 = x.val();
        console.log(nilai_7);
        if (nilai_7 == 1){
          this.setState({ switchValue_7: true });
          console.log(this.state.switchValue_7);
        }

    }.bind(this));

    firebase.database().ref('mcu/relay/RELAY_8').on('value', function (x) {
        console.log(x.val());
        nilai_8 = x.val();
        console.log(nilai_8);
        if (nilai_8 == 1){
          this.setState({ switchValue_8: true });
          console.log(this.state.switchValue_8);
        }

    }.bind(this));
// http://arduino.esp8266.com/stable/package_esp8266com_index.json
  }
  componentWillMount() {
        var config = {
            apiKey: "AIzaSyAkn7CRbt_HTUl0ufWD6h_7HjyagnMUbjE",
            authDomain: "mcu-api.firebaseapp.com",
            databaseURL: "https://mcu-api.firebaseio.com",
            projectId: "mcu-api",
            storageBucket: "mcu-api.appspot.com",
            messagingSenderId: "713783123517"

        };
        if (!firebase.apps.length) {
           firebase.initializeApp(config);
        }

            this.blah();

      }



        toggleSwitch_1 = value => {

        //onValueChange of the switch this function will be called
        if (this.state.isSwitchOn_1 == value){
          this.setState({ switchValue_1: value });
          firebase.database().ref('mcu/relay').update(
                  {
                    RELAY_1: 0,

                  }
                ).then(() => {
                    console.log("RELAY 1 TURNED OFF!");
                }).catch((error) => {
                    console.log(error);
                });



        } else {
          this.setState({ switchValue_1: value });
          firebase.database().ref('mcu/relay').update(
                  {
                    RELAY_1: 1,

                  }
                ).then(() => {
                    console.log("RELAY 1 TURNED ON!");
                }).catch((error) => {
                    console.log(error);
                });
        }
        //state changes according to switch
        //which will result in re-render the text
      };
      toggleSwitch_2 = value => {
      //onValueChange of the switch this function will be called
      if (this.state.isSwitchOn_2 == value){
        this.setState({ switchValue_2: value });
        firebase.database().ref('mcu/relay').update(
                {
                  RELAY_2: 0,

                }
              ).then(() => {
                  console.log("RELAY 2 TURNED OFF!");
              }).catch((error) => {
                  console.log(error);
              });

      } else {
        this.setState({ switchValue_2: value });
        firebase.database().ref('mcu/relay').update(
                {
                  RELAY_2: 1,

                }
              ).then(() => {
                  console.log("RELAY 2 TURNED ON!");
              }).catch((error) => {
                  console.log(error);
              });
      }
      //state changes according to switch
      //which will result in re-render the text
    };
    toggleSwitch_3 = value => {
    //onValueChange of the switch this function will be called
    if (this.state.isSwitchOn_3 == value){
      this.setState({ switchValue_3: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_3: 0,

              }
            ).then(() => {
                console.log("RELAY 3 TURNED OFF!");
            }).catch((error) => {
                console.log(error);
            });

    } else {
      this.setState({ switchValue_3: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_3: 1,

              }
            ).then(() => {
                console.log("RELAY 3 TURNED ON!");
            }).catch((error) => {
                console.log(error);
            });
    }
    //state changes according to switch
    //which will result in re-render the text
    };
    toggleSwitch_4 = value => {
    //onValueChange of the switch this function will be called
    if (this.state.isSwitchOn_4 == value){
      this.setState({ switchValue_4: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_4: 0,

              }
            ).then(() => {
                console.log("RELAY 4 TURNED OFF!");
            }).catch((error) => {
                console.log(error);
            });

    } else {
      this.setState({ switchValue_4: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_4: 1,

              }
            ).then(() => {
                console.log("RELAY 4 TURNED ON!");
            }).catch((error) => {
                console.log(error);
            });
    }
    //state changes according to switch
    //which will result in re-render the text
    };
    toggleSwitch_5 = value => {
    //onValueChange of the switch this function will be called
    if (this.state.isSwitchOn_5 == value){
      this.setState({ switchValue_5: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_5: 0,

              }
            ).then(() => {
                console.log("RELAY 5 TURNED OFF!");
            }).catch((error) => {
                console.log(error);
            });

    } else {
      this.setState({ switchValue_5: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_5: 1,

              }
            ).then(() => {
                console.log("RELAY 5 TURNED ON!");
            }).catch((error) => {
                console.log(error);
            });
    }
    //state changes according to switch
    //which will result in re-render the text
    };
    toggleSwitch_6 = value => {
    //onValueChange of the switch this function will be called
    if (this.state.isSwitchOn_6 == value){
      this.setState({ switchValue_6: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_6: 0,

              }
            ).then(() => {
                console.log("RELAY 6 TURNED OFF!");
            }).catch((error) => {
                console.log(error);
            });

    } else {
      this.setState({ switchValue_6: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_6: 1,

              }
            ).then(() => {
                console.log("RELAY 6 TURNED ON!");
            }).catch((error) => {
                console.log(error);
            });
    }
    //state changes according to switch
    //which will result in re-render the text
    };
    toggleSwitch_7 = value => {
    //onValueChange of the switch this function will be called
    if (this.state.isSwitchOn_7 == value){
      this.setState({ switchValue_7: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_7: 0,

              }
            ).then(() => {
                console.log("RELAY 7 TURNED OFF!");
            }).catch((error) => {
                console.log(error);
            });

    } else {
      this.setState({ switchValue_7: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_7: 1,

              }
            ).then(() => {
                console.log("RELAY 7 TURNED ON!");
            }).catch((error) => {
                console.log(error);
            });
    }
    //state changes according to switch
    //which will result in re-render the text
    };
    toggleSwitch_8 = value => {
    //onValueChange of the switch this function will be called
    if (this.state.isSwitchOn_8 == value){
      this.setState({ switchValue_8: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_8: 0,

              }
            ).then(() => {
                console.log("RELAY 8 TURNED OFF!");
            }).catch((error) => {
                console.log(error);
            });

    } else {
      this.setState({ switchValue_8: value });
      firebase.database().ref('mcu/relay').update(
              {
                RELAY_8: 1,

              }
            ).then(() => {
                console.log("RELAY 8 TURNED ON!");
            }).catch((error) => {
                console.log(error);
            });
    }
    //state changes according to switch
    //which will result in re-render the text
    };



     render() {
        return (
          <ImageBackground source={require('../images/backgroundunpad.jpg')} style={styles.backgroundImage} >

          <Content>
            <Card>
              <CardItem>
                <Icon active name="cog" />
                <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 1 </Text>
                <Switch
                  style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                  onValueChange={this.toggleSwitch_1}
                  value={this.state.switchValue_1}
                />
                <Right>

                </Right>
               </CardItem>

               <CardItem>
                 <Icon active name="cog" />
                 <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 2 </Text>
                 <Switch
                   style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                   onValueChange={this.toggleSwitch_2}
                   value={this.state.switchValue_2}
                 />
                 <Right>

                 </Right>
                </CardItem>

                <CardItem>
                  <Icon active name="cog" />
                  <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 3 </Text>
                  <Switch
                  style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                  onValueChange={this.toggleSwitch_3}
                  value={this.state.switchValue_3}
                  />
                  <Right>

                  </Right>
                 </CardItem>

                 <CardItem>
                   <Icon active name="cog" />
                   <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 4 </Text>
                   <Switch
                   style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                   onValueChange={this.toggleSwitch_4}
                   value={this.state.switchValue_4}
                   />
                   <Right>

                   </Right>
                  </CardItem>

                  <CardItem>
                    <Icon active name="cog" />
                    <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 5 </Text>
                    <Switch
                    style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                    onValueChange={this.toggleSwitch_5}
                    value={this.state.switchValue_5}
                    />
                    <Right>

                    </Right>
                   </CardItem>

                   <CardItem>
                     <Icon active name="cog" />
                     <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 6 </Text>
                     <Switch
                     style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                     onValueChange={this.toggleSwitch_6}
                     value={this.state.switchValue_6}
                     />
                     <Right>

                     </Right>
                    </CardItem>

                    <CardItem>
                      <Icon active name="cog" />
                      <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 7 </Text>
                      <Switch
                      style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                      onValueChange={this.toggleSwitch_7}
                      value={this.state.switchValue_7}
                      />
                      <Right>

                      </Right>
                     </CardItem>

                     <CardItem>
                       <Icon active name="cog" />
                       <Text style={{ fontSize: 16, marginTop: 8, color: '#0c3953', textAlign: 'center'}}> Relay 8 </Text>
                       <Switch
                       style={{ marginLeft: 165, marginBottom: 8, marginTop:8 }}
                       onValueChange={this.toggleSwitch_8}
                       value={this.state.switchValue_8}
                       />
                       <Right>

                       </Right>
                      </CardItem>
             </Card>
          </Content>



          </ImageBackground>
        );


     }
   }
   const styles = StyleSheet.create({
        textWithShadow:{
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            fontSize: 19,
            textAlign: 'center',
            textShadowOffset: {width: 0.2, height: 1},
            textShadowRadius: 1
        },
        TextStyle:{
          ...material.display1,
          fontSize: 19,
          textAlign: 'center',
          color: '#0c3953',
        },
        backgroundImage: {
          flex: 1,
          resizeMode: 'stretch', // or 'stretch'
          width: null,
          height: null,
        },
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
        }
   });
