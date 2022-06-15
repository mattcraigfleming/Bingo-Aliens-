import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {LoadingContextProvider} from './context/LoadingContext';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import WebViewContainer from './components/WebViewContainer';
import Spinner from './components/Spinner';
import {showSMSConfirmDialog} from './utils';
import {SAFE_AREA_INSETS} from './constants';
import {SplashContextProvider} from './context/SplashContext';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <LoadingContextProvider>
      <SplashContextProvider>
        <SafeAreaProvider style={SAFE_AREA_INSETS}>
          <SafeAreaView edges={['left', 'right']} style={SAFE_AREA_INSETS}>
            <WebViewContainer
              onLoad={showSMSConfirmDialog}
              renderLoading={() => <Spinner />}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </SplashContextProvider>
    </LoadingContextProvider>
  );
};

export default App;
