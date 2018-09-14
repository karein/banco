import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Route } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import { Card } from 'react-native-elements'; 

import Login  from './pages/Login';
import Singup  from './pages/Singup';
import Home from './pages/Home';
import Rotas from './Rotas';


const RootStack = createStackNavigator(
  {
    PaginaInicial: Login,
    Cadastro:'Singup',
    Home:'Home',
  },
  {
    initialRouteName:'PaginaInicial',
  }
);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
         <StatusBar/>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex:1,
    //alignItems:'center',
    justifyContent:'center',
  },
});
