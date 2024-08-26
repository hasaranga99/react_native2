import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import LoginTextField from './components/LoginTextField'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Layout from '../../components/layout'
import { Icon } from '@rneui/themed';


const LoginView = () => {

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps='never'>
                <View style={styles.logImageContainer}>
                    <Image style={styles.loginImg} source={require('../../assets/img/login.jpg')}
                        resizeMode='cover' />

                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', bottom: 10, paddingHorizontal: '5%' }}>
                        <Text style={styles.logImageText}>Sign In</Text>
                        <Image style={styles.loginLogo} source={require('../../assets/img/bg.png')}
                            resizeMode='contain' />
                    </View>

                </View>

                <View style={styles.logFieldContainer}>

                    <LoginTextField />
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    {/* <Icon name={'arrow-forward'} type='ionicon' /> */}

                </View>

            </KeyboardAwareScrollView >
        </View >
    )
}

export default LoginView

function alert(arg0: string) {
    throw new Error('Function not implemented.')
}

