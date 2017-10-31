import React from "react";
import {StyleSheet, Text ,View, Platform} from "react-native";
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import  Swipe from '../components/Swipe';
import * as actions from '../actions';


 class DeckScreen extends React.Component {

     renderCard(job) {
         const initialRegion = {
             longitude: job.longitude,
             latitude: job.latitude,
             latitudeDelta: 0.045,
             longitudeDelta: 0.02
         };

         return(
             <Card title={job.jobtitle}>
                 <View style={{ height: 300 }}>
                     <MapView
                         scrollEnabled={false}
                         style={{ flex: 1 }}
                          cacheEnabled={false}
                         initialRegion={initialRegion} >
                     </MapView>
                 </View>
                 <View style={styles.detailWrapper}>
                     <Text>{job.company}</Text>
                     <Text>{job.formattedRelativeTime}</Text>
                 </View>
                 <Text>
                     {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                 </Text>
             </Card>
         );
     }


     renderNoMoreCards = () => {
         return (
             <Card title="No More Jobs">
                 {/*<Button*/}
                     {/*title="Back To Map"*/}
                     {/*large*/}
                     {/*icon={{ name: 'my-location' }}*/}
                     {/*backgroundColor="#03A9F4"*/}
                     {/*onPress={() => this.props.navigation.navigate('map')}*/}
                 {/*/>*/}
             </Card>
         );
     };



    render() {
        return (
            <View style={styles.container}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    keyProp="jobkey"

                />

            </View>
        );
    }

}

function mapStateToProps({ jobs }) {
    return { jobs: jobs.results };
}

const styles = StyleSheet.create({
    container: {
         marginTop: 10,
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
});


export default connect (mapStateToProps) (DeckScreen);