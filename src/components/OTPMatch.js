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
const Link_getInput = 'https://fitaccessproject.herokuapp.com/api/FitAccess/InputGenerateOTPMatch'
const Link_generateOTP = 'https://fitaccessproject.herokuapp.com/api/FitAccess/GenerateOTPMatch'
const Link_ChangeDateState = 'https://fitaccessproject.herokuapp.com/api/FitAccess/UpdateHoursBooking'

class OTPMatch extends Component {
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
            code: '',
            visible1: false,
            visible2: false
        }
    }
    RequestOTPAgain = () => {
        fetch(Link_generateOTP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CustomerId": this.props.customerId,
                "NamaLengkap": this.props.namaLengkap,
                "Email": this.props.emailCust,
                "KodeTransaksi": this.props.matchPaymentCode
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    if (Message == 'Sukses') {
                        alert('We Have Already Send You New OTP Code, Please Check Your Email')
                    }

                })
    }
    GenerateOTP = () => {
        fetch(Link_generateOTP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CustomerId": this.props.customerId,
                "NamaLengkap": this.props.namaLengkap,
                "Email": this.props.emailCust,
                "KodeTransaksi": this.props.matchPaymentCode
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    // if (Message == 'Sukses') {
                    //     // alert("Payment Success, Please Check Your Activity")
                    // }

                })
    }
    gotoTabUser = () => {
        Actions.TabsUser();
    }
 
    DoGetOTP = () => {
        fetch(Link_getInput, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "OTP": this.state.code,
                "CustomerId": this.props.customerId,
                "KodeTransaksi": this.props.matchPaymentCode
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    if (res.message == "Sukses Aktifasi.") {
                        alert("Registration Success")
                        this.gotoTabUser();
                    }
                    else {
                        alert("Your OTP Was Wrong")
                    }

                })

    }
    componentDidMount() {
        this.GenerateOTP();
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    width: ScreenWidth,
                    height: ScreenHeight
                }}>
                <View style={{ alignItems: 'center', marginTop: ScreenHeight * 20 / 100 }}>
                    <View style={{ width: ScreenWidth * 96 / 100, alignSelf: 'center' }}>
                        {/* <Text style={{color:'black',fontSize:17}}>
                   {this.props.namaLengkap}
               </Text>
               <Text style={{color:'black',fontSize:17}}>
                   {this.props.emailCust}
               </Text>
               <Text style={{color:'black',fontSize:17}}>
                   {this.props.paymentId}
               </Text>
               <Text style={{color:'black',fontSize:17}}>
                   {this.props.customerId}
               </Text> */}
                        <Text style={{ color: 'black', fontSize: 17, textAlign: 'center' }}>
                            Please Input 4 Digit OTP Code From Your Email To Finish Your Transaction
               </Text>
                        <Text style={{ color: 'black', fontSize: 17, textAlign: 'center' }}>
                            {this.state.code}
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, alignItems: 'center', borderRadius: 10, borderColor: '#FF7314' }}>
                        <OTPInputView
                            style={{ width: ScreenWidth * 90 / 100, height: 100, marginLeft: ScreenWidth * 2 / 100, marginRight: ScreenWidth * 2 / 100 }}
                            pinCount={4}
                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            // onCodeChanged = {code => { this.setState({code})}}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                this.setState({
                                    code: code
                                })
                            })}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={
                            this.RequestOTPAgain
                        }>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Request OTP Again?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={
                            this.DoGetOTP
                        }>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Enter OTP </Text>
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
        backgroundColor: '#0064c2',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: ScreenWidth * 2 / 100,
        borderRadius: 15,
      


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
        color: 'black'
    },

    underlineStyleHighLighted: {
        borderColor: 'black',
        color: 'black'
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
        matchPaymentCode: state.matchPaymentCode,
        namaLengkap: state.namaLengkap,
        emailCust: state.emailCust,
        customerId: state.customerId,

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPMatch)