import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import { Container, Header, Content, Item, Input, Picker } from 'native-base';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindProvinsi';
const link_kota = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindKota';
const link_kecamatan = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindKecamatan';
const link_kelurahan = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindKelurahan';
const link_register = 'https://fitaccessproject.herokuapp.com/api/FitAccess/CompanyRegister';



class RegisterAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinner: false,
            progress: 0,
            selected: '',
            ProvinsiName: [],
            ProvinsiId: [],
            bindLocation: [],
            selectedProvinsi: '',
            items: [],
            Provinsi: [],
            selected1: [],
            KotaId: [],
            KotaProvinsiId: [],
            NamaKota: [],
            selectedKota: '',
            Kota: [],
            selectedKecamatan: '',
            Kecamatan: [],
            KecamatanId: [],
            KecamatanName: [],
            selectedKelurahan: '',
            Kelurahan: [],
            KelurahanId: [],
            KelurahanName: []
        }

    }

    login2 = () => {
        this.setState({ spinner: false });
        Actions.OTPAdmin()
    }
    login1 = () => {
        this.setState({ spinner: false });
        Actions.TabsAdmin()
    }
    CheckPassword = () => {
        if (this.state.PasswordAdmin !== this.state.KonfirmasiPassword) {
            Alert.alert("Your Password and Confirmation Password Doesnt Match")
        } 
        else if(this.state.MobilePhone == ''){
            Alert.alert('Phone Number Cannot Be Empty')
        }
        else if(this.state.PasswordAdmin == this.state.KonfirmasiPassword){
            this.RegisterAdminData();
        }
    }
    RegisterAdminData = () => {

        this.setState({ spinner: true });
        setInterval(() => {
            if (this.state.spinner == true) {
                this.setState({ spinner: false })
            }
        }, 2000);
        fetch(link_register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "NamaLengkap": this.state.NamaAdmin,
                "Username": this.state.UsernameAdmin,
                "Email": this.state.EmailAdmin,
                "MobilePhone": this.state.TeleponAdmin,
                "Password": this.state.PasswordAdmin,
                "CompanyName": this.state.NamaPerusahaan,
                "CompanyProvinsi": this.state.selectedProvinsi,
                "CompanyKota": this.state.selectedKota,
                "CompanyKecamatan": this.state.selectedKecamatan,
                "CompanyKelurahan": this.state.selectedKelurahan,
                "CompanyAddress": this.state.DetailAlamatAdmin
            })

        })
            // alert(this.state.selectedProvinsi)
            .then(response => response.json())
            .then(res => {

                alert(res.RetVal)
                if (res.RetVal == "Success Registered") {
                    Alert.alert("Success Registered")
                    Actions.LoginType()
                }
                else if (res.RetVal == ("Username Already Exists")) {
                    Alert.alert("Username Already Exists")
                }
                else if (res.RetVal == ("Nama Already Exists")) {
                    Alert.alert("Your Full Name Already Exists")
                }
                else if (res.RetVal == ("Email Already Exists")) {
                    Alert.alert("Email Already Exists")
                }
                else if (res.RetVal == ("CompanyName Already Exists")) {
                    Alert.alert("CompanyName Already Exists")
                }
                else if(res.RetVal==("Provinsi Cannot Be Empty")){
                    Alert.alert("Province Cannot Be Empty ")
                }
                else if(res.RetVal == ("Kota Cannot Be Empty")){
                    Alert.alert("City Cannot Be Empty")
                }
                else if(res.RetVal == ("Kecamatan Cannot Be Empty")){
                    Alert.alert("District Cannot Be Empty")
                }
                else if(res.RetVal == ('Kelurahan Cannot Be Empty')){
                    Alert.alert("Urban Village Cannot Be Empty")
                }
                // else if(res.RetVal ==('MobilePhone Cannot Be Empty')){
                //     Alert.alert("Phone Number Cannot Be Empty, Must Using Number And Start With 08++")
                // }
                else if(res.RetVal ==('MobilePhone Cannot Be Empty')){
                    Alert.alert("Detail Address Cannot Be Empty")
                }
            })
            .catch((error) => {
                console.error(error);

            });
    }
    BindProvinsi() {
        // alert("KONTOL")
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    this.setState({
                        Provinsi: res.RetVal,
                        ProvinsiName: res.RetVal.namaProvinsi,
                        ProvinsiId: res.RetVal.id
                    })
                })
    }
    BindKota() {

        fetch(link_kota, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "ProvinsiId": this.state.selectedProvinsi
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    this.setState({
                        Kota: res.RetVal,
                        KotaId: res.RetVal.id,
                        NamaKota: res.RetVal.namaKota,
                    }
                    )
                })
    }
    BindKelurahan() {
        fetch(link_kelurahan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "KecamatanId": this.state.selectedKecamatan
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    this.setState({
                        Kelurahan: res.RetVal,
                        KelurahanName: res.RetVal.namaKelurahan,
                        KelurahanId: res.RetVal.id
                    })
                    // alert("Kelurahan Success")
                })
    }
    BindKecamatan() {
        fetch(link_kecamatan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "KotaId": this.state.selectedKota
            })
        })
            .then(response => response.json())
            .then(
                res => {
                    this.setState({
                        Kecamatan: res.RetVal,
                        KecamatanId: res.RetVal.id,
                        namaKecamatan: res.RetVal.namaKecamatan,

                    })

                })
    }
    componentDidMount() {
        this.BindProvinsi();

    }
    render() {
        return (
            <View style={styles.layar1}>

                <Spinner visible={this.state.spinner} />
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Full Name</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        placeholder="Input Your Fullname"
                                        value={this.state.NamaAdmin}
                                        onChangeText={(text) => { this.setState({ NamaAdmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Username Account</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        placeholder="Input Username"
                                        value={this.state.UsernameAdmin}
                                        onChangeText={(text) => { this.setState({ UsernameAdmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Email</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        placeholder="Input Email"
                                        value={this.state.EmailAdmin}
                                        onChangeText={(text) => { this.setState({ EmailAdmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Phone Number</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        placeholder="Input Phone Number"
                                        value={this.state.TeleponAdmin}
                                        onChangeText={(text) => { this.setState({ TeleponAdmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Password</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        secureTextEntry={true}
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        value={this.state.PasswordAdmin}
                                        onChangeText={(text) => { this.setState({ PasswordAdmin: text }) }}
                                        placeholder="Input Password" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Confirmation Password</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        secureTextEntry={true}
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        value={this.state.KonfirmasiPassword}
                                        onChangeText={(text) => { this.setState({ KonfirmasiPassword: text }) }}
                                        placeholder="Input Confirmation Password" />
                                </Item>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Company Name</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        value={this.state.NamaPerusahaan}
                                        onChangeText={(text) => { this.setState({ NamaPerusahaan: text }) }}
                                        placeholder="Input Company Name" />
                                </Item>
                            </View>
                        </View>


                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Province</Text>
                            <View style={{ borderBottomWidth: 0.5, bottom: ScreenWidth * 2 / 100, borderColor: '#D7D7D7', marginTop: ScreenHeight * -1 / 100 }}>
                                <Picker
                                    style={{ width: ScreenWidth * 90 / 100, top: ScreenHeight * 1.5 / 100 }}
                                    mode="dropdown"
                                    selectedValue={this.state.selectedProvinsi}
                                    onValueChange={(value) => this.BindKota(
                                        this.setState({
                                            selectedProvinsi: value,

                                        }))}>
                                                      <Picker.Item label="Select Province" value="" />
                                    {this.state.Provinsi.map((item, index) => {
                                        return (<Picker.Item label={item.namaProvinsi} value={item.id} key={index} />)
                                    })}
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>City</Text>
                            <View style={{ borderBottomWidth: 0.5, bottom: ScreenWidth * 2 / 100, borderColor: '#D7D7D7', marginTop: ScreenHeight * -1 / 100 }}>

                                <Picker
                                    style={{ width: ScreenWidth * 90 / 100, top: ScreenHeight * 1.5 / 100 }}
                                    mode="dropdown"
                                    selectedValue={this.state.selectedKota}
                                    // onValueChange={(throttlemodeValue, throttlemodeIndex) => this.GetSelectedThrottleModeItem(this.setState({throttlemode:throttlemodeValue}))}>
                                    onValueChange={(value) => this.BindKecamatan(
                                        this.setState({
                                            selectedKota: value
                                        })
                                    )
                                    }>
                                                  <Picker.Item label="Select City" value="" />
                                    {this.state.Kota.map((item, index) => {
                                        return (
                                            <Picker.Item
                                                label={item.namaKota}
                                                value={item.id}
                                                key={index}
                                            />)
                                    })}
                                </Picker>

                            </View>
                        </View>

                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Sub District</Text>
                            <View style={{ borderBottomWidth: 0.5, bottom: ScreenWidth * 2 / 100, borderColor: '#D7D7D7', marginTop: ScreenHeight * -1 / 100 }}>
                                <Picker
                                    style={{ width: ScreenWidth * 90 / 100, top: ScreenHeight * 1.5 / 100 }}
                                    mode="dropdown"
                                    selectedValue={this.state.selectedKecamatan}
                                    onValueChange={(value) => this.BindKelurahan(
                                        this.setState({
                                            selectedKecamatan: value
                                        })
                                    )
                                    }>
                                                  <Picker.Item label="Select Sub District" value="" />
                                    {this.state.Kecamatan.map((item, index) => {
                                        return (

                                            <Picker.Item
                                                label={item.namaKecamatan}
                                                value={item.id}
                                                key={index}
                                            />
                                        )
                                    })}
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Urban Village</Text>
                            <View style={{ borderBottomWidth: 0.5, bottom: ScreenWidth * 2 / 100, borderColor: '#D7D7D7', marginTop: ScreenHeight * -1 / 100 }}>
                                <Picker
                                    style={{ width: ScreenWidth * 90 / 100, top: ScreenHeight * 1.5 / 100 }}
                                    mode="dropdown"
                                    selectedValue={this.state.selectedKelurahan}
                                    onValueChange={(value) =>
                                        this.setState({
                                            selectedKelurahan: value
                                        })

                                    }>
                                                  <Picker.Item label="Select Urban Village" value="" />
                                    {this.state.Kelurahan.map((item, index) => {
                                        return (

                                            <Picker.Item
                                                label={item.namaKelurahan}
                                                value={item.id}
                                                key={index}
                                            />
                                        )
                                    })}
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.cquestion1}>
                            <Text style={styles.textjudul}>Detail Address</Text>
                            <View style={{ bottom: ScreenWidth * 2 / 100 }}>
                                <Item>
                                    <Input
                                        style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100 }}
                                        placeholder="Input Detail Address"
                                        value={this.state.DetailAlamatAdmin}
                                        onChangeText={(text) => { this.setState({ DetailAlamatAdmin: text }) }} />
                                </Item>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={
                                () => this.CheckPassword()
                            }>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}> Register </Text>
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
        backgroundColor: 'white'
    },
    btnLogin: {
        height: ScreenHeight * 6 / 100,
        width: ScreenWidth * 75 / 100,
        backgroundColor: '#0064c2',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: ScreenHeight * 5 / 100,
        marginTop: ScreenHeight * 5 / 100,
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAdmin)