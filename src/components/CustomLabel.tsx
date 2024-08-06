import {View, Text} from 'react-native';
import React from 'react';

const CustomLabel = (props: any) => {
  return (
    <View>
      <Text style={{fontSize: 40, marginTop: 20, color: 'yellow'}}>
        {props.children}
      </Text>
    </View>
  );
};

export default CustomLabel;
