import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RecoilRoot } from 'recoil';
import Router from './navigation';

// import { Platform } from 'react-native';

// if (Platform.OS === 'android') {
//   // only android needs polyfill
//   require('intl'); // import intl object
//   require('intl/locale-data/jsonp/en-US'); // load the required locale details
// }

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
