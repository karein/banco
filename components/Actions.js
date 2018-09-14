import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';

export default class Actions extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.conteudo}>
          <TouchableOpacity style={{}}>
            <Text style={styles.textIten}>Pagar Boleto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{}}>
            <Text style={styles.textIten}>Pagar Boleto</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textIten}>Pagar Boleto</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textIten}>Pagar Boleto</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteudo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    //marginVertical: 0,
    //height: 400,
    marginHorizontal: 5,
    //backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  textIten: {
    width: 360,
    height: 95,
    //paddingBottom:35,
    paddingTop: 35,
    paddingLeft: 8,
    fontSize: 20,
    //fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginVertical:5.2,
    //fontFamily:'serif',
  },
});

//<Icon name='keyboard-arrow-right' style={{alignItems:'flex-end',}}/>
