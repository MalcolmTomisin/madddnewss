import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  commentContainer: {
    width: Dimensions.get('window').width,
    height: 120,
    paddingHorizontal: 10,
  },
  comment: {
    textAlign: 'left',
    fontSize: 14,
    marginVertical: 5,
  },
  name: {
    textAlign: 'right',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
