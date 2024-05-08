import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function Kamo() {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#000']} 
      style={styles.viewmain}
    >


      {/*FOOTER --------------------------------------------------------------------------*/}
      <View style={styles.Footer}> 
      <TouchableOpacity onPress={() => navigation.navigate('DM')}>
      <Image source={require('./components/chatikona_default.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
      <Image source={require('./components/eventiikona_default.png')} style={styles.FooterIkoneEVENT} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('./components/auticikona-Active.png')} style={styles.FooterIkoneCAR} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Statistika')}>
      <Image source={require('./components/analiticsikona.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MojProfil')}>
      <Image source={require('./components/accountikona.png')} style={styles.FooterIkonePROFIL} />
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default Kamo;
