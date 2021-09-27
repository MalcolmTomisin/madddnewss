import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  items: {
    width: 450,
    height: 400,
  },
  slider: {
    width: Dimensions.get('screen').width,
    height: 450,
  },
  container: {
    flex: 1,
  },
});
