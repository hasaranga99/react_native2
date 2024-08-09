import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import CustomLabel from './src/components/CustomLabel';



function App(): React.JSX.Element {



  return (
    // <View style={{ backgroundColor: 'yellow', flex: 1, flexDirection: 'column' }}>

    //   <View style={{ backgroundColor: 'black', flex: 1 }}>
    //   </View>
    //   <View style={{ backgroundColor: 'green', flex: 1.5, flexDirection: 'row' }}>
    //     <View style={{ backgroundColor: 'red', flex: 1 }}></View>
    //     <View style={{ backgroundColor: 'yellow', flex: 1, flexDirection: 'column' }}>
    //       <View style={{ backgroundColor: 'green', flex: 1 }}></View>
    //       <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
    //     </View>

    //   </View>
    // </View>

    <View style={{ backgroundColor: 'yellow', flex: 1 }}>
      <View style={{ backgroundColor: 'black', flex: 2 }}></View>
      <View style={{ backgroundColor: 'red', flex: 3, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'red', flex: 1 }}></View>
        <View style={{ backgroundColor: 'green', flex: 1, flexDirection: 'column' }}>
          <View style={{ backgroundColor: 'green', flex: 1, flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#000', flex: 1 }}></View>
            <View style={{ backgroundColor: '#666', flex: 1 }}></View>
            <View style={{ backgroundColor: '#fff', flex: 1 }}></View>

          </View>
          <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
        </View>
      </View>
      <View style={{ backgroundColor: 'blue', flex: 2 }}></View>
      4c104747
      p;
