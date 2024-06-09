import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function DM({navigation}) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']} 
      style={styles.viewmain}
    >
       <View style={styles.obavijestiView}>
          <Text style={styles.obavijestiText}>Razgovori</Text>
    </View>
     
   
    <View style={styles.userProfileRow}>
    
      
      <Image source={require('./components/osoba1.png')} style={styles.profileImagechat} />
      
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Lana Horvat</Text>
        <View style={styles.messageContainer}>
      <Image source={require('./components/check-blue.png')} style={styles.messageIcon} />
      <Text style={styles.message}>Može, vidimo se!</Text>
    </View>
   
      </View>
      <Text style={styles.messageTime}>12:34</Text>
    </View>
   
    
   

    <View style={styles.userProfileRow}>
      
      <Image source={require('./components/osoba2.png')} style={styles.profileImagechat} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Ante Matić</Text>
        <View style={styles.messageContainer}>
      <Text style={styles.message}>Okej</Text>
    </View>
      </View>
      <Text style={styles.messageTime}>Jučer</Text>
    </View>


    <View style={styles.userProfileRow}>
      
      <Image source={require('./components/osoba3.png')} style={styles.profileImagechat} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Ruža Marić</Text>
        <View style={styles.messageContainer}>
      <Image source={require('./components/check-blue.png')} style={styles.messageIcon} />
      <Text style={styles.message}>Dogovoreno</Text>
    </View>
      </View>
      <Text style={styles.messageTime}>22.04.2024.</Text>
    </View>

    <View style={styles.userProfileRow}>
      
      <Image source={require('./components/osoba4.png')} style={styles.profileImagechat} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Marija Mak</Text>
        <View style={styles.messageContainer}>
      <Image source={require('./components/check-gray.png')} style={styles.messageIcon} />
      <Text style={styles.message}>Super</Text>
    </View>
      </View>
      <Text style={styles.messageTime}>13.03.2024.</Text>
    </View>

    <View style={styles.userProfileRow}>
      
      <Image source={require('./components/grupa.png')} style={styles.profileImagechat} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Grupa</Text>
       
        <View style={styles.messageContainer}>
        <Image source={require('./components/check-blue.png')} style={styles.messageIcon} />
      <Text style={styles.message}>Da</Text>
    </View>
      </View>
      <Text style={styles.messageTime}>11.03.2024.</Text>
    </View>



      {/*FOOTER --------------------------------------------------------------------------*/}
      <View style={styles.Footer}> 
      <TouchableOpacity onPress={() => navigation.navigate('DM')}>
      <Image source={require('./components/chatikona_Active.png')} style={styles.FooterIkone35x35} />
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
      <Image source={require('./components/accountikona.png')} style={styles.FooterIkonePROFIL} />
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default DM;
