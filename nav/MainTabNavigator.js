import React from 'react';
import { TabNavigator, TabBarBottom ,StackNavigator ,DrawerNavigator} from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import SettingsScreen  from '../screens/SettingsScreen';
import ReviewScreen from '../screens/ReviewScreen';

export default TabNavigator(
  {
    Welcome: {screen: WelcomeScreen},
    Auth: {screen: AuthScreen,},
    main : {
        screen: DrawerNavigator({
            Map : {screen : MapScreen},
            deck: { screen : DeckScreen},
            review: {screen : StackNavigator({
                review: {screen : ReviewScreen},
                settings :{screen : SettingsScreen}
            }) }
        })
    }
  },

  {
    activeTintColor: '#fff',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
      lazy: true,
      navigationOptions: {
          tabBarVisible: false,
      },
      tabBarOptions: {
      activeTintColor: '#35c',
    }

    });
