import * as React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './routes';
import {AddTaskScreen, MainScreen} from '../screens';
//import MainScreen from '../screens/mainScreen';
//import AddTaskScreen from '../screens/addScreen';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.MAIN} component={MainScreen} />
        <Stack.Screen name={ScreenNames.ADD} component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
export {default as ScreenNames} from './routes';
