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
          <Text style={styles.obavijestiText}>Statistika</Text>
    </View>
     

    <View style={styles.ciljeviView}>
  <Text style={styles.ciljeviText}>Ostvareni ciljevi</Text>
  <TouchableOpacity onPress={() => navigation.navigate('DodajCilj')} style={styles.ciljButton}>
  <Image source={require('./components/plus.png')} style={styles.plusImage} />
  </TouchableOpacity>
</View>

    <View style={styles.boxContainerStatistika}>
        
        <View style={styles.boxStatistika}>
          <View style={styles.boxHeaderStatistika}>
            <Image source={require('./components/turtle.png')} style={styles.boxIcon} />
            <Text style={styles.boxTitleStatistika}>8 kornjača</Text>
          </View>
          <Text style={styles.boxTextStatistika}>spašeno</Text>
        </View>

        <View style={styles.boxStatistika}>
          <View style={styles.boxHeaderStatistika}>
            <Image source={require('./components/money.png')} style={styles.boxIcon} />
            <Text style={styles.boxTitleStatistika}>2400€</Text>
          </View>
          <Text style={styles.boxTextStatistika}>ušteđeno</Text>
        </View>
      </View>

      <View style={styles.aktivnostiView}>
          <Text style={styles.ciljeviText}>Pregled aktivnosti</Text>
     </View>

     <View style={styles.statistikaGraf}>
        <Image
          source={require('./components/graf.png')}
          style={styles.statistikaGrafimage}
          resizeMode="contain"
        />
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
