const API_ENDPOINT = 'http://192.168.56.1:1947/users';

import React, { useState } from 'react';
import axios from 'axios';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FormData({ navigation }) {
  const [userData, setUserData] = useState({
    address: '',
    cin: '',
    email: '',
    name: '',
    phone: '',
  });

  // In case we don't fill out all form fields an alert will be showing!
  const showAlert = (alertTitle, alertMessage) => {
    Alert.alert(alertTitle, alertMessage, [
      {
        text: 'Ok',
      },
    ]);
  };

  const changeUserData = (val, name) => {
    setUserData((prevValue) => ({
      ...prevValue,
      [name]: val,
    }));
  };

  const submitData = async () => {
    //check if a form field is empty when data is submitted
    if (
      !userData.name ||
      !userData.address ||
      !userData.cin ||
      !userData.email ||
      !userData.phone
    ) {
      showAlert(
        'Données non bien traitées',
        "S'il vous plait, remplir toutes les données"
      );
      return;
    } else {
      try {
        let res = await axios.post(API_ENDPOINT, userData);
        let data = res.data;

        // show fetched created user data
        navigation.navigate('User', { userEmail: userData.email });
        console.log(res);
      } catch (error) {
        showAlert('Oups', 'Sorry, something went wrong...');
        console.log(error.message);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons color='#F5F5F5' name='person-circle' size={24} />
        <TextInput
          onChangeText={(val) => changeUserData(val, 'name')}
          placeholder='Entrer votre nom complet'
          placeholderTextColor='#BFBFBF'
          style={styles.input}
          value={userData.name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons color='#F5F5F5' name='mail' size={24} />
        <TextInput
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={(val) => changeUserData(val, 'email')}
          placeholder='Entrer votre email'
          placeholderTextColor='#BFBFBF'
          style={styles.input}
          value={userData.email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons color='#F5F5F5' name='card' size={24} />
        <TextInput
          onChangeText={(val) => changeUserData(val, 'cin')}
          placeholder='Entrer votre cin'
          placeholderTextColor='#BFBFBF'
          style={styles.input}
          value={userData.cin}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons color='#F5F5F5' name='home' size={24} />
        <TextInput
          onChangeText={(val) => changeUserData(val, 'address')}
          placeholder='Entrer votre adresse'
          placeholderTextColor='#BFBFBF'
          style={styles.input}
          value={userData.address}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons color='#F5F5F5' name='phone-portrait-sharp' size={24} />
        <TextInput
          keyboardType='numeric'
          onChangeText={(val) => changeUserData(val, 'phone')}
          placeholder='Entrer votre numero de tel'
          placeholderTextColor='#BFBFBF'
          style={styles.input}
          value={userData.phone}
        />
      </View>

      <Text style={styles.privacyText}>
        En appuyant sur Accepter et continuer, vous acceptez nos Conditions
        d'utilisation et notre politique de confidentialité.
      </Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={submitData}
          style={styles.btn}>
          <Text style={styles.btnText}>Accepter et continuer</Text>
        </TouchableOpacity>
      </View>
      {/* {isAlertShowing && showAlert()} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    paddingVertical: 12,
    width: '60%',
  },
  btnContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  btnText: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    lineHeight: 21,
  },
  container: {
    backgroundColor: 'rgba(86, 188, 88,.22)',
    borderRadius: 15,
    justifyContent: 'flex-end',
    margin: 12,
    padding: 15,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 10,
    color: '#f5f5f5',
    marginLeft: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    width: '90%',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  privacyText: {
    color: '#BFBFBF',
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 15,
  },
});
