import {StatusBar} from 'react-native';
import React from 'react';
import {LoadingContextProvider} from './context/LoadingContext';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import WebViewContainer from './components/WebViewContainer';
import Spinner from './components/Spinner';
import {showSMSConfirmDialog} from './utils';
import {SAFE_AREA_INSETS} from './constants';

const App = () => {
  return (
    <LoadingContextProvider>
      <SafeAreaProvider style={SAFE_AREA_INSETS}>
        <StatusBar />
        <SafeAreaView
          edges={['bottom', 'left', 'right']}
          style={SAFE_AREA_INSETS}>
          <WebViewContainer
            onLoad={showSMSConfirmDialog}
            renderLoading={() => <Spinner />}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </LoadingContextProvider>
  );
};

export default App;
