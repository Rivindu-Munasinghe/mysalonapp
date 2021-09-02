import React from 'react';
import { 
  ActivityIndicatorBase,
  StyleSheet, 
  Text, 
  TextInput, 
  Image,
  TouchableOpacity, 
  View 
} from 'react-native';

export default function CustReg() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Register as Customer</Text>
        <Image
          style={{width:100, height:100, marginBottom:10}}
          source={require('../Images/logo.png')}/>
        <TextInput style={styles.textinput} placeholder="First Name" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Last Name" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Email" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Gender" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Birthday" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Mobile Number" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Address" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Password" 
        underlineColorAndroid={'transparent'} secureTextEntry/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>
                Sign Up
            </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignSelf:'stretch',
      alignItems:'center'
    },
    header:{
        fontSize:24,
        color:'#fff',
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor:'#199187',
        borderBottomWidth:1,
    },
    textinput:{
        alignSelf:'stretch',
        height:40,
        fontSize:18,
        borderBottomWidth:1,
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        color:'#ffffff',
        marginVertical:5
    },
    button:{
        backgroundColor:'#1c313a',   
        borderRadius:25,
        width:200,
        marginVertical:5,
        paddingVertical:12
      },
      btnTxt:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      },
});