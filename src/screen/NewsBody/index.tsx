import React from 'react';
import {View, Text, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import NewsService from '../../services';
import Carousel from 'react-native-snap-carousel';
import {Tile} from 'react-native-elements';
import styles from './styles';
import CommentsList from './components';

export default function NewsBody({route, navigation}) {
  const newsService = new NewsService();
  const {id, title, body} = route.params;
  const [images, setImages] = React.useState<Array<any>>([]);
  React.useEffect(() => {
    (async () => {
      try {
        let imagesArr = await newsService.getImageForNews(id);
        setImages(imagesArr.data);
      } catch (e) {}
    })();
  }, []);

  const _renderItems = ({item, index}) => (
    <Tile
      imageSrc={{uri: images[index].image}}
      title={title}
      featured
      caption={body}
      PlaceholderContent={<ActivityIndicator color="skyblue" size="small" />}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={images}
        renderItem={_renderItems}
        sliderWidth={styles.slider.width}
        sliderHeight={styles.slider.height}
        itemWidth={styles.items.width}
        itemHeight={styles.items.height}
      />
      <CommentsList />
    </SafeAreaView>
  );
}
