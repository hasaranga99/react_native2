import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';
import CustomLabel from './src/components/CustomLabel';




function Click (x:number ,d:number){
  
  console.log("Addition is :" +(x+d));
  console.log("% is :" +(x%d));
}

function App(): React.JSX.Element {
  return (
    <View style={{alignItems: 'center'}}>
      <CustomText fsize={40} a='React' b='Native' />
    </View>
  );
}

type CustomTextProps = {
  fsize?:number
  a:string
  b?:string
};

function CustomText(props: CustomTextProps) {
  return (
    <View>
    <Text style={{fontSize: props.fsize}}>
      {props.a} {props.b}
    </Text>


    <Button title='Click Me' onPress={()=>{
      Click(10,50)
    }}/>
    
    </View>
  );
}

export default App;
