import {Alert} from 'react-native';

export const showSMSConfirmDialog = () => {
  // TODO: quick fix settimeout used as splash screen animation duration is too long, replace with proper solution
  setTimeout(() => {
    Alert.alert(
      'Are your sure?',
      'Would you like to receive SMS Notifications?',
      [
        {
          text: 'Yes',
          onPress: () => {
            console.log('SMS Notifications:', true);
          },
        },
        {
          text: 'No',
          onPress: () => {
            console.log('SMS Notifications:', false);
          },
        },
      ],
    );
  }, 2000);
};
