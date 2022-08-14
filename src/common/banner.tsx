/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Banner as MaterialBanner } from 'react-native-paper';

interface BannerProps {
  title: string;
  variant: 'success' | 'error';
  open: boolean;
  onClose: () => void;
}

export const Banner: FC<BannerProps> = (props) => {
  const { title, variant, open, onClose } = props;
  return (
    <MaterialBanner
      visible={open}
      style={{
        ...styles[variant],
      }}
      actions={[{
        label: 'Dismiss',
        onPress: onClose,
      }]}
    >
      {title}
    </MaterialBanner>
  );
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#f44336',
  },
  success: {
    backgroundColor: '#4caf50',
  },
});
