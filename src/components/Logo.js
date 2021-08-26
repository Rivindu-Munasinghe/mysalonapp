import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Logo() {
    return (
      <View style={styles.container}>
      <Image 
        style={{width:100, height:100}}
       source={require('../Images/logo.png')}
      />
      <Text style={styles.logotext}>Welcome to Salon App</Text>
      </View>
    );
  }

  const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    logotext:{
      marginVertical:15,
      fontSize:20,
      color:'rgba(255,255,255,0.7)'
    }
  });