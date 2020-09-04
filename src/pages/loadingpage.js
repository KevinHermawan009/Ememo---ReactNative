import React, { Component } from 'react';
import {Dimensions,ProgressBarAndroid,ActivityIndicator, View, Text, TouchableOpacity,ImageBackground, StyleSheet , Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

class ActivityIndicatorExample extends Component {
   state = { animating: true }
   login(){
       Actions.login()
   }

   closeActivityIndicator = () => setTimeout(() => this.setState({
   animating: false },this.login()),1000)
   
   
   componentDidMount = () => this.closeActivityIndicator()

   render() {
      const animating = this.state.animating
      return (
          
        <ImageBackground
        source={require('../image/gambar2.jpg')}
        style={styles.backgroundImage}
        
        >
        <View style={{ justifyContent: "center", alignItems:"center" }}>
            <ImageBackground style={{width : 200, height : 200, top:150}} source={require('../image/gambar5.png')} resizeMode='stretch'>
                                    </ImageBackground>

        </View>   
                 <View style={{marginTop:170}}>
            {/* <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/> */}
        </View>
            
            <ProgressBarAndroid style={{alignItems : 'center',justifyContent : 'center', }} styleAttr="Inverse" color="#FFD700" indeterminate={true}/>
            
            
            
         </ImageBackground>
              
         
      )
   }
}
export default ActivityIndicatorExample

const styles = StyleSheet.create ({
    btnLogin: {

        height: 40,
        width:300, 
        backgroundColor: '#F8C300',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 20,
      
        
    },
    backgroundImage: {
        width: ScreenWidth,
        height: ScreenHeight
     
     },
   container: {
      flex: 1,
      marginTop: 5,
      padding : 10
   },
   activityIndicator: {
      flex: 1,
      height: 10
   }
})