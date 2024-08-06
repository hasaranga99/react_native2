import React from 'react';
import {Button, Text, View} from 'react-native';
import CustomLabel from './src/components/CustomLabel';

function App(): React.JSX.Element {
  return (
    <View style={{alignItems: 'center'}}>
      <CustomText fsize={40} a='React' />
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
    <Text style={{fontSize: props.fsize}}>
      {props.a} {props.b}
    </Text>
  );
}

export default App;
