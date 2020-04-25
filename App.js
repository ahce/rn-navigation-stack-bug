/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Header, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';

const Screen1 = ({navigation}) => (
  <>
    <Header />
    <Button title="NAVIGATE" onPress={() => navigation.navigate('Screen2')} />
  </>
);

const Screen2 = () => (
  <ScrollView>
    <LearnMoreLinks />
  </ScrollView>
);

const Stack = createStackNavigator();

const App = () => {
  const [navigationState, setNavigationState] = useState();

  return (
    <NavigationContainer onStateChange={setNavigationState}>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
