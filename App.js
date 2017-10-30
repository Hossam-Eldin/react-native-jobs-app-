import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainTabNavigator from './nav/MainTabNavigator';
import  {Provider} from 'react-redux';
import  store from './store';

export default class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
                <View style={styles.container}>
                  <MainTabNavigator/>
                </View>
          </Provider>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
