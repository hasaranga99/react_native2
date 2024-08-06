import React from 'react';
import {Button, Text, View} from 'react-native';
import CustomLabel from './src/components/CustomLabel';

function App(): React.JSX.Element {
  return (
    <View style={{alignItems: 'center'}}>
      <CustomText fsize={60} a={'Hello'} b={'World'} />
    </View>
  );
}

function CustomText(props: any) {
  return (
    <Text style={{fontSize: props.fsize}}>
      {props.a} {props.b}
    </Text>
  );
}

export default App;
