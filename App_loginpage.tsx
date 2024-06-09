import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, Switch, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
const logo = require("./components/auticikona-Active.png");

export default function LoginForm() {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}
    >
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.input} 
            placeholder='EMAIL ILI KORISNIČKO IME' 
            value={username} 
            onChangeText={setUsername} 
            autoCorrect={false}
            autoCapitalize='none' 
          />
          <TextInput 
            style={styles.input} 
            placeholder='LOZINKA' 
            secureTextEntry 
            value={password} 
            onChangeText={setPassword} 
            autoCorrect={false}
            autoCapitalize='none' 
          />
        </View>
        <View style={styles.rememberView}>
          <View style={styles.switch}>
            <Switch 
              value={click} 
              onValueChange={setClick} 
              trackColor={{ true: "green", false: "gray" }} 
            />
            <Text style={styles.rememberText}>Zapamti me</Text>
          </View>
          <View>
              <Text style={styles.forgetText}>Zaboravili ste lozinku?</Text>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable 
            style={styles.button} 
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>Nemate korisnički račun?
          <Text style={styles.signup}>  Registrirajte se</Text>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
}
