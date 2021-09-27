import {Overlay, Input, Button} from 'react-native-elements';
import React from 'react';
import {ScrollView, Alert} from 'react-native';
import NewsService from '../../services';
import Loading from '../Loading';

interface NewsFormType {
  newsTitle?: string;
  newsAuthor?: string;
  visible: boolean;
  id?: string;
  backPress: () => void;
}

export default function NewsForm({
  newsTitle,
  newsAuthor,
  visible,
  id,
  backPress,
}: NewsFormType) {
  const [title, setTitle] = React.useState<string>(
    newsTitle != null ? newsTitle : '',
  );
  const [author, setAuthor] = React.useState<string>(
    newsAuthor != null ? newsAuthor : '',
  );
  const newsservice = new NewsService();
  const [error, setError] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);

  const _onChangeText = (field, text) => {
    switch (field) {
      case 1:
        setAuthor(text);
        return;
      case 2:
        setTitle(text);
        return;
      default:
        return;
    }
  };

  const validateInput = () => {
    if (author.length < 2) {
      setError(1);
      return false;
    }
    if (title.length < 2) {
      setError(2);
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (validateInput()) {
      setLoading(true);
      if (id != null) {
        try {
          let res = await newsservice.updateNews({author, title}, id);
          Alert.alert('Update successful');
        } catch (e) {
          Alert.alert(e.response.data);
          console.log('epic fail');
        }
      }
      try {
        let res = await newsservice.createNews({author, title});
        Alert.alert('Successful');
      } catch (e) {
        Alert.alert(e.response.data);
        console.log('epic fail', e.response.data);
      }
      setLoading(false);
    }
  };

  return (
    <Overlay isVisible={visible} onBackdropPress={backPress} fullScreen>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={{flex: 1}}>
          <Input
            label="Author"
            value={author}
            onChangeText={text => _onChangeText(1, text)}
            errorMessage={error === 1 ? 'Author field is invalid' : ''}
          />

          <Input
            label="Title"
            value={title}
            onChangeText={text => _onChangeText(2, text)}
            errorMessage={error === 2 ? 'Title field is invalid' : ''}
          />

          <Button title="Submit" onPress={submit} />
        </ScrollView>
      )}
    </Overlay>
  );
}
