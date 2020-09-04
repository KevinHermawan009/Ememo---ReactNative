import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import { Container, Header, Content, Item, Input, Picker } from 'native-base';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/CustomerRegister'
const createTwoButtonAlert = () =>
Alert.alert(
  "All Field Must Be Filled",
  "",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: true }
);


class RegisterUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false,
            progress: 0,
            // login_username: '187360',
            // login_password: 'Astrilogy.io',
        }
    }

    backtologin = () => {
        this.setState({ spinner: false });
        Actions.LoginType()
    }
    login1 = () => {
        this.setState({ spinner: false });
        Actions.TabsAdmin()
    }
    CheckPassword = () =>{
        if (this.state.Password_Pengguna != this.state.Konfirmasi_Password_Pengguna){
            Alert.alert("Kata Sandi Tidak Sama")
        }else{
            this.SaveRegisterNewUser()
        }
    }
    SaveRegisterNewUser = () => {
        this.setState({ spinner: true });
        setInterval(() => {
            if (this.state.spinner == true) {
                this.setState({ spinner: false })
            }
        }, 2000);
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "NamaLengkap": this.state.Nama_Pengguna,
                "Username": this.state.Nama_Akun_Pengguna,
                "Email": this.state.Email_Pengguna,
                "MobilePhone": this.state.Nomor_Telepon_Pengguna,
                "Password": this.state.Password_Pengguna,
                "CustomerAddress":this.state.Alamat_Pengguna

            })
        })
            .then(response => response.json())
            .then(res => {

                console.log(res)
                if (res.RetVal == "Customer User Success Registered") {
                    Alert.alert("Register Berhasil")
                    this.backtologin()
                    
                }
                else {
                    Alert.alert("Error")
                }
            })
            .catch((error) => {
                console.error(error);

            });
    }


    render() {
        return (
            <View style={styles.layar1}>

                <Spinner visible={this.state.spinner} />
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Nama Lengkap Anda</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} onChangeText={(text) => { this.setState({ Nama_Pengguna: text }) }} placeholder="Masukan Nama Lengkap" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Nama Akun</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} onChangeText={(text) => { this.setState({ Nama_Akun_Pengguna: text }) }} placeholder="Masukan Nama Akun" />
                                </Item>
                            </View>
                        </View>
                         <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Email</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} onChangeText={(text) => { this.setState({ Email_Pengguna: text }) }} placeholder="Masukan Email" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Nomor Telepon</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} onChangeText={(text) => { this.setState({ Nomor_Telepon_Pengguna: text }) }} placeholder="Masukan Nomor Telepon" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Alamat</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} onChangeText={(text) => { this.setState({ Alamat_Pengguna: text }) }} placeholder="Masukan Alamat Anda" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Kata Sandi</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input 
                                    style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                     onChangeText={(text) => { this.setState({ Password_Pengguna: text }) }} 
                                     placeholder="Masukan Kata Sandi" 
                                     secureTextEntry={true}
                                     />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Ketik Ulang Kata Sandi</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input 
                                    style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} 
                                    onChangeText={(text) => { this.setState({ Konfirmasi_Password_Pengguna: text }) }} 
                                    placeholder="Masukan Ulang Kata Sandi" 
                                    secureTextEntry={true}
                                    />
                                </Item>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={
                                this.CheckPassword
                            }>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Daftarkan </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
        marginLeft: ScreenWidth * 5 / 100,
        width:ScreenWidth*90/100,
        marginTop:ScreenHeight*1/100
    },
    layar1: {
        backgroundColor: 'white',
        height:ScreenHeight
    },
    btnLogin: {
        height: ScreenHeight * 6 / 100,
        width: ScreenWidth * 75 / 100,
        backgroundColor: '#E85E01',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: ScreenHeight * 7 / 100,
        marginTop: ScreenHeight * 0 / 100,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#E85E01'
    },
    container: {
        flex: 1
    },
    backgroundImage: {
        width: ScreenWidth,
        height: ScreenHeight,
    },
    MainContainer: {
        flex: 1,
        margin: 10
    },
    textjudul:{
        fontSize: 14, 
        fontWeight: 'bold',
        color:'#116979'
    },
    TextInputStyle: {
        backgroundColor: '#FFF',
        textAlign: 'center',
        marginLeft: ScreenWidth * 0 / 100,
        height: ScreenHeight * 6 / 100,
        width: ScreenWidth * 75 / 100,
        borderRadius: 15,
        borderColor: '#E85E01',
        borderWidth: 2,
        marginBottom: ScreenWidth * 2 / 100,
    },
    submitButtonText: {
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        //subsystemid: state.subsystemid,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // setUsername: (username) => {
        //     dispatch(setUsername(username))
        // },
        // setPassword: (password) => {
        //     dispatch(setPassword(password))
        // },
        // setSubSystemID: (subsystemid) => {
        //     dispatch(setSubSystemID(subsystemid))
        // },
        // setPasswordDecrypt: (PasswordDecrypt) => {
        //     dispatch(setPasswordDecrypt(PasswordDecrypt))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser)