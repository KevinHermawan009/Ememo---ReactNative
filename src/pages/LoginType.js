import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, AsyncStorage, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
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

class LoginType extends Component {
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
                <ImageBackground source={require('../image/undrawgawang1.png')} style={styles.undraw1}>
                    <ImageBackground source={require('../image/FA1.png')} style={styles.FA}>
                    </ImageBackground>
                </ImageBackground>
                <View style={{ alignItems: 'center', marginTop: ScreenHeight * 15 / 100 }}>
                    <TouchableOpacity style={styles.btnLogin} onPress={this.login}>
                        <Text style={{ textAlign: 'center', marginTop: ScreenHeight * 0 / 100, color: 'white', fontWeight: 'bold' }}>Login As User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogin} onPress={this.LoginAdmin} >
                        <Text style={{ textAlign: 'center', marginTop: ScreenHeight * 0 / 100, color: 'white', fontWeight: 'bold' }}>Login As Admin</Text>
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
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: ScreenWidth * 2 / 100,
        borderRadius: 15,
      


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

export default connect(mapStateToProps, mapDispatchToProps)(LoginType)