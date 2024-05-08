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
        <Text style={styles.obavijestiPopisTextNaslov}>Radovi na cesti</Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
        U ponedjeljak, 29. travnja, odvijat će se radovi na Slavonskoj aveniji koji će utjecati na promet od ranih jutarnjih sati do kasnih večernjih sati. Ovi planirani radovi dio su gradskih inicijativa za poboljšanje infrastrukture i sigurnosti prometa u tom području.
        </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
          Tijekom radova, vozači bi trebali biti svjesni prometnih ograničenja i preusmjeravanja koja će biti postavljena radi olakšavanja radova i sigurnosti svih sudionika u prometu. Službene obavijesti o prometnim promjenama bit će objavljene na web stranici Grada i putem medijskih kanala kako bi se vozači unaprijed informirali.
        </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
          Molimo građane da se pridržavaju prometnih znakova i uputa policije tijekom trajanja radova kako bi se osigurala glatka i sigurna vožnja. Također, preporučujemo da vozači planiraju svoje rute unaprijed i izbjegavaju područje Slavonske avenije ako je to moguće, kako bi se izbjegle moguće gužve i kašnjenja.
        </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
          Gradsko vijeće i nadležne službe za promet surađuju na minimaliziranju smetnji za građane tijekom radova. Radovi se provode u skladu s dugoročnim planovima za poboljšanje infrastrukture, što će na kraju rezultirati sigurnijim i učinkovitijim prometom na Slavonskoj aveniji i okolnim područjima.
        </Text>
        <Text style={styles.obavijestiPopisTextSadrzaj}>
          Nadamo se da će građani imati razumijevanja za ove privremene smetnje i zahvaljujemo na suradnji dok radimo na unaprjeđenju prometne situacije u našem gradu.

      </Text>
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
