import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Colors } from 'styles';
import styles from './styles';

type Category = {
  id: number;
  title: string;
};
interface CategoriesListProps {
  activeButton: number | null;
  onButtonPress: (id: number) => void;
  filters: Category[];
}

const Filter: React.FC<CategoriesListProps> = ({
  activeButton,
  onButtonPress,
  filters,
}: CategoriesListProps) => {
  return (
    <View style={styles.container}>
      {filters?.map((item: Category, index: number) => {
        const isActive = item.id === activeButton;

        return (
          <Pressable
            key={item.id}
            style={[
              styles.buttonContainer,
              {
                backgroundColor: isActive ? Colors.ACTIVE_BUTTON : '#fff',
                marginLeft: index === 0 ? 16 : 0,
              },
            ]}
            onPress={() => onButtonPress(item.id)}>
            <Text
              style={[styles.title, { color: isActive ? Colors.ACTIVE_TEXT : Colors.FONT_DARK }]}>
              {item.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Filter;
