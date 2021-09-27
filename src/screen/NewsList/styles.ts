import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bold: {
    fontFamily: 'Kievit_Bold',
    fontSize: 28,
    margin: 10,
    color: '#000000',
  },
  normal: {
    fontFamily: 'Charter_Regular',
    fontSize: 12,
    margin: 5,
  },
  greeting: {
    fontFamily: 'Kievit_Bold',
    fontSize: 12,
    color: 'grey',
    margin: 10,
  },
  intro: {
    fontFamily: 'Charter_Regular',
    fontSize: 12,
    color: 'lightgrey',
    marginBottom: 15,
    marginLeft: 10,
  },
  buttonPage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 60,
  },
});
