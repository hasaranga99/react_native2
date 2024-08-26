import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginView from './src/screen/login/LoginView';
import AdminDashboard from './src/screen/AdminDashboard/AdminDashboard';
// Ensure this import is correct

// Define the type for the Drawer Navigator


const Stack: any = createNativeStackNavigator();


function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Start"} component={LoginView} />
        <Stack.Screen name={"Login"} component={AdminDashboard} />
        <Stack.Screen name={"dashboard"} component={LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;





function createNativeStackNavigator() {
  throw new Error('Function not implemented.');
}

