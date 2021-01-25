import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export interface LocationData {
  message?: string;
  ok: boolean;
  latitude?: number;
  longitude?: number;
  code?: number;
}

export const getCurrentPosition = (): Promise<LocationData> => {
  return new Promise((resolve) =>
    Geolocation.getCurrentPosition(
      (position) =>
        resolve({
          ok: true,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        }),
      (error) => resolve({ ok: false, message: error.message, code: error.code }),

      { enableHighAccuracy: true, timeout: 15000 },
    ),
  );
};

export const requestGeolocationPermissions = async () => {
  if (Platform.OS === 'ios') {
    await Geolocation.requestAuthorization('whenInUse');
  } else {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  }
};

export const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.canOpenURL('app-settings:')
      .then(() => {
        Linking.openURL('App-Prefs:Privacy');
      })
      .catch(() => {});
  } else {
    Linking.openSettings();
  }
};

export const handleLocationError = () => {
  return Alert.alert(
    'Permission required',
    'Location is requires to access our app, head to your location settings and allow weatherapp.',
    [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      { text: 'Open Settings', onPress: openAppSettings },
    ],
    { cancelable: true },
  );
};
