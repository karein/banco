import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Singup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form name="singup" />
        <View style={styles.SingupTextview}>
          <Text style={styles.singupText}>Aready have an accont?</Text>
          <TouchableOpacity>
             onPress={() => this.props.navigation.navigate('Login')}>
             <Text style={styles.singup}> Sing in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SingupTextview: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  singupText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  singup: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '455',
  },
});
