import React from 'react';
import {Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import {WEBVIEW_URI} from '../constants';

interface IWebViewContainerProps {
  onLoad: () => void;
  renderLoading: (() => React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >) &
    (() => void);
}

const WebViewContainer = ({onLoad, renderLoading}: IWebViewContainerProps) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  return (
    <WebView
      originWhitelist={['*']}
      renderLoading={renderLoading}
      startInLoadingState={true}
      onLoad={onLoad}
      source={{
        uri: WEBVIEW_URI,
      }}
      style={{width: screenWidth, height: screenHeight}}
    />
  );
};

export default WebViewContainer;
