import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FormData from '../components/FormData';
import Navbar from '../components/Navbar';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ImageBackground
        blurRadius={2}
        resizeMode='cover'
        source={require('../assets/welcome.jpg')}
        style={styles.background}>
        <View style={styles.overlay}>
          <Navbar />
          <Text style={styles.heading}>Inscription</Text>
          <FormData navigation={navigation} />
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
  },
  heading: {
    color: '#f5f5f5',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0,.7)',
    flex: 1,
    height: '100%',
  },
});
