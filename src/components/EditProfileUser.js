import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import { Container, Header, Content, Item, Input, Picker } from 'native-base';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/Login'
const createTwoButtonAlert = () =>
    Alert.alert(
      "Update Success",
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


class EditProfileUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false,
            progress: 0,

        }
        this.checkLogin = this.checkLogin.bind(this);
    }

    login2 = () => {
        this.setState({ spinner: false });
        Actions.LoginType()
    }
    login1 = () => {
        this.setState({ spinner: false });
        Actions.TabsAdmin()
    }

    // componentDidMount() {
    //     this.checkLogin();
    // }

    saveKey = async (value) => {
        try {
            // console.log(this.props.login_username)
            // console.log(this.props.PasswordDecrypt)
            // console.log(this.props.SubSystemID)
            AsyncStorage.setItem('key1', this.state.login_username);
            AsyncStorage.setItem('key2', this.state.login_password);
            AsyncStorage.setItem('key3', value);
            // AsyncStorage.setItem('key4', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    checkLogin = async () => {

        try {
            const value = await AsyncStorage.getItem('key1');
            const value1 = await AsyncStorage.getItem('key2');
            const value2 = await AsyncStorage.getItem('key3');
            const value3 = await AsyncStorage.getItem('key4');
            console.log("F", value)

            if (value != null) {

                this.props.setUsername(value)
                this.props.setPassword(value1)
                this.props.setSubSystemID(value2)
                this.props.setPasswordDecrypt(value3)
                Actions.Tab2()
            } else {
                // // Actions.login()
                // Alert.alert('TAIK')
            }
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    render() {
        return (
            <View style={styles.layar1}>

                <Spinner visible={this.state.spinner} />
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Nama Pengguna</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Nama Pengguna" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Email</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Email" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>No Telepon</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Email" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Password</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Password" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Ketik Ulang Password</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Ulang Password" />
                                </Item>
                            </View>
                        </View>
                      

                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={
  createTwoButtonAlert
                            }>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Save </Text>
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
        backgroundColor: '#0064c2',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: ScreenHeight * 7 / 100,
        marginTop: ScreenHeight * 0 / 100,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#0064c2'
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
        color:'black'
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileUser)