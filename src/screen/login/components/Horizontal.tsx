import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.horizontalLine} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    horizontalLine: {
        width: '80%', // Adjust the width as needed
        height: 1,    // This controls the thickness of the line
        backgroundColor: 'gray', // Line color
        marginVertical: 10, // Adjust spacing around the line
    },
});

export default App;
