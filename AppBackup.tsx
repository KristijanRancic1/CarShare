import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Kamo from './App_kamo';

const YourApp = () => {
    const [activeOption, setActiveOption] = useState('');
    const handleOptionClick = (option) => {
      setActiveOption(option);
    };
  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}
    >
      <View style={styles.header}>
        <Image source={require('./components/kalendarikona.png')} style={styles.kalendar} />
        <Text style={styles.text}>Bok, Ivan!</Text>
        <Image source={require('./components/obavijestiikona.png')} style={styles.obavijesti} />
      </View>
      <View style={styles.vozacputnik}>
        <TouchableOpacity onPress={() => handleOptionClick('vozim')}>
          <Text style={[styles.vozacputniktext, activeOption === 'vozim' ? styles.vozacputniktextActive : {}]}>
            Vozim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionClick('putujem')}>
          <Text style={[styles.vozacputniktext, activeOption === 'putujem' ? styles.vozacputniktextActive : {}]}>
            Putujem
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.KamoKadaDiv}>
              <View style={styles.KamoKada}>
              <View style={styles.KamoKadaL}>
              <Image source={require('./components/icon_search.png')} style={styles.KamoKadaIkone} />
              <TouchableOpacity onPress={() => navigation.navigate('Kamo')}>
              <Text style={styles.KamoKadaText}>Kamo?</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.VertikalnaLinija}></View>
              <View style={styles.KamoKadaR}>
              <Image source={require('./components/clock_regular1.png')} style={styles.KamoKadaIkone} />
              <Text style={styles.KamoKadaText}>Kada?</Text>
              </View>
              </View>
      </View>
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
export default YourApp;
