import React, { useState,useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DM({navigation}) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadUsername = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    loadUsername();
  }, []);
  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']} 
      style={styles.viewmain}>
        
        <View style={styles.headerProfile}>
          <Text style={styles.textProfil}>Moj profil</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Postavke')}>
          <Image source={require('./components/settings.png')} style={styles.settingsIcon} />
        </TouchableOpacity>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileImage}>Slika profila</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Text style={styles.ImePrezime}>{username}</Text>
        </View>



        <View style={styles.containerProfil}>
      <View style={styles.imageContainerProfil}>
        <Image source={require('./components/vozac.png')} style={styles.imageProfil} />
        
        <View style={styles.containerStar}>
          <Image source={require('./components/star.png')} style={styles.starIcon} />
          <Text style={styles.imageTextProfil}>4.1/5.0</Text>
      </View>
      </View>
      <View style={styles.imageContainerProfil}>
        <Image source={require('./components/putnik.png')} style={styles.imageProfil} />
        <View style={styles.containerStar}>
          <Image source={require('./components/star.png')} style={styles.starIcon} />
          <Text style={styles.imageTextProfil}>4.8/5.0</Text>
      </View>
      </View>
    </View>


    <View style={styles.containerProfil2}>
    <TouchableOpacity onPress={() => navigation.navigate('ProšleVožnje')}>
      <View style={styles.redProfil}>
        <Text style={styles.tekstProfil}>Prošle vožnje</Text>
        <Image source={require('./components/strelica.png')} style={styles.strelicaProfil} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MojiPrijatelji')}>
      <View style={styles.redProfil}>
        <Text style={styles.tekstProfil}>Moji prijatelji</Text>
        <Image source={require('./components/strelica.png')} style={styles.strelicaProfil} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BivšiSuvozači')}>
      <View style={styles.redProfil}>
        <Text style={styles.tekstProfil}>Bivši suvozači</Text>
        <Image source={require('./components/strelica.png')} style={styles.strelicaProfil} />
      </View>
      </TouchableOpacity>
    </View>

    
      

      {/*FOOTER --------------------------------------------------------------------------*/}
      <View style={styles.Footer}> 
      <TouchableOpacity onPress={() => navigation.navigate('DM')}>
      <Image source={require('./components/chatikona_default.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
      <Image source={require('./components/eventiikona_default.png')} style={styles.FooterIkoneEVENT} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('./components/auticikona.png')} style={styles.FooterIkoneCAR} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Statistika')}>
      <Image source={require('./components/analiticsikona.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MojProfil')}>
      <Image source={require('./components/accountikona_Active.png')} style={styles.FooterIkonePROFIL} />
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default DM;
