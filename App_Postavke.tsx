import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker'; // Corrected import
import styles from './styles';

function Postavke({ navigation }) {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const loadProfileImage = async () => {
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedImage) {
        setProfileImage(storedImage);
      }
    };

    loadProfileImage();
  }, []);

  const changeProfileImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, async (response) => { // Corrected function call
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const { uri } = response.assets[0];
        setProfileImage(uri);
        await AsyncStorage.setItem('profileImage', uri);
      }
    });
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']}
      style={styles.viewmain}
    >
      <View style={styles.obavijestiView}>
        <Text style={styles.obavijestiText}>Postavke</Text>
      </View>

      <View style={styles.profileImageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Image source={require('./components/default_profile.png')} style={styles.profileImage} />
        )}
        <TouchableOpacity onPress={changeProfileImage} style={styles.changeProfileButton}>
          <Text style={styles.changeProfileButtonText}>Change Profile Photo</Text>
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
}

export default Postavke;
