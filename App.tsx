import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import CustomLabel from './src/components/CustomLabel';



function App(): React.JSX.Element {

  var textValue = ''

  function ImageCatch1() {

    console.log("Test_Test")

  }

  function DisplayValue() {
    console.log('Text Value = ' + textValue)
  }

  function OnTextChange(v: string) {
    textValue = v;
  }
  return (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <TextInput style={{
        width: 300, height: 50, backgroundColor: 'black', color: 'white', borderRadius: 40,
        marginVertical: 20, paddingHorizontal: 20, padding: 5

      }} onChangeText={OnTextChange} />

      <Button title='Click here' onPress={DisplayValue} />
    </View>
  );

}


export default App;
