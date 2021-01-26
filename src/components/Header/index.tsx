import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Colors } from 'styles';
import styles from './styles';

interface HeaderProps {
  location: string | undefined;
  onUpdatePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ location, onUpdatePress }: HeaderProps) => (
  <View style={styles.container}>
    <View style={styles.flex} />
    <View style={styles.flex}>
      <Text style={styles.title}>{location}</Text>
    </View>
    <View style={styles.buttonWrapper}>
      <Pressable onPress={onUpdatePress}>
        <Icon name="refresh-outline" size={26} color={Colors.FONT_DARK} />
      </Pressable>
    </View>
  </View>
);

export default React.memo(Header);
