import React, { useState,useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DM({navigation}) {
  
  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']} 
      style={styles.viewmain}>
        


      <View style={styles.obavijestiView}>
        <Text style={styles.obavijestiText}>Moji prijatelji</Text>
     </View>

     <View style={styles.userProfileRow}>
      
      <Image source={require('./components/osoba4.png')} style={styles.profileImagechat} />
      <View style={styles.userInfo}>
        <Text style={styles.userName2}>Marija Mak</Text>
      </View>
      
    </View>

    <View style={styles.userProfileRow}>
      
      <Image source={require('./components/osoba1.png')} style={styles.profileImagechat} />
      <View style={styles.userInfo}>
        <Text style={styles.userName2}>Lana Horvat</Text>
      </View>
      
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

