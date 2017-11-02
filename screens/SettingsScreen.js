import React from "react";
import {StyleSheet, View} from "react-native";
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';


class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

              <Button
                  title="Reset Liked Jobs"
                  large
                  icon={{ name: 'delete-forever' }}
                  backgroundColor="#F44336"
                  onPress={this.props.clearLikedJobs}
              />
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


export  default  connect(null, { clearLikedJobs}) (SettingsScreen);