import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

import Logo from "../components/Logo";

export default function Login() {
    return (
      <View style={styles.container}>
        <Logo/>
        <View style={styles.signupTextCont}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnTxt}>
                  Sign Up as User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnTxt}>
                  Sign Up as Merchant</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.signupText}>Already a user?</Text>
          <TouchableOpacity>
            <Text style={styles.signupBtn}>Login</Text>
          </TouchableOpacity>        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
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
      fontWeight:'700',
    },
    btnTxt:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    button:{
        flexGrow:1,
        backgroundColor:'#1c313a',   
        borderRadius:25,
        width:10,
        marginVertical:10,
        paddingVertical:12,
        justifyContent:'center',
        flexDirection:'row'
    }
});