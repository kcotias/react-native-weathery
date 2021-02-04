import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const iPhoneXLike = height >= 812 || width >= 812 || height >= 896 || width >= 896;
