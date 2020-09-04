 import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setUsername, setPassword,setCustomerId} from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import { Container, Header, Content, Item, Input, Picker } from 'native-base';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/CustomerLogin'

const createTwoButtonAlert = () =>
    Alert.alert(
      "Form belum terisi  atau akun anda belom terdaftar",
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

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false,
            progress: 0,
            login_username: '',
            login_password: ''

        }
        this.checkLogin = this.checkLogin.bind(this);
    }
    LoginUser = () => {
        this.setState({ spinner: false });
        Actions.OTPLoginUser()
    }
    RegisterUser = () => {
        this.setState({ spinner: false });
        Actions.RegisterUser()
    }
    
    // componentDidMount() {
    //     this.checkLogin();
    // }
    saveKey = async (value) => {
        try {
    
            AsyncStorage.setItem('key1', this.state.login_username);
            AsyncStorage.setItem('key2', this.state.login_password);
            AsyncStorage.setItem('key3', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    checkLogin = async () => {
        try {
            const value = await AsyncStorage.getItem('key1');
            const value1 = await AsyncStorage.getItem('key2');
            console.log("F", value)

            if (value != null) {

                this.props.setUsername(value)
                this.props.setPassword(value1)
                Actions.Tab2()
            } else {
                // Actions.login()
                Alert.alert('check')
            }
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    LoginCustomer = () => {
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
                "Username": this.state.login_username,
                "Password": this.state.login_password

            }) 
        })
            .then(response => response.json())
            .then(res => {
                if (res.isActive == "0") {
                    // Alert.alert('masuk2')
                    // console.log(RetVal)
                    AsyncStorage.setItem('key1', this.state.login_username);
                    AsyncStorage.setItem('key2', this.state.login_password);
                    AsyncStorage.setItem('key3', res.customerId);
                    // // AsyncStorage.setItem('key4', res.LoginResult.PasswordDecrypt);
                    this.props.setUsername(this.state.login_username)
                    this.props.setPassword(this.state.login_password)
                    this.props.setCustomerId(res.customerId)
                    // this.props.setPasswordDecrypt(res.LoginResult.PasswordDecrypt)
                    // this.LoginUser()
                    Actions.OTPLoginUser()
               
                }
                else if(res.isActive == "1"){
                    AsyncStorage.setItem('key1', this.state.login_username);
                    AsyncStorage.setItem('key2', this.state.login_password);
                    AsyncStorage.setItem('key3', res.customerId);
                    // // AsyncStorage.setItem('key4', res.LoginResult.PasswordDecrypt);
                    this.props.setUsername(this.state.login_username)
                    this.props.setPassword(this.state.login_password)
                    this.props.setCustomerId(res.customerId)
                    // this.props.setPasswordDecrypt(res.LoginResult.PasswordDecrypt)
                    // this.LoginUser()
                    // Actions.OTPLoginUser()
                    Actions.TabsUser()
               
                }
                else if(res.retVal == 'Login Fail'){
                    Alert.alert("Your username or password must be wrong or not registered")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
                <Spinner visible={this.state.spinner} />
                <View
                    style={{
                        backgroundColor: 'white',
                        width: ScreenWidth,
                        height: ScreenHeight
                    }}>
                    <ImageBackground source={require('../image/undrawbasket.png')} style={styles.undraw1}>
                        <ImageBackground source={require('../image/FA1.png')} style={styles.FA}>
                        </ImageBackground>
                    </ImageBackground>
                    <View style={styles.rgbset}>
                        <View
                            style={{ alignItems: 'center' }}>
                            <View style={{ marginTop: ScreenHeight * 4 / 100 }}>
                                <TextInput
                                    ref='npk'
                                    placeholder="Input Account Username"
                                    returnKeyType={"next"}
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyle}
                                    onChangeText={
                                        (text) => { this.setState({ login_username: text }) }
                                    }
                                />
                                <TextInput
                                    ref='password'
                                    placeholder="Input Password"
                                    secureTextEntry={true}
                                    returnKeyType={"next"}
                                    underlineColorAndroid="transparent"
                                    style={styles.TextInputStyle}
                                    onChangeText={(text) => { this.setState({ login_password: text }) }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    style={styles.btnLogin}
                                    onPress={this.LoginCustomer}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' ,fontSize:14}}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btnLogin}
                                    onPress={this.RegisterUser}>
                                    <Text style={{ color: 'white', fontWeight: 'bold',fontSize:14 }}>Register</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    btnLogin: {
        height: ScreenHeight * 6 / 100,
        width: ScreenWidth * 32 / 100,
        backgroundColor: '#FF7314',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenHeight * 1 / 100,
        borderRadius: 15,
    
        elevation: 7
    },
    rgbset: {
        width: ScreenWidth * 80 / 100,
        height: ScreenHeight * 28 / 100,
        backgroundColor: '#e7f0f1',
        marginTop: ScreenHeight * -3.3 / 100,
        borderRadius: 20,
        alignSelf: 'center'
    },
    undraw1: {
        height: ScreenHeight * 42 / 100,
        width: ScreenWidth * 100 / 100,
        marginTop: ScreenHeight * 1 / 100
    },
    FA: {
        marginLeft: ScreenWidth * 57 / 100,
        width: ScreenWidth * 40 / 100,
        height: ScreenHeight * 10 / 100,
        bottom: ScreenHeight * -1 / 100
    },
    backgroundImage: {
        width: ScreenWidth,
        height: ScreenHeight,
    },
    MainContainer: {
        flex: 1,
        margin: 10
    },
    TextInputStyle: {
        backgroundColor: '#FFF',
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: ScreenWidth * 2 / 100,
        height: ScreenHeight * 5.5 / 100,
        width: ScreenWidth * 70 / 100,
        borderRadius: 15,
        borderColor: 'dodgerblue',
        borderWidth: 2,
        marginBottom: ScreenWidth * 2 / 100,
    },
    submitButtonText: {
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        // username: state.username, 
        // password: state.password
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUsername: (username) => {
            dispatch(setUsername(username))
        },
        setPassword: (password) => {
            dispatch(setPassword(password))
        },
        setCustomerId: (customerId) => {
            dispatch(setCustomerId(customerId))
        },
        // setPasswordDecrypt: (PasswordDecrypt) => {
        //     dispatch(setPasswordDecrypt(PasswordDecrypt))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)