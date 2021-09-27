import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    height: 60,
    width: Dimensions.get('window').width,
    marginVertical: 15,
    paddingLeft: 15,
  },
  contentBox: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
    flex: 1,
  },
  bold: {
    fontFamily: 'Kievit_Bold',
    fontSize: 12,
    color: 'grey',
  },
  buttonPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginVertical: 15,
    paddingHorizontal: 15,
  },
});
