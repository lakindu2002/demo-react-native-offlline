/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { ToastAndroid } from 'react-native';
import { checkInternetConnection } from 'react-native-offline';
import { Button } from 'react-native-paper';

const PING_URL = 'https://www.google.com';

export const Ping: FC = () => {
  const handleOnPing = async () => {
    try {
      const pingResult = await checkInternetConnection(PING_URL);
      ToastAndroid.show(pingResult ? 'Connected' : 'Disconnected', ToastAndroid.SHORT);
    } catch (err) {
      ToastAndroid.show('Could not ping', ToastAndroid.LONG);
    }
  };

  return (
    <>
      <Button
        mode="contained"
        onPress={() => handleOnPing()}>
        Ping
      </Button>
    </>
  );
};
