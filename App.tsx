import React, { useState } from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import CustomLabel from './src/components/CustomLabel';



function App(): React.JSX.Element {
  return (
    <View style={{alignItems: 'center'}}>
      
      
      <TextInput style={{
        backgroundColor:'#aaa',
        color:'#000',
        width:300,
        marginTop:150,
        borderRadius:10,
        paddingLeft:30,
        paddingRight:30,
      }} 
      placeholder='User Name'
      placeholderTextColor={'#444'}
      
      />
      <TextInput style={{
        backgroundColor:'#aaa',
        color:'#000',
        width:300,
        marginTop:20,
        borderRadius:10,
        paddingLeft:30,
        paddingRight:30,
      }} 
      secureTextEntry={true}
      placeholder='Password'
      placeholderTextColor={'#444'}
      
      />
    </View>
  );
}

export default App;
