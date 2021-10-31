import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FormData from './components/FormData';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <SafeAreaView>
      <ImageBackground
        blurRadius={2}
        resizeMode='cover'
        source={require('./assets/welcome.jpg')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Navbar />
          <Text style={styles.heading}>Inscription</Text>
          <FormData />
        </View>
        <StatusBar style='auto' />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#56BC58',
    height: Dimensions.get('window').height,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight - 15 : 0,
  },
  heading: {
    color: '#f5f5f5',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Apple',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0,.6)',
    flex: 1,
  },
});
