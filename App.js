import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, View , Alert ,Text} from 'react-native';
import MainTabNavigator from './nav/MainTabNavigator';
import  {Provider} from 'react-redux';
import  store from './store';
import registerForNotifications from './services/push_notifications';


export default class App extends React.Component {

    componentDidMount() {
        registerForNotifications();
        Notifications.addListener((notification) => {
            const { data: { text }, origin } = notification;

            if (origin === 'received' && text) {
                Alert.alert(
                    'New Push Notification',
                    text,
                    [{ text: 'Ok.' }]
                );
            }
        });
    }

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
