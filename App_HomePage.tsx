import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


const HomePage = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option) => {
    setActiveOption(option);    };
    
    const KadaClick = () => {
      if (activeOption === 'vozim') {
        navigation.navigate('KadaVozim');
      } else if (activeOption === 'putujem') {
        navigation.navigate('KadaPutujem');
      } else {
        
      }

  };
  return (
    <LinearGradient
      colors={['#FFFFFF', '#BCE3FF']} 
      style={styles.viewmain}
    >
      <View style={styles.header}>
        <Image source={require('./components/kalendarikona.png')} style={styles.kalendar} />
        <Text style={styles.text}>Bok, Ivan!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Obavijesti')}>
        <Image source={require('./components/obavijestiikona.png')} style={styles.obavijesti} />
        </TouchableOpacity>
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
              <TouchableOpacity onPress={() => navigation.navigate('BackendTest')}>
              <Text style={styles.KamoKadaText}>Kamo?</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.VertikalnaLinija}></View>
              <TouchableOpacity onPress={KadaClick}>
              <View style={styles.KamoKadaR}>
              <Image source={require('./components/clock_regular1.png')} style={styles.KamoKadaIkone} />
              <Text style={styles.KamoKadaText}>Kada?</Text>
              </View>
              </TouchableOpacity>
              </View>
      </View>

      {/*FOOTER --------------------------------------------------------------------------*/}
      <View style={styles.Footer}> 
      <TouchableOpacity onPress={() => navigation.navigate('LoginTemp')}>
      <Image source={require('./components/chatikona_default.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Event')}>
      <Image source={require('./components/eventiikona_default.png')} style={styles.FooterIkoneEVENT} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('./components/auticikona-Active.png')} style={styles.FooterIkoneCAR} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterTemp')}>
      <Image source={require('./components/analiticsikona.png')} style={styles.FooterIkone35x35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MojProfil')}>
      <Image source={require('./components/accountikona.png')} style={styles.FooterIkonePROFIL} />
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default HomePage;
