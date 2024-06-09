import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function DM({ navigation }) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']}
      style={styles.viewmain}
    >
      <View style={styles.obavijestiView}>
        <Text style={styles.obavijestiText}>Moji ciljevi</Text>
      </View>

      
      

      {/* FOOTER */}
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
          <Image source={require('./components/analiticsikona-Active.png')} style={styles.FooterIkone35x35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MojProfil')}>
          <Image source={require('./components/accountikona.png')} style={styles.FooterIkonePROFIL} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default DM;
