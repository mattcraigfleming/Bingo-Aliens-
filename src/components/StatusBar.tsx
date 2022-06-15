import {StatusBar as RNStatusBar} from 'react-native';
import React from 'react';

const StatusBar = () => {
  return (
    <RNStatusBar
      barStyle="dark-content"
      animated
      hidden
      showHideTransition={'fade'}
    />
  );
};

export default StatusBar;
