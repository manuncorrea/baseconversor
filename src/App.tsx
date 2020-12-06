import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#3E2F5B" translucent />
      <View style={{ flex: 1, backgroundColor: "#3E2F5B"}} > 
        <Routes />
      </View>
    </NavigationContainer>
  );
};


export default App;
