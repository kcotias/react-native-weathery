import * as React from 'react';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';
import { Colors } from 'styles';
import styles from './styles';

interface ButtonProps {
  title?: string;
  titleColor?: string;
  onPress: () => void;
  style?: any;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  testID?: string;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  titleColor,
  onPress,
  style = {},
  titleStyle = {},
  isLoading,
  testID,
  rounded,
}: ButtonProps) => (
  <Pressable
    testID={testID}
    onPress={onPress}
    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
    <View style={{ ...styles.container, borderRadius: rounded ? 50 : 10, ...style }}>
      {title && !isLoading && (
        <Text style={{ ...styles.title, color: titleColor || 'white', ...titleStyle }}>
          {title}
        </Text>
      )}
      {isLoading && <ActivityIndicator color={Colors.FONT_DARK} />}
    </View>
  </Pressable>
);

export default React.memo(Button);
