/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import { useIsConnected } from 'react-native-offline';
import { Banner } from '../common/banner';
import { Ping } from './ping';

export const ConnectionMonitor: FC = () => {
  const connected = useIsConnected();
  const [open, setOpen] = useState<boolean>(true);

  const handleBannerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {connected ? <>
        <Banner
          onClose={handleBannerClose}
          open={open}
          title="You are connected"
          variant="success"
        />
      </> : <>
        <Banner
          onClose={handleBannerClose}
          open={open}
          title="You are disconnected"
          variant="error"
        />
      </>}
      {
        // adding the ping component
      }
      <Ping />
    </>
  );
};
