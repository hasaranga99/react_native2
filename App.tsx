import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import CustomLabel from './src/components/CustomLabel';



function App(): React.JSX.Element {

  var Student = {
    name: 'jenny',
    age: 6,
    school: 'Abc School',
    eat: function () {
      console.log("Eating...")
    },
    play: function () {
      console.log("Play some games...")
    }
  }



  var Cat = {
    name: 'kity',
    color: 'white',
    sleep: function () {
      console.log("Purrrr.....");
    }
  }

  function makeStudentEat() {
    Student.eat();
  }

  function makeCatSleep() {
    Cat.sleep();
  }

  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: '#444' }}>Student</Text>
      <Text style={{ fontSize: 30, color: '#444' }}>{Student.name}</Text>
      <Text style={{ fontSize: 30, color: '#444' }}>{Student.age}</Text>
      <Button title='Student Eat' onPress={makeStudentEat} />
      <Text style={{ fontSize: 30, color: '#444' }}>Cat</Text>
      <Text style={{ fontSize: 30, color: '#444' }}>{Cat.name}</Text>
      <Text style={{ fontSize: 30, color: '#444' }}>{Cat.color}</Text>
      <Button title='Cat Sleep' onPress={makeCatSleep} />
    </View>
  );

}


export default App;
