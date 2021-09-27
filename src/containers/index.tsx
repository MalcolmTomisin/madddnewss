import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewsBodyScreen, NewsScreen} from '../screen';

const Stack = createNativeStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={SCREENS.NEWS_LIST}
          component={NewsScreen}
        />
        <Stack.Screen name={SCREENS.NEWS_BODY} component={NewsBodyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const SCREENS = {
  NEWS_LIST: 'News',
  NEWS_BODY: 'NewsBody',
};
