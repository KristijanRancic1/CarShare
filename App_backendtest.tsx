import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getMessage } from './apiService'; 
import styles from './styles';

const TestComponent = () => {
  const [message, setMessage] = useState('');
  const [endpoint, setEndpoint] = useState('message'); // Default endpoint

  const fetchMessage = async () => {
    try {
      const msg = await getMessage(endpoint);
      setMessage(msg);
    } catch (error) {
      console.log('Error getting message:', error);
      setMessage('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchMessage();
  }, [endpoint]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={styles.obavijestiView}>{message}</Text>
      <Button title="Fetch /message" onPress={() => setEndpoint('message')} />
      <Button title="Fetch /poruka" onPress={() => setEndpoint('poruka')} />
      <Button title="Reload" onPress={fetchMessage} />
    </View>
  );
};

export default TestComponent;
