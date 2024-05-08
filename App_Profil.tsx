import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function DM({navigation}) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}>
        <View style={styles.headerProfile}>
          <Text style={styles.textProfil}>Moj profil</Text>
        </View>
        <Image source={require('./components/settings.png')} style={styles.settingsIcon} />
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileImage}>Slika profila</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Text style={styles.ImePrezime}>Ime Prezime</Text>
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
