import React, {useState, createContext, useContext, useEffect} from 'react';
import {Splash} from '../components/Splash';

export const SplashContext = createContext<any>({
  isAppReady: false,
});

export const useSplashScreen = () => useContext(SplashContext);

export const SplashContextProvider = ({children}: any) => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <SplashContext.Provider
      value={{
        isAppReady,
        setIsAppReady,
      }}>
      {isAppReady && children}
      <Splash isAppReady={isAppReady} />
    </SplashContext.Provider>
  );
};
