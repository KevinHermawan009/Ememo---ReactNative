import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, Drawer } from 'react-native-router-flux';
import { View, ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet, Picker, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;




export default class Sidebar extends Component {

    profile(){
        Actions.login()
    }
    CUTI1() {
        Actions.Cuti()
    }

    backpressed() {
        Actions.drawerClose()
    }
    state = { language: "" }
    updatelanguage = (language) => {
        this.setState({ language: language })
    }


    render() {
        return (

            <View
            style={{backgroundColor:'black'}}
            >
        
        <ImageBackground style={{
            width:ScreenWidth*80/100,
            height:ScreenHeight*10/100,
            top:ScreenHeight*5/100
            }} 
            source={require('../image/maybankkuning1.png')} 
            resizeMode='stretch'
            >

        <Text style={{ 
            borderBottomWidth: 3, 
            borderColor: '#EBFF32', 
            marginTop: ScreenHeight * 10 / 100, 
            fontSize: 17, 
            fontStyle: 'normal', 
            width:ScreenWidth*350/100 
            }}>  
            </Text>

            </ImageBackground>
                <View style={{top:ScreenHeight*20/100}}>
                   
                    <View style={{ 
                        borderColor:'#EBFF32', 
                        borderWidth: 2, 
                        borderRadius: 15, 
                        height:ScreenHeight*7/100, 
                        width:ScreenWidth*50/100,
                        backgroundColor:'hsla(9, 100%, 64%, 0.4)', 
                        marginLeft: ScreenWidth * 10 / 100 }}
                        >
                        <TouchableOpacity
                            style={{ height: ScreenHeight*20/100 }}
                            onPress={this.profile}
                        >
                        <View style={{top:ScreenHeight*1.5/100}}>

                            <Icon name='user-o' 
                            style={{ 
                            marginLeft: ScreenWidth * 2 / 100, 
                            fontSize: 18,
                            marginTop: ScreenHeight * 0 / 100,
                            color: '#EBFF32' }} />

                            <Text 
                            style={{ 
                            fontSize: 16, 
                            marginLeft: ScreenWidth * 10 / 100, 
                            marginTop: ScreenHeight * -3 / 100, 
                            color: 'white' }}> 
                            Profile Detail 
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* ------------------------CUTI--------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <View style={{ 
                            borderColor:'#EBFF32', 
                            borderWidth: 2, 
                            borderRadius: 15, 
                            backgroundColor: 'hsla(9, 100%, 64%, 0.4)',
                            height:ScreenHeight*7/100, 
                            width:ScreenWidth*50/100,
                            marginLeft: ScreenWidth * 10 / 100,
                            top:ScreenHeight*5/100
                             }}>
                        <TouchableOpacity
                            style={{ height: 20 }}
                            onPress={ this.CUTI1 }                              
                            >
                            <View style={{top:ScreenHeight*2.5/100}}>
                            <Icon name='calendar' 
                            style={{ 
                            marginLeft: ScreenWidth * 2 / 100, 
                            fontSize: 18, 
                            marginTop: ScreenHeight * -1 / 100, 
                            color: '#EBFF32' }} />

                            <Text 
                            style={{ 
                            fontSize: 16, 
                            marginLeft: ScreenWidth * 10 / 100, 
                            marginTop: ScreenHeight * -3 / 100, 
                            color: 'white' }}>
                            Permohonan Cuti
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* -----------------------------------------BACK-------------------------------------- */}

                    <View style={{ 
                        borderColor:'#EBFF32', 
                        borderWidth: 2, 
                        borderRadius: 15, 
                        backgroundColor: 'hsla(9, 100%, 64%, 0.4)',
                        height:ScreenHeight*7/100, 
                        width:ScreenWidth*50/100, 
                        marginLeft: ScreenWidth * 10 / 100,
                        top:ScreenHeight*10/100, 
                        color: 'black' }}>
                        <TouchableOpacity
                            style={{ height: 20 }}
                            onPress={this.backpressed}
                        >
                         <View style={{top:ScreenHeight*1.5/100}}>
                        <Icon 
                        name='arrow-left' 
                        style={{ 
                        marginLeft: ScreenWidth * 3 / 100, 
                        fontSize: 18, 
                        marginTop: ScreenHeight * 0 / 100, 
                        color: '#EBFF32' }} />
                           
                            <Text style={{ 
                                fontSize: 16, 
                                marginLeft: ScreenWidth * 10 / 100, 
                                marginTop: ScreenHeight * -3 / 100, 
                               
                                color: 'white' }}> Back</Text>
                                </View>
                        </TouchableOpacity>

                    </View>


                </View>
                <View style={{ 
                    borderWidth: 1, 
                    borderRadius: 5, 
                    borderColor:'#EBFF32',
                    backgroundColor: 'transparent', 
                    height:ScreenHeight* 7/100, 
                    width: ScreenWidth * 70 / 100, 
                    color: '#EBFF32', 
                    marginTop: ScreenHeight * 50 / 100, 
                    left:ScreenWidth*2.5/100
                    
                }}>

                    <TouchableOpacity

                        style={{ height:ScreenHeight* 20/100 }}
                        onPress={
                            () => { Actions.sidebar() }
                        }>
                        <Text style={{ 
                            fontSize: 16, 
                            marginTop: ScreenHeight * 1 / 100, 
                            marginLeft: ScreenWidth * 25/ 100, 
                            fontStyle: 'italic', 
                            fontWeight: 'bold', 
                            color: '#EBFF32' 
                            }}> 
                            Log Out
                            </Text>
                    </TouchableOpacity>

                </View>
               
            </View>


        );
    }


}