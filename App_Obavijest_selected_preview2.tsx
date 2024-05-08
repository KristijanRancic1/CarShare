import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


function Obavijesti({ navigation }) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}>

      <View style={styles.obavijestiPopis}>
        <ScrollView style={styles.obavijestiPopisTextSelected}>
        <Text style={styles.obavijestiPopisTextNaslov}>Hvala što si instalirao aplikaciju CarShare!</Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
         Tu smo da ti pomognemo! Uz nas ćeš moći uštedjeti vrijeme i novac dok upravljaš svojim dnevnim putovanjima na ekološki prihvatljiviji način. Naša platforma je dizajnirana kako bi olakšala dijeljenje vožnji, čime smanjuješ svoj ugljični otisak i doprinosiš održivijem okolišu.
         </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
        Korištenjem CarShare-a, možeš lako organizirati ili se pridružiti postojećim vožnjama u svojoj blizini. Bilo da ideš na posao, na fakultet, ili samo u shopping, naša aplikacija te povezuje s drugima koji putuju u istom smjeru. Tako ne samo da štediš, već i stvaraš nove kontakte i prijateljstva.
         </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
        Naša aplikacija je jednostavna za korištenje. Možeš postaviti svoje putovanje unaprijed ili tražiti dostupne vožnje u realnom vremenu. S integriranim chatom, lako možeš komunicirati s vozačima ili putnicima kako biste uskladili detalje puta. Sigurnost je naš prioritet, stoga svaki profil prolazi kroz verifikacijski postupak prije nego što može sudjelovati u vožnjama. </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
        Uz CarShare, svaka vožnja postaje prilika za uštedu. Zahvaljujući našem sustavu ocjenjivanja, možeš biti siguran da su tvoji suputnici pouzdani i sigurni. Naša aplikacija također prati sve vožnje, omogućujući ti da lako pratiš uštede i smanjenje emisija CO2.   </Text>
      
      </ScrollView>
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
      <Image source={require('./components/autićikona.png')} style={styles.FooterIkoneCAR} />
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
