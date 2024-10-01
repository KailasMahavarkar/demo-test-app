import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Ripple} from '../packages/native/src';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Ripple>
        <Text>Test 22</Text>
      </Ripple>
    </SafeAreaView>
  );
}

export default App;
