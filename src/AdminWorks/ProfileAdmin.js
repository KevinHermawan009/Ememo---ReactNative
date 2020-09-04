import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker';
import { setCompanyId } from '../Redux/Action';
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
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompany'

class ProfileAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            Email: '',
            mobilePhone: '',
            namaLengkap: '',
            companyId: '',
            foto: '',
            visible1: false,
            visible2: false,
            companyLogo: ''
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
                    "CompanyId": this.props.companyId
                    // "CompanyId": "106"
                }
            )
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    companyName: res.companyName,
                    Email: res.email,
                    mobilePhone: res.mobilePhone,
                    namaLengkap: res.namaLengkap,
                    companyId: this.props.companyId,

                })
                // alert(this.state.Email)

            })
    }
    componentDidMount() {
        this.bindProfile();
    }
    EditProfile1 = () => {
        Actions.EditProfileAdmin()
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

            <View style={{ width: ScreenWidth, height: ScreenHeight * 100 / 100, backgroundColor: 'white', alignItems: 'center' }}>

                <View style={styles.kotak1}>
                    <Text style={{ fontSize: 22, fontWeight: '800', color: 'white', marginTop: ScreenHeight * 5 / 100 }}>{this.state.companyName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontWeight: '800' }}> ID: </Text>

                        <Text style={{ color: 'white', fontWeight: '800' }}>{this.props.companyId}</Text>
                    </View>

                </View>
                <View style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: ScreenWidth * 15 / 100, backgroundColor: 'transparent' }}>
                            <ImageBackground source={require('../image/businessman.png')} style={styles.gambar1}></ImageBackground>
                        </View>
                        <View style={{ width: ScreenWidth * 70 / 100, backgroundColor: 'transparent', alignItems: 'center' }}>
                            <Text style={styles.datafont}>{this.state.namaLengkap}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: ScreenWidth * 15 / 100, backgroundColor: 'transparent' }}>
                            <ImageBackground source={require('../image/stadium.png')} style={styles.gambar1}></ImageBackground>
                        </View>
                        <View style={{ width: ScreenWidth * 70 / 100, backgroundColor: 'transparent', alignItems: 'center' }}>
                            <Text style={styles.datafont}>{this.state.companyName}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: ScreenWidth * 15 / 100, backgroundColor: 'transparent' }}>
                            <ImageBackground source={require('../image/email.png')} style={styles.gambar1}></ImageBackground>
                        </View>
                        <View style={{ width: ScreenWidth * 70 / 100, backgroundColor: 'transparent', alignItems: 'center' }}>
                            <Text style={styles.datafont}>{this.state.Email}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: ScreenWidth * 15 / 100, backgroundColor: 'transparent' }}>
                            <ImageBackground source={require('../image/phone-call.png')} style={styles.gambar1}></ImageBackground>
                        </View>
                        <View style={{ width: ScreenWidth * 70 / 100, backgroundColor: 'transparent', alignItems: 'center' }}>
                            <Text style={styles.datafont}>{this.state.mobilePhone}</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: ScreenWidth * 15 / 100, backgroundColor: 'transparent' }}>
                            <ImageBackground source={require('../image/badge.png')} style={styles.gambar1}></ImageBackground>
                        </View>
                        <View style={{ width: ScreenWidth * 70 / 100, backgroundColor: 'transparent', alignItems: 'center' }}>
                            <Text style={styles.datafont}>{this.state.companyId}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.EditProfile1}>
                    <View style={styles.editprofile}>
                        <ImageBackground source={require('../image/edit.png')} style={styles.iconedit}></ImageBackground>
                        <Text style={styles.datafont1}>Edit Profile</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={this.logOut}>
                    <View style={styles.editprofile1}>
                        <ImageBackground source={require('../image/logout.png')} style={styles.iconedit}></ImageBackground>
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
        width: ScreenWidth * 10 / 100,
        height: ScreenHeight * 5.6 / 100,
        marginLeft: ScreenWidth * 2 / 100

    },
    iconedit: {
        marginTop: ScreenHeight * 0.5 / 100,
        width: ScreenWidth * 8 / 100,
        height: ScreenHeight * 5 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    tulisandata: {
        color: '#116979',
        fontSize: 11,
        marginLeft: ScreenWidth * 1 / 100
    },
    kotak1: {
        height: ScreenHeight * 17 / 100,
        width: ScreenWidth,
        backgroundColor: 'dodgerblue',
        alignItems: "center"

    },
    datafont: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        marginTop: ScreenHeight * 2.5 / 100,
        marginRight:ScreenWidth*7/100

    },
    datafont1: {
        marginTop: ScreenHeight * -4 / 100,
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: ScreenHeight * 8 / 100,
        marginTop: ScreenHeight * 1.5 / 100,
        width: ScreenWidth * 90 / 100,
        alignSelf: 'center',
        elevation: 2,
        flexDirection: 'row',
        borderColor: '#FF7314',
        borderWidth: 0.5

    },
    gambar1: {
        width: ScreenWidth * 12.5 / 100,
        height: ScreenHeight * 7 / 100,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 0.5 / 100

    },
    dataProfile: {
        marginTop: ScreenHeight * 0.5 / 100,
        height: ScreenHeight * 7 / 100,
        backgroundColor: 'white',
        borderRadius: 30,
        width: ScreenWidth * 96 / 100,
        elevation: 10,
        borderColor: '#de7119',
        borderWidth: 0.5
    },
    editprofile1: {
        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 6 / 100,
        backgroundColor: '#FF7314',
        borderRadius: 10,
        width: ScreenWidth * 50 / 100,
        elevation: 10,
        alignContent: 'center'
    },
    editprofile: {
        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 6 / 100,
        backgroundColor: '#0064c2',
        borderRadius: 10,
        width: ScreenWidth * 50 / 100,
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
        companyId: state.companyId,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAdmin)