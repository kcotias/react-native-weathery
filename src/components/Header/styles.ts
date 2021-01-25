import { StyleSheet } from 'react-native';
import { Layout, Colors } from '@styles/index';

export default StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.spacing.paddingX,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.FONT_DARK,
    alignSelf: 'center',
  },
});
