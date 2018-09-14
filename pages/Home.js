import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';

import Actions from '../components/Actions';


export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textcont}>
          <Text style={styles.titulo}>Escolha uma ação </Text>
        </View>
        <Actions/>
      </View>
 
    );
  }
}

const styles = StyleSheet.create({
 container:{
    flexGrow: 1,
    justifyContent:'flex-end',
    //alignItems:'stretch',
    backgroundColor: '#718792',
 },
 textcont:{
    justifyContent: 'center',
    alignItems:'center',
    //backgroundColor: '#718792',
    marginBottom:15, 
 },
  titulo:{
   marginVertical:15,
   fontSize:30,
   justifyContent: 'flex-start',
   //alignItems:'center',
   paddingBottom:10,
   //fontFamily:'serif',
 },
});