import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import SelectScrn from "./src/pages/SelectScrn";
import Login from "./src/pages/Login";
import CustReg from "./src/pages/CustReg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor="#1c313a"
      barStyle="light-content"
      />
      <CustReg/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#455a64",
    //alignItems:"center",
    justifyContent:"center",
    paddingLeft:60,
    paddingRight:60
  },
});
