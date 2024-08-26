import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logImageContainer: {
        backgroundColor: '#5277FA',
    },
    logFieldContainer: {
        backgroundColor: 'white',
    },
    loginImg: {
        width: '100%',
        height: 215,
        opacity: 0.5,
    },
    logImageText: {
        fontSize: 30,
        color: 'white',
        fontWeight: '700',
    },

    loginLogo: {
        height: 50,
        width: 180,
        // height: '35%',
        // width: '35%',
        // right: '5%',
        // // top: '30%',
        // position: 'absolute',
    },

    userNameTextField: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 50,
        borderWidth: 2,
        borderColor: '#e4e3e8',
        borderStyle: 'solid',
        margin: '10%',
        justifyContent: 'center',
        paddingLeft: 20
    },

    passWordTextField: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 50,
        borderWidth: 2,
        borderColor: '#e4e3e8',
        borderStyle: 'solid',
        marginHorizontal: '10%',
        justifyContent: 'center',
        paddingLeft: 20
    },
    forgotPasswordText: {
        fontSize: 15,
        color: '#0057A4',
        marginLeft: '58%',
        marginTop: '10%'
    }
})

export default styles