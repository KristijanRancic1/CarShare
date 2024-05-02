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

      <View style={styles.Footer}>
      <Image source={require('./components/chatikona_default.png')} style={styles.FooterIkone35x35} />
      <Image source={require('./components/eventiikona_default.png')} style={styles.FooterIkoneEVENT} />
      <Image source={require('./components/autićikona.png')} style={styles.FooterIkoneCAR} />
      <Image source={require('./components/analiticsikona.png')} style={styles.FooterIkone35x35} />
      <Image source={require('./components/accountikona.png')} style={styles.FooterIkonePROFIL} />
      </View>
    </LinearGradient>
  );
};
export default Kamo;
