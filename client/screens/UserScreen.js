const API_ENDPOINT = 'http://192.168.56.1:1947/users';

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

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
        <View>
          <Text>
            Vous avez réussir l'inscription👏👏. Voici vos informations:{' '}
          </Text>
          <View>
            <Text>Nom: </Text>
            <Text>{userData.name}</Text>
          </View>
          <View>
            <Text>Adresse électronique: </Text>
            <Text>{userData.email}</Text>
          </View>
          <View>
            <Text>Adresse: </Text>
            <Text>{userData.address}</Text>
          </View>
          <View>
            <Text>Numéro de téléphone: </Text>
            <Text>{userData.phone}</Text>
          </View>
          <View>
            <Text>CIN: </Text>
            <Text>{userData.cin}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
