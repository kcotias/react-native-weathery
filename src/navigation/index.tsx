import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Welcome } from '@screens/index';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;
