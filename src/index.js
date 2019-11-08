import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {StatusBar} from 'react-native'

const App = () => (
    <>  
        <StatusBar barStyle="light-content" backgroundColor="#000"  />
        <Routes />
    </>
);

export default App;
