import React from 'react';
import {Avatar, Button} from 'react-native-elements';
import {FlatList, TouchableOpacity, View, Text, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {nextPage, getNews, prevPage, setLoading} from '../../../store/actions';
import NewsService from '../../../services';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../containers';
import {NewsForm} from '../../../components';

export default function List() {
  const navigation = useNavigation();
  const {news, currentPage} = useSelector(state => state);
  const dispatch = useDispatch();
  const newsService = new NewsService();
  const keyExtractor = (item, index) => index.toString();
  const [openForm, setOpenForm] = React.useState<boolean>(false);

  const _renderLists = ({item}) => (
    <TouchableOpacity
      onPress={() => goToNewsBody(item)}
      style={styles.horizontal}>
      <Avatar size="large" source={{uri: 'https://picsum.photos/200'}} />
      <View style={styles.contentBox}>
        <Text style={styles.bold}>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  const goToNewsBody = val => {
    navigation.navigate(SCREENS.NEWS_BODY, {
      id: val.id,
      body: val.body,
      title: val.title,
    });
  };

  const backPress = () => {
    setOpenForm(false);
  };

  const goToNextPage = () => {
    dispatch(setLoading(true));
    getThePage(currentPage + 1)
      .then(val => {
        dispatch(getNews(val.data));
        dispatch(nextPage());
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      dispatch(setLoading(true));
      getThePage(currentPage - 1)
        .then(val => {
          dispatch(getNews(val.data));
          dispatch(prevPage());
        })
        .catch(e => {
          console.error(e);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  };

  const createNews = () => {
    setOpenForm(true);
  };

  const getThePage = async (page: number) => {
    return await newsService.getPaginatedNews(page);
  };

  const _footerComponent = () => (
    <View style={styles.buttonPage}>
      <Button
        onPress={goToPrevPage}
        icon={<Icon name="arrow-left" size={15} color="white" />}
      />
      <Button
        onPress={createNews}
        icon={<Icon name="plus" size={15} color="white" />}
      />
      <Button
        onPress={goToNextPage}
        icon={<Icon name="arrow-right" size={15} color="white" />}
      />
    </View>
  );

  return (
    <>
      <FlatList
        data={news}
        renderItem={_renderLists}
        keyExtractor={keyExtractor}
        ListFooterComponent={_footerComponent}
      />
      <NewsForm visible={openForm} backPress={backPress} />
    </>
  );
}
