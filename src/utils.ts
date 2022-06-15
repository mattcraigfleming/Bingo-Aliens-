import {Alert} from 'react-native';

export const showSMSConfirmDialog = () => {
  return Alert.alert(
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
};
