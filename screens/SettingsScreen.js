import React from 'react';
import {View , Text , StyleSheet} from 'react-native';

export default class SettingsScreen extends React.Component{
render(){
  return(
 <View style={styles.container}>
    <Text>SettingsScreen oopends</Text>
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
