import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import { Container, Header, Content, Item, Input, Picker } from 'native-base';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/UpdateCompanyProfile'


class EditProfileAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false,
            progress: 0,

        }

    }
    UpdateProfile = () => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "CompanyId": this.props.companyid,
                    // "CompanyId": "106",
                    "NamaLengkap": this.state.namaadmin,
                    "CompanyName": this.state.namacompany,
                    "Email": this.state.emailadmin,
                    "MobilePhone": this.state.teleponadmin
                }

            )
        })
            .then(response => response.json())
            .then(res => {
                if (res.Message == "SUKSES UPDATE") {
                    Alert.alert('Updated Success')
                    this.TabsAdmin()
                }
                else {
                    Alert.alert('All Field Must be Filled')
                    this.TabsAdmin()
                }

            })
    }
    TabAdmin = () => {
        this.setState({ spinner: false });
        Actions.TabsAdmin()
    }
    render() {
        return (
            <View style={styles.layar1}>
                <Spinner visible={this.state.spinner} />
                <ScrollView>
                    <View style={styles.container1}>
           
                        <View>
                            <Text style={styles.textjudul}>Nama Admin</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Nama Perusahaan"
                                        value={this.state.namaadmin}
                                        onChangeText={(text) => {
                                            this.setState({
                                                namaadmin: text
                                            })
                                        }} />
                                </Item>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textjudul}>Nama Perusahaan</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Nama Perusahaan"
                                        value={this.state.namacompany}
                                        onChangeText={(text) => {
                                            this.setState({
                                                namacompany: text
                                            })
                                        }} />
                                </Item>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textjudul}>Email</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Email"
                                        value={this.state.emailadmin}
                                        onChangeText={(text) => { this.setState({ emailadmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textjudul}>No Telepon</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan No Telepon"
                                        value={this.state.teleponadmin}
                                        onChangeText={(text) => { this.setState({ teleponadmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        {/* <View>
                            <Text style={styles.textjudul}>Password</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Password" />
                                </Item>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textjudul}>Ketik Ulang Password</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }} placeholder="Masukan Ulang Password" />
                                </Item>
                            </View>
                        </View> */}
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={
                                this.UpdateProfile
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
        width: ScreenWidth * 90 / 100,
        marginTop: ScreenHeight * 1 / 100
    },
    layar1: {
        backgroundColor: 'white', height: ScreenHeight
    },
    btnLogin: {
        height: ScreenHeight * 6 / 100,
        width: ScreenWidth * 75 / 100,
        backgroundColor: '#0064c2',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: ScreenHeight * 7 / 100,
        marginTop: ScreenHeight * 0 / 100,
        borderRadius: 15
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
    textjudul: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#116979'
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
        companyid: state.companyid,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileAdmin)