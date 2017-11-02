import React from 'react';
import {StyleSheet, View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import  {MapView} from  'expo';
import  {connect} from 'react-redux';


 class ReviewScreen extends React.Component{


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
        drawerIcon: ({ tintColor }) => ( <Icon name="favorite" size={25} color={tintColor} /> ),

    };


     };


  renderLikedJobs (){
        return this.props.likedJobs.map( job  =>{
            const {
                company, formattedRelativeTime, url,
                longitude, latitude, jobtitle, jobkey
            } = job;
            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };
            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{ height: 200 }}>
                        <MapView
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button
                            title="Apply Now!"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
  };

render(){
  return(
      <ScrollView style={{flex: 1}}>
          {this.renderLikedJobs()}
      </ScrollView>
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
    italics: {
        fontStyle: 'italic'
    },
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

 function  mapStateToProps(state) {
    return{likedJobs: state.likedJobs}
 }

export default connect (mapStateToProps)  (ReviewScreen);