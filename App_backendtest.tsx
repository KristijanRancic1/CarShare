import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getTestMessage } from './apiService'; 
import styles from './styles';

const TestComponent = () => {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const msg = await getTestMessage();
      setMessage(msg);
    } catch (error) {
      console.log('Error getting message:', error);
      setMessage('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:20}}>
      <Text style={styles.obavijestiView}>{message}</Text>
      <Button title="Reload" onPress={fetchMessage} />
    </View>
  );
};

export default TestComponent;
