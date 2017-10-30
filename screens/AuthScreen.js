import React from 'react';
import {View , Text , StyleSheet, AsyncStorage} from 'react-native';
import {connect} from'react-redux';
import  * as actions  from '../actions';

 class AuthScreen extends React.Component{
     componentDidMount(){
         this.props.facebookLogin();
         // AsyncStorage.removeItem('fb_token');
         this.onAuthComplete(this.props);
     }

     componentWillReceiveProps(nextProps) {
         this.onAuthComplete(nextProps);
     }

     onAuthComplete(props){
         if (props.token){
            this.props.navigation.navigate('Map');
         }
    }

    render(){
      return(
         <View style={styles.container}>
            <Text>AuthScreen</Text>
         </View>
      );
    }
}

function  mapStateToProps({auth}) {
 return {token: auth.token}
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


 export  default connect(mapStateToProps,actions) (AuthScreen);