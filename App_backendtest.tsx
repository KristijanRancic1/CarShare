import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getTestMessage } from './apiService'; // Path to your service file

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
      <Button title="Reload" onPress={fetchMessage} />
    </View>
  );
};

export default TestComponent;
