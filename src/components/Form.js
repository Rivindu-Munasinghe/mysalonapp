import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Form() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.inputbox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Username"
          placeholderTextColor='#ffffff'/>
          <TextInput style={styles.inputbox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Password"
          placeholderTextColor='#ffffff'
          secureTextEntry/>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnTxt}>
                  Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotTxt}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
    );
  }

  const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    inputbox:{
      width:300,
      height:40,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical:5      
    },
    btnTxt:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#1c313a',   
      borderRadius:25,
      width:200,
      marginVertical:10,
      paddingVertical:12
    },
    forgotTxt:{
      color: '#ffffff',
      fontSize:16,
    }
  });