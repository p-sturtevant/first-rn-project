import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Home from './screens/Home';
import AddNewPaletteModal from './screens/AddNewPaletteModal';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
