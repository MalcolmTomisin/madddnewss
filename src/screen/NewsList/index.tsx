import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import NewsService from '../../services';
import {appStrings} from '../../utils';
import ListItems from './components/index';
import {useDispatch, useSelector} from 'react-redux';
import {getNews, setLoading} from '../../store/actions';
import styles from './styles';
import {LoadSpinner} from '../../components';

export default function NewsScreen() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state);
  const newservice = new NewsService();
  React.useEffect(() => {
    dispatch(setLoading(true));
    (async () => {
      try {
        const newsData = await newservice.getPaginatedNews(1);
        dispatch(getNews(newsData.data));
      } catch (e) {}

      dispatch(setLoading(false));
    })();
  }, []);

  if (isLoading) {
    return <LoadSpinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>{appStrings.greeting}</Text>
      <Text style={styles.bold}>{appStrings.user}</Text>
      <Text style={styles.intro}>{appStrings.dailyNews}</Text>
      <ListItems />
    </SafeAreaView>
  );
}
