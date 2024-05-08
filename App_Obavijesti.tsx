import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


function Obavijesti({ navigation }) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}>

      <View style={styles.obavijestiView}>
      <Text style={styles.obavijestiText}>Obavijesti</Text>
      </View>
      <View style={styles.obavijestiPopis}>  
        <View style={styles.obavijestiPopisText}>
        <TouchableOpacity onPress={() => navigation.navigate('ObavijestiSelected1')}>
        <Text style={styles.obavijestiPopisTextNaslov}>Radovi na cesti</Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>U ponedjeljak, 29. travnja odvijat će se radovi na Slavonskoj aveniji...</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.obavijestiPopisText}>
        <TouchableOpacity onPress={() => navigation.navigate('ObavijestiSelected2')}>
        <Text style={styles.obavijestiPopisTextNaslov}>Hvala što si instalirao aplikaciju CarShare!</Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>Tu smo da ti pomognemo! Uz nas ćeš moći uštedjeti...</Text>
        </TouchableOpacity>
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
export default Obavijesti;
