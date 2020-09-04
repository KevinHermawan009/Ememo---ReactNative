import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Row } from 'native-base';


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

class MemberSportList extends Component {
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
    abc = () => {
        Actions.MemberCriteria()
      }
    TakePhoto = () => {
        // alert('clicked'); 
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {

                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                // alert(response.data) 
                this.setState({
                    foto: source,
                    captured: true
                });
            }
        });
    }
    render() {
        return (

            <View style={styles.Layar1}>
                <View style={styles.layar2}>
                    <TouchableOpacity style={styles.iconbox} onPress={this.abc}>
                        <View style={{ alignSelf: 'center' }}>
                            <ImageBackground source={require('../image/gim.png')}
                                style={{
                                    top: ScreenHeight * 0.5 / 100,
                                    width: ScreenWidth * 15.8 / 100,
                                    height: ScreenHeight * 8.8 / 100,
                                }}
                            ></ImageBackground>
                        </View>
                        <View style={{ top: ScreenHeight * 1 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Gymnastic</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconbox} onPress={this.abc}>
                        <View style={{ alignSelf: 'center' }}>
                            <ImageBackground source={require('../image/swimming.png')}
                                style={{
                                    top: ScreenHeight * 0.5 / 100,
                                    width: ScreenWidth * 15.8 / 100,
                                    height: ScreenHeight * 8.8 / 100,
                                }}
                            ></ImageBackground>
                        </View>
                        <View style={{ top: ScreenHeight * 1 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Swimming</Text></View>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }


}
const styles = StyleSheet.create({
    View1: {
        width: ScreenWidth,
        height: ScreenHeight * 100 / 100,

        backgroundColor: 'transparent',




    },
    iconbox: {
        width: ScreenWidth * 18.5 / 100,
        height: ScreenHeight * 10 / 100,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 126, 1)',
        borderRadius: 60,
        alignItems: 'center',
        marginLeft: ScreenWidth * 5.3 / 100,
        top: ScreenHeight * 2/ 100

    },
    Layar1: {
        height: ScreenHeight * 100 / 100,
        width: ScreenWidth * 100 / 100,
        backgroundColor: 'rgba(5, 255, 184, 0.44)',


    },
    layar2: {
        width: ScreenWidth * 95.5 / 100,
        height: ScreenHeight * 30 / 100,
        backgroundColor: 'white',
        alignSelf: 'center',
        top:ScreenHeight*1.5/100,
        flexDirection: 'row',
        borderRadius:10
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

export default connect(mapStateToProps, mapDispatchToProps)(MemberSportList)