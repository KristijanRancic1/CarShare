import React, { useState } from 'react';
import {Alert,Image,Pressable,SafeAreaView,ScrollView,KeyboardAvoidingView,Text,TextInput,View,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import LinearGradient from 'react-native-linear-gradient';
import styles from './stylesRegister';
import { registerUser } from './apiService';
const logo = require("./components/auticikona-Active.png");

export default function LoginForm() {
  const navigation = useNavigation(); // Hook to get the navigation object
  const [Registerusername, setUsername] = useState("");
  const [Registerpassword, setPassword] = useState("");
  const [Registeremail, setEmail] = useState("");
  const [Registerpassword2, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (Registerpassword !== Registerpassword2) {
      setError("Lozinke se ne podudaraju");
      return;
    }
    setError("");

    try {
      const response = await registerUser(Registeremail, Registerusername, Registerpassword);
      Alert.alert('Success', 'Registration successful');
      navigation.navigate('Home'); // Navigate to the Home screen
    } catch (error) {
      setError(error.message || 'Failed to register');
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']}
      style={styles.viewmain}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <SafeAreaView style={styles.innerContainer}>
            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>REGISTRIRAJ SE</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder='EMAIL'
                value={Registeremail}
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize='none'
              />
              <TextInput
                style={styles.input}
                placeholder='KORISNIČKO IME'
                value={Registerusername}
                onChangeText={setUsername}
                autoCorrect={false}
                autoCapitalize='none'
              />
              <TextInput
                style={styles.input}
                placeholder='LOZINKA'
                secureTextEntry
                value={Registerpassword}
                onChangeText={setPassword}
                autoCorrect={false}
                autoCapitalize='none'
              />
              <TextInput
                style={[styles.input, Registerpassword !== Registerpassword2 && { borderColor: 'red' }]}
                placeholder='PONOVITE LOZINKU'
                secureTextEntry
                value={Registerpassword2}
                onChangeText={setPasswordRepeat}
                autoCorrect={false}
                autoCapitalize='none'
              />
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
            <View style={styles.buttonView}>
              <Pressable
                style={styles.button}
                onPress={handleRegister}
              >
                <Text style={styles.buttonText}>REGISTRIRAJ SE</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
