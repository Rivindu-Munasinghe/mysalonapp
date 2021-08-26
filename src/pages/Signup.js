import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import Logo from "../components/Logo";
import Form from "../components/Form";

export default function Signup() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form type="Signup"/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Text style={styles.signupBtn}>Login</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#455a64",
      alignItems:"center",
      justifyContent:"center"
    },
    signupTextCont:{
      flexGrow: 1,
      alignItems:"flex-end",
      justifyContent:"center",
      marginVertical:16,
      flexDirection:'row'
    },
    signupText:{
      color:'rgba(255,255,255,0.7)',
      fontSize:18
    },
    signupBtn:{
      color:'#ffffff',
      fontSize:18,
      fontWeight:'700'
    }
});