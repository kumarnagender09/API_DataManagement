import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import {RootStackParamList} from './src/models';

//The createStackNavigator function is used to create a stack navigator instance. Here, it's named Stack.
//The generic type parameter <RootStackParamList> specifies that this stack navigator will use the RootStackParamList type definition for screen parameters. This ensures type safety and clarity regarding expected parameters for each screen.
const Stack = createStackNavigator<RootStackParamList>();

//The App component is the main entry point for your React Navigation application.
//It wraps the entire navigation structure within the NavigationContainer component. This is the root container that manages navigation state and navigation context for child components.x
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
