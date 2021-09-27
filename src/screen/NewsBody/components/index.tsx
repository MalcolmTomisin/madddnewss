import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './style';

type commentType = {
  comment: string;
  name: string;
};

export default function CommentsList() {
  const [editIndex, setEditIndex] = React.useState<number>(-1);
  const [listOfComments, setListOfComments] = React.useState<
    Array<commentType>
  >([]);
  const [singleComment, setSingleComment] = React.useState<string>('');
  const keyExtractor = (item, index) => index.toString();

  const addComment = () => {
    let arrOfComments = [...listOfComments];
    arrOfComments.push({
      comment: singleComment,
      name: 'Anonymous',
    });
    setSingleComment('');
    setListOfComments(arrOfComments);
  };

  const deleteComment = index => {
    let arrOfComments = [...listOfComments];
    arrOfComments.splice(index, 1);
    setListOfComments(arrOfComments);
  };

  const footerComponent = () => (
    <View style={styles.commentContainer}>
      <Input
        value={singleComment}
        onChangeText={text => setSingleComment(text)}
        inputContainerStyle={{
          borderWidth: 1,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          onPress={addComment}
          icon={<Icon name="comment" size={15} color="white" />}
          //buttonStyle={{height: 48}}
          title="Add comment"
        />
        <Button
          //onPress={addComment}
          icon={<Icon name="trash" size={15} color="white" />}
          //buttonStyle={{height: 48}}
          title="Delete comment"
        />
      </View>
    </View>
  );
  const _onSubmitText = (text, index) => {
    let arrOfComments = [...listOfComments];
    arrOfComments[index].comment = text;
    arrOfComments[index].name = 'Anonymous';
    setListOfComments(arrOfComments);
  };
  const _renderItems = ({item, index}) => {
    if (index === editIndex) {
      return (
        <View style={styles.commentContainer}>
          <Input
            value={singleComment}
            onChangeText={text => setSingleComment(text)}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              onPress={addComment}
              icon={<Icon name="comment" size={15} color="white" />}
              //buttonStyle={{height: 48}}
              title="Update comment"
            />
            <Button
              onPress={() => deleteComment(index)}
              icon={<Icon name="trash" size={15} color="white" />}
              //buttonStyle={{height: 48}}
              title="Delete comment"
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.comment}>{item.comment}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            onPress={addComment}
            icon={<Icon name="comment" size={8} color="white" />}
            //buttonStyle={{height: 48}}
            title="Edit comment"
            titleStyle={{fontSize: 12}}
          />
          <Button
            onPress={() => deleteComment(index)}
            icon={<Icon name="trash" size={8} color="white" />}
            //buttonStyle={{height: 48}}
            title="Delete comment"
            titleStyle={{fontSize: 12}}
          />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={listOfComments}
      renderItem={_renderItems}
      keyExtractor={keyExtractor}
      ListFooterComponent={
        <View style={styles.commentContainer}>
          <Input
            value={singleComment}
            onChangeText={text => setSingleComment(text)}
            inputContainerStyle={{
              borderWidth: 1,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              onPress={addComment}
              icon={<Icon name="comment" size={15} color="white" />}
              //buttonStyle={{height: 48}}
              title="Add comment"
            />
          </View>
        </View>
      }
      removeClippedSubviews={false}
    />
  );
}
