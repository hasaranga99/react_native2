import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import CustomLabel from './src/components/CustomLabel';



function App(): React.JSX.Element {

  console.log('App Component is rendered');


  const [count, setCount] = useState(0);

  function ChangeFunction() {
    setCount(count + 1);
  }


  return (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontSize: 30 }}>Count is :{count}</Text>
      <Button title='Change Count' onPress={ChangeFunction} />
    </View>
  );

}


export default App;
