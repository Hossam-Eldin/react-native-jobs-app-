import React from 'react';
import {View , Text, StyleSheet, Platform} from 'react-native';
import {Button } from 'react-native-elements';
export default class ReviewScreen extends React.Component{

  static navigationOptions = ({ navigation }) => {
    return {
         title: 'Review Jops',
      headerRight: (
        <Button
          title='Settings'
          onPress={() => navigation.navigate('settings')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"/>
      ),
    };

  };

render(){
  return(
 <View style={styles.container}>
 <Text>ReviewScreen</Text>
 </View>
  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',

  },
});
