import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactChild,
  ReactChildren,
  SetStateAction,
  Dispatch,
} from 'react';

interface ILoadingContextProviderProps {
  children: ReactChild | ReactChildren;
}

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoadingContext>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoadingSpinner = () => useContext(LoadingContext);

export const LoadingContextProvider = ({
  children,
}: ILoadingContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}>
      {children}
    </LoadingContext.Provider>
  );
};
