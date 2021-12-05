import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import {API_ENDPOINT} from '../constants.js'

export default function UserScreen({ route }) {
  const [userData, setUserData] = useState(null);
  const { userEmail } = route.params;

  const fetchUser = async () => {
    try {
      let res = await axios.get(`${API_ENDPOINT}/${userEmail}`);
      let data = res.data;
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      {userData && (
        <View style={styles.container}>
          <View style={styles.welcome}>
            👏👏
            <Text style={styles.welcomeMessage}>
              Vous avez réussir l'inscription.
            </Text>
          </View>
          <View style={styles.row}>
            <Text>Nom: </Text>
            <Text style={styles.value}>{userData.name}</Text>
          </View>
          <View style={styles.row}>
            <Text>Adresse électronique: </Text>
            <Text style={styles.value}>{userData.email}</Text>
          </View>
          <View style={styles.row}>
            <Text>Adresse: </Text>
            <Text style={styles.value}>{userData.address}</Text>
          </View>
          <View style={styles.row}>
            <Text>Numéro de téléphone: </Text>
            <Text style={styles.value}>{userData.phone}</Text>
          </View>
          <View style={styles.row}>
            <Text>CIN: </Text>
            <Text style={styles.value}>{userData.cin}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: '10px',
    height: Dimensions.get('window').height,
  },
  welcome: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeMessage: {
    marginLeft: 8,
    color: '#56BC58',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '15px',
  },
  value: {
    fontWeight: 'normal',
    color: '#777',
  },
});
