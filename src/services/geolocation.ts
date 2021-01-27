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

export const requestLocationPermissions = async () =>
  Platform.OS === 'ios'
    ? Geolocation.requestAuthorization('whenInUse')
    : PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

export const openSettings = () =>
  Platform.OS === 'ios'
    ? Linking.canOpenURL('app-settings:')
        .then(() => {
          Linking.openURL('App-Prefs:Privacy');
        })
        .catch(() => {})
    : Linking.openSettings();

export const handleLocationDenied = () => {
  return Alert.alert(
    'Permission required',
    'Location is required to access our app, head to your settings and allow weatherapp.',
    [
      { text: 'Done', onPress: () => {}, style: 'cancel' },
      { text: 'Open Settings', onPress: openSettings },
    ],
    { cancelable: true },
  );
};
