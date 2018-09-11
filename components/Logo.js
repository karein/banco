import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <Image style={{width:300, height:189}}
          source={require('../images/yyy.png')}
       />
       <Text style={styles.LogoText}></Text>
     </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems:'center',
    justifyContent:'flex-end',
  },
  LogoText:{
    marginVertical: 15,
    fontSize:18,
    color:'rgba(255, 255, 255, 0.7)',
  },
});
