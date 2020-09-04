import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setNamaLengkap } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'


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
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCustomer'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namacustomer: '',
            email: '',
            mobilephone: '',
            customerid: '',
            foto: '',
            visible1: false,
            visible2: false
        }
    }
    logOut = async () => {
        try {
            const remove = await AsyncStorage.removeItem('key1');
            const remove1 = await AsyncStorage.removeItem('key2');
            const remove2 = await AsyncStorage.removeItem('key3');
            const value = await AsyncStorage.getItem('key1');
            const value1 = await AsyncStorage.getItem('key2');
            const value2 = await AsyncStorage.getItem('key3');
            Actions.LoginType()
        } catch (error) {
            alert("Error resettting data" + error);
        }
    }
    bindProfile() {
        fetch(link1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "CustomerId": this.props.customerId
                }
            )
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    namacustomer: res.namaLengkap,
                    email: res.email,
                    mobilephone: res.mobilePhone,
                    customerid: res.customerId,
                })
    
            })
    }
    componentDidMount() {
        this.bindProfile();
        // this.props.setNamaLengkap(this.state.namacustomer)
    }
    EditProfile1 = () => {
        Actions.EditProfileUser()
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

           
                <View style={{ alignItems: 'center', backgroundColor: '#e7f0f1', height: ScreenHeight, width: ScreenWidth, marginTop: ScreenHeight * 1 / 100 }}>
                    <View style={styles.dataProfile}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground source={require('../image/businessman.png')} style={styles.icondata}></ImageBackground>
                            <View style={{ alignSelf: 'flex-start', width: ScreenWidth * 20 / 100 }}>
                                <Text style={styles.tulisandata}>User Name</Text>
                            </View>
                            <Text style={styles.datafont}>{this.state.namacustomer}</Text>

                        </View>
                    </View>

                    <View style={styles.dataProfile}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground source={require('../image/badge.png')} style={styles.icondata}></ImageBackground>
                            <View style={{ alignSelf: 'flex-start', width: ScreenWidth * 20 / 100 }}>
                                <Text style={styles.tulisandata}>User ID</Text>
                            </View>
                            <Text style={styles.datafont}>{this.state.customerid}</Text>

                        </View>
                    </View>
                    <View style={styles.dataProfile}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground source={require('../image/email.png')} style={styles.icondata}></ImageBackground>
                            <View style={{ alignSelf: 'flex-start', width: ScreenWidth * 20 / 100 }}>
                                <Text style={styles.tulisandata}>Email</Text>
                            </View>
                            <Text style={styles.datafont}>{this.state.email}</Text>

                        </View>
                    </View>
                    <View style={styles.dataProfile}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground source={require('../image/phone-call.png')} style={styles.icondata}></ImageBackground>
                            <View style={{ alignSelf: 'flex-start', width: ScreenWidth * 20 / 100 }}>
                                <Text style={styles.tulisandata}>Phone</Text>
                            </View>
                            <Text style={styles.datafont}>{this.state.mobilephone}</Text>

                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={this.EditProfile1}>
                        <View style={styles.editprofile}>
                            <ImageBackground source={require('../image/edit.png')} style={styles.iconedit}></ImageBackground>
                            <Text style={styles.datafont1}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.logOut}>
                        <View style={styles.logoutbtn}>
                            <ImageBackground source={require('../image/logout.png')} style={styles.iconlogout}></ImageBackground>
                            <Text style={styles.datafont1}>Log Out</Text>
                        </View>

                    </TouchableOpacity>
                </View>

          
        )
    }
}
const styles = StyleSheet.create({
    View1: {
        width: ScreenWidth,
        height: ScreenHeight * 100 / 100,
        backgroundColor: 'transparent'
    },
    icondata: {
        marginTop: ScreenHeight * 0.5 / 100,
        width: ScreenWidth * 11.6 / 100,
        height: ScreenHeight * 6.5 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    iconedit: {
        marginTop: ScreenHeight * 0.5 / 100,
        width: ScreenWidth * 10 / 100,
        height: ScreenHeight * 6 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    iconlogout: {
        marginTop: ScreenHeight * 0.5 / 100,
        width: ScreenWidth * 10 / 100,
        height: ScreenHeight * 6 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    tulisandata: {
        color: '#0064c2',
        fontSize: 13,
        marginLeft: ScreenWidth * 1 / 100
    },
    datafont: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        marginLeft: ScreenWidth * 0 / 100
    },
    datafont1: {
        marginTop: ScreenHeight * -4.5 / 100,
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600',
    },
    dataProfile: {
        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 8 / 100,
        backgroundColor: 'white',
        borderRadius: 30,
        width: ScreenWidth * 96 / 100,
        elevation: 10,
        borderColor: '#0064c2',
        borderWidth: 0.5
    },
    editprofile: {
        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 7 / 100,
        backgroundColor: '#0064c2',
        borderRadius: 30,
        width: ScreenWidth * 60 / 100,
        elevation: 10,
        alignContent: 'center'
    },
    logoutbtn: {
        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 7 / 100,
        backgroundColor: '#FF7314',
        borderRadius: 30,
        width: ScreenWidth * 60 / 100,
        elevation: 10,
        alignContent: 'center'
    },
    doodle: {
        width: ScreenWidth,
        height: ScreenHeight * 55 / 100,
        alignItems: 'center',
        marginTop: ScreenHeight * 3 / 100
    },
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        backgroundColor: 'transparent',
    },
})
function mapStateToProps(state) {
    return {
        customerId: state.customerId
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // setNamaLengkap: (namaLengkap) => {
        //     dispatch(setNamaLengkap(namaLengkap))
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)