import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, AsyncStorage, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Container, Header, Content, Item, Input, Picker } from 'native-base';


const options = {
    title: 'Choose to change image',
    takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
    chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
    quality: 0.5,
    maxHeight: 100,
    maxWidth: 100,
}

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://wsdl.maybankfinance.co.id/uat/MAC/getuserdetail'
const createTwoButtonAlert = () =>
    Alert.alert(
      "OTP Yang Anda Masukan Salah",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
class OTPAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lblSalesHariini: '',
            lblSalesbulanini: '',
            name: '',
            jobposition: '',
            officelocation: '',
            description: '',
            email: '',
            telepon: '',
            foto: '',
            visible1: false,
            visible2: false
        }


    }
    login = () => {

        Actions.login()
    }
    LoginAdmin = () => {

        Actions.LoginAdmin()
    }

    logOut = async () => {
        try {
            const remove = await AsyncStorage.removeItem('key1');
            const remove1 = await AsyncStorage.removeItem('key2');
            const remove2 = await AsyncStorage.removeItem('key3');
            const value = await AsyncStorage.getItem('key1');
            const value1 = await AsyncStorage.getItem('key2');
            const value2 = await AsyncStorage.getItem('key3');
            Actions.login()
        } catch (error) {
            alert("Error resettting data" + error);
        }
    }
    render() {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    width: ScreenWidth,
                    height: ScreenHeight
                }}>
           <View style={{alignItems:'center',marginTop:ScreenHeight*20/100}}>
               <View style={{width:ScreenWidth*96/100,alignSelf:'center'}}>
               <Text style={{color:'black',fontSize:17}}>
                   Check your Email To Get Your OTP To Fill This Form
               </Text>
               </View>
                <View style={{borderWidth:1,alignItems:'center',borderRadius:10,borderColor:'#FF7314'}}>
                <OTPInputView
                        style={{ width:ScreenWidth*90/100, height: 100,marginLeft:ScreenWidth*2/100,marginRight:ScreenWidth*2/100 }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                </View>
                <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={
                                createTwoButtonAlert
                            }>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Input OTP </Text>
                        </TouchableOpacity>
                   
      </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    View1: {
        width: ScreenWidth,
        height: ScreenHeight
    },
    btnLogin: {
        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 6 / 100,
        width: ScreenWidth * 75 / 100,
        backgroundColor: '#18b0b0',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: ScreenWidth * 2 / 100,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#18b0b0'


    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "black",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color:'black'
    },

    underlineStyleHighLighted: {
        borderColor: 'black',
        color:'black'
    },
    undraw1: {
        height: ScreenHeight * 42 / 100,
        width: ScreenWidth * 100 / 100,
        marginTop: ScreenHeight * 20 / 100
    },
    bb1: {
        backgroundColor: 'dodgerblue',
        width: ScreenWidth * 50 / 100,
        height: ScreenHeight * 6 / 100,
        borderRadius: 10,
        marginTop: ScreenHeight * 5 / 100,
        borderWidth: 2,
        borderColor: 'blue'
    },
    FA: {
        marginLeft: ScreenWidth * 57 / 100,
        width: ScreenWidth * 40 / 100,
        height: ScreenHeight * 10 / 100,
        bottom: ScreenHeight * -1 / 100
    },
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        top: ScreenHeight * 5 / 100,

        backgroundColor: 'transparent',

    },
})
function mapStateToProps(state) {
    return {
        // username: state.username,
        // password: state.password,
        // subsystemid: state.subsystemid,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPAdmin)