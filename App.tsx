import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import CustomLabel from './src/components/CustomLabel';



function App(): React.JSX.Element {

  class Cal {
    number1: number = 0;
    number2: number = 0;
    Add() {
      console.log(this.number1 + this.number2)
    }
    Sub() {
      console.log(this.number1 - this.number2)
    }
  }

  function solve() {
    var cal1 = new Cal();
    cal1.number1 = 10;
    cal1.number2 = 5;
    cal1.Add();

    var cal2 = new Cal();
    cal1.number1 = 10;
    cal1.number2 = 5;
    cal1.Sub();


  }

  // var cal = {
  //   number1: 0,
  //   number2: 0,
  //   add: function () {
  //     console.log(this.number1 + this.number2)
  //   },
  //   sub: function () {
  //     console.log(this.number1 - this.number2)
  //   },
  //   mul: function () {
  //     console.log(this.number1 * this.number2)
  //   },
  //   dev: function () {
  //     console.log(this.number1 / this.number2)
  //   }
  // }




  // function adding() {
  //   cal.number1 = 30;
  //   cal.number2 = 50;
  //   cal.add();
  // }

  // function subing() {
  //   cal.number1 = 30;
  //   cal.number2 = 50;
  //   cal.sub();
  // }
  // function multi() {
  //   cal.number1 = 30;
  //   cal.number2 = 50;
  //   cal.mul();
  // }
  // function devi() {
  //   cal.number1 = 30;
  //   cal.number2 = 50;
  //   cal.dev();
  // }

  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white', justifyContent: 'center', display: 'flex' }}>
      <Text style={{ fontSize: 30, color: '#444' }}>ADD</Text>

      <Button title='Add/sub/mul/dev' onPress={solve} />
    </View>
  );

}


export default App;
