import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../style';

const LoginTextField = () => {
    return (
        <View>
            <View style={styles.userNameTextField}>
                <TextInput style={{ color: 'black' }} placeholder='Username'
                    placeholderTextColor={'#000'} />
            </View>
            <View style={styles.passWordTextField}>
                <TextInput style={{ color: 'black' }} placeholder='Password'
                    placeholderTextColor={'#000'} />
            </View>
        </View>
    );
}

export default LoginTextField