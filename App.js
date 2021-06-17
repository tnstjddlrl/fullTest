import React, { useEffect } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import FullScreen from './src/fullscreen'

const App = () => {

  useEffect(() => {
    FullScreen.enable()
  }, [])

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>

      <TouchableWithoutFeedback onPress={() => { FullScreen.enable() }}>
        <View style={{ width: '30%', height: 100, borderRadius: 10, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>풀스크린 켜기</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => { FullScreen.disable() }}>
        <View style={{ width: '30%', height: 100, borderRadius: 10, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>풀스크린 끄기</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  )
}

export default App;
