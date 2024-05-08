import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Link } from '@react-navigation/native';

function DM({navigation}) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}
    >
      <View style={styles.obavijestiView}>
      <Text style={styles.obavijestiText}>Događanja</Text>
      </View>
      <View style={styles.obavijestiPopis}>  
        <View style={styles.obavijestiPopisText}>
        <Text style={styles.obavijestiPopisTextNaslov}>International Dance Open Zagreb</Text>
        <Text style={styles.EventiPopisTextDatum}>08.05.2024. - 12.05.2024.</Text>
        <View style={styles.EventiLokacija}>
        <Image source={require('./components/location_dot_solid.png')} style={styles.EventiLokacijaIkona} />
        <Text style={styles.EvenitPopisTextLokacija}>Sportska dvorana Sutinska vrela</Text>
        </View>
        <View style={styles.EventiButtons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.internationaldanceopen.com/events')}>
          <Text style={styles.Button}>
          Karte
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('KadaPutujem')}>
          <Text style={styles.Button}>
          Tražim prijevoz
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('KadaVozim')}>
          <Text style={styles.Button}>
          Vozim
          </Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.obavijestiPopisText}>
        <Text style={styles.obavijestiPopisTextNaslov}>JazzHR Festival</Text>
        <Text style={styles.EventiPopisTextDatum}>08.05.2024. - 10.05.2024.</Text>
        <View style={styles.EventiLokacija}>
        <Image source={require('./components/location_dot_solid.png')} style={styles.EventiLokacijaIkona} />
        <Text style={styles.EvenitPopisTextLokacija}>Tvornica Kulutre</Text>
        </View>
        <View style={styles.EventiButtons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.entrio.hr/event/jazzhr-festival-2024-17197')}>
          <Text style={styles.Button}>
          Karte
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('KadaPutujem')}>
          <Text style={styles.Button}>
          Tražim prijevoz
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('KadaVozim')}>
          <Text style={styles.Button}>
          Vozim
          </Text>
          </TouchableOpacity>
        </View>
        </View>

      </View>

      
      {/*FOOTER --------------------------------------------------------------------------*/}
      <View style={styles.Footer}> 
      <TouchableOpacity onPress={() => navigation.navigate('DM')}>
      <Image source={require('./components/chatikona_default.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
      <Image source={require('./components/eventiikona_Active.png')} style={styles.FooterIkoneEVENT} />
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
