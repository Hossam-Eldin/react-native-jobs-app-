import  React from 'react';
import {View , Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH= Dimensions.get('window').width;

export default class Slides extends React.Component{

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
        large
          title="Onwards!"
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides(){
    return this.props.data.map((slide , index)=>{
        return (
          <View key={slide.text} style={[styles.slide,{backgroundColor: slide.color}]} >
            <Text style={styles.slideText}>{slide.text} </Text>
            {this.renderLastSlide(index)}

          </View>
        )
    })
  };

render(){
  return (
<ScrollView
 horizontal
  pagingEnabled
 style={{flex:1}}>

  {this.renderSlides()}
</ScrollView>
  );
}
}


const styles= {
  slide:{
    flex: 1 ,
    justifyContent:'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
 slideText: {
   fontSize : 25,
   color:'#fff',
 },
 buttonStyle: {
  backgroundColor: '#0288D1',
  marginTop : 25,
}
}
