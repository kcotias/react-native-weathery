import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Colors } from 'styles';
import Button from '../Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  hasBackButton?: boolean;
  onBackPress?: () => void;
  hasTitle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ location, onUpdatePress }: HeaderProps) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }} />
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{location}</Text>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <Pressable onPress={onUpdatePress}>
        <Icon name="refresh-outline" size={26} color={Colors.FONT_DARK} />
      </Pressable>
    </View>
  </View>
);

export default React.memo(Header);
