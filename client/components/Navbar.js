import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <SafeAreaView style={styles.container}>
      <Image   
        source={require('../assets/logo.png')} 
        style={[
            styles.img, 
            {transform: [{ scale: .7 }]}
          ]} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: '#60B99A',
    borderWidth: 4,
    height: 60,
  },
  img: {
    height: 55,
    width: '65%',
  },
});
