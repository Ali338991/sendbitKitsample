import { Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';

export const photoLibrary = Platform.select({
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  default: PERMISSIONS.ANDROID.READ_CONTACTS,
});

export const cameraPermission = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  default: PERMISSIONS.ANDROID.RECORD_AUDIO,
});
