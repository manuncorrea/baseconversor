import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import NumericBase from '../pages/NumericBase';

const Base = createStackNavigator();

const BaseRoutes: React.FC = () => (
  <Base.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#3E2F5B" },
    }}
  >
    <Base.Screen name="Home" component={Home} />
    <Base.Screen name="NumericBase" component={NumericBase} />
  </Base.Navigator>
);

export default BaseRoutes;