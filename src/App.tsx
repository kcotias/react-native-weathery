import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { RecoilRoot } from 'recoil';
import Router from './navigation';

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/en-US');
}

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
