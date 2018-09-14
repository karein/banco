import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.inputBox}
          keyboardType="number-pad"
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="número da conta"
          placeholderTextColor="#ffffff"
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
        
        <TouchableOpacity style={styles.button}
                          onPress={()=>this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
  },
  button:{
    backgroundColor: '#1c313a',
    width: 300,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical:12,
  },
});
