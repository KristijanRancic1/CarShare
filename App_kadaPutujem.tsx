import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';


function KadaPutujem({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [date, setDate] = useState(new Date());

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <LinearGradient
      colors={['#FFFFFF', '#D9EBF8']} 
      style={styles.viewmain}
    >

      <View style={styles.header}>
        <Text style={styles.textKada}>Kada želiš putovati?</Text>

      </View>
      <View style={styles.DatePicker}>
                <Text style={styles.Date}>{date.toLocaleDateString()}</Text>
                <View style={styles.HR} />
                <Text style={styles.Time}>{date.toLocaleTimeString()}</Text>
            </View>

      <View style={styles.TjedniRaspored}>
        <View style={styles.OnOff}>
          <Text style={styles.TjedniRasporedText}>
            Dodaj vožnju u tjedni raspored
          </Text>
          <TouchableOpacity onPress={toggleSwitch} style={styles.container}>
            <View style={[styles.switch, isEnabled ? styles.switchOn : styles.switchOff]}>
            <View style={[styles.circle, isEnabled ? styles.circleOn : styles.circleOff]} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.OnOff}>
          <Text style={styles.TjedniDan}>
            Svaki
          </Text>
          <Text style={styles.TjedniDan}>
            Pon
          </Text>
        </View>
          <View style={styles.HR} />
          <Text style={styles.TjedniSat}>16:30</Text>
      </View>
      <View style={styles.URedu}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.UReduText}>
          Odaberi
        </Text>
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
export default KadaPutujem;
