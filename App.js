import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header,
         CardSection,
         Button,
         Input
       } from './src/components/common';
import LibraryList from './src/components/LibraryList';

const App = () => {
  return(
    <Provider store={createStore(reducers)}>
    <View style={{ flex:1 }}>
      <Header headerText="Russ Savage, Developer" />
      <LibraryList />
    </View>
    </Provider>
  );
};


export default App;
