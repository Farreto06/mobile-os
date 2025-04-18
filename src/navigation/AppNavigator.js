import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screen/HomeScreen';
import SettingsScreen from '../screen/SettingsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='SettingsScreen' component={SettingsScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

const styles = StyleSheet.create({});