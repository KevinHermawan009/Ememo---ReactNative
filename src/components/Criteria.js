import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, Picker, ScrollView, CheckBox, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { setProvinsiChoosen, setKotaChoosen, setKecamatanChoosen, setRuangGanti, setShower, setAc, setCafe, setWifi, setCar, setMotor } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import History from '../components/History';

// const Item = Picker.Item;
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindProvinsi';
const link_kota = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindKota';
const link_kecamatan = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindKecamatan';
const link_kelurahan = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindKelurahan';
const link_register = 'https://fitaccessproject.herokuapp.com/api/FitAccess/CompanyRegister';
// var id = this.state.ProvinsiId;
class Criteria extends Component {
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
            selectedNameProvinsi: '',
            Kelurahan: [],
            KelurahanId: [],
            KelurahanName: [],
            rgantiPicker: false,
            showerPicker: false,
            acPicker: false,
            wifiPicker: false,
            cafePicker: false,
            carPicker: false,
            motorPicker: false,
           
            nilaiGanti: 'Tidak Tersedia',
            nilaiAc: 'Tidak Tersedia',
            nilaiShower: 'Tidak Tersedia',
            nilaiWifi: 'Tidak Tersedia',
            nilaiCar: 'Tidak Tersedia',
            nilaiMotor: 'Tidak Tersedia',
            nilaiCafe: 'Tidak Tersedia'
        }
    }

    gotoSportLocation = () => {
        this.props.setProvinsiChoosen(this.state.selectedProvinsi),
            this.props.setKotaChoosen(this.state.selectedKota),
            this.props.setKecamatanChoosen(this.state.selectedKecamatan),
            this.props.setRuangGanti(this.state.rgantiPicker),
            this.props.setShower(this.state.showerPicker),
            this.props.setAc(this.state.acPicker),
            this.props.setCafe(this.state.cafePicker),
            this.props.setWifi(this.state.wifiPicker),
            this.props.setCar(this.state.carPicker),
            this.props.setMotor(this.state.motorPicker)

        Actions.SportLocation()
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
                    })
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
    LocationTask() {
        return (
            <View>
                <View style={{ height: ScreenHeight, width: ScreenWidth }} >
                    <View style={{ top: ScreenHeight * 10 / 100, marginLeft: ScreenWidth * 2 / 100 }}>
                        <Text style={styles.abc}>Province</Text>

                        <View style={styles.picker1}>
                            <Picker
                                style={{ width: ScreenWidth * 60 / 100, top: ScreenHeight * 2 / 100 }}
                                mode="dropdown"
                                selectedValue={this.state.selectedProvinsi}
                                onValueChange={(value) => this.BindKota(
                                    this.setState({
                                        selectedProvinsi: value
                                    }))}>
                                            <Picker.Item label="Select Province" value="" />
                                {this.state.Provinsi.map((item, index) => {
                                    return (
                                    <Picker.Item label={item.namaProvinsi} value={item.id} key={index} />
                                    )
                                })}

                            </Picker>
                        </View>
                    </View>
                    <View style={{ top: ScreenHeight * 10 / 100, marginLeft: ScreenWidth * 2 / 100 }}>
                        <Text style={styles.abc}>City</Text>
                        <View style={styles.picker1}>
                            <Picker
                                style={{ width: ScreenWidth * 60 / 100, top: ScreenHeight * 2 / 100 }}
                                mode="dropdown"
                                selectedValue={this.state.selectedKota}
                                onValueChange={(value) => this.BindKecamatan(
                                    this.setState({
                                        selectedKota: value
                                    })
                                )}>
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
                    <View style={{ top: ScreenHeight * 10 / 100, marginLeft: ScreenWidth * 2 / 100 }}>
                        <Text style={styles.abc}>Sub-District</Text>
                        <View style={styles.picker1}>
                            <Picker
                                style={{ width: ScreenWidth * 60 / 100, top: ScreenHeight * 2 / 100 }}
                                mode="dropdown"
                                selectedValue={this.state.selectedKecamatan}
                                onValueChange={(value) => (
                                    this.setState({
                                        selectedKecamatan: value
                                    })
                                )
                                }>
                                         <Picker.Item label="Select Sub-District" value="" />
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
                    <TouchableOpacity onPress={() => this.tabs.goToPage(1)} style={{

                        backgroundColor: '#0064c2',
                        height: ScreenHeight * 7 / 100,
                        width: ScreenWidth * 60 / 100,
                        alignSelf: 'center',
                        borderRadius: 30,
                        top: ScreenWidth * 20 / 100
                    }}>
                        <Text style={{ textAlign: 'center', top: ScreenHeight * 2 / 100, color: 'white', fontWeight: 'bold' }}>Next</Text>
                    </TouchableOpacity >
                </View>
            </View>
        );
    }
    FacilityTask() {
        return (
            <View style={{ width: ScreenWidth, height: ScreenHeight, backgroundColor: 'white' }}>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/toilet.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>Changing Room</Text>
                        {/* <Text style={styles.text1}>{this.state.rgantiPicker}</Text> */}
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.rgantiPicker}
                            value={this.state.rgantiPicker}
                            onValueChange={() =>
                                this.setState({
                                    rgantiPicker: !this.state.rgantiPicker,
                                })} />
                    </View>
                </View>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/shower.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>Shower</Text>
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.showerPicker}
                            value={this.state.showerPicker}
                            onValueChange={() => this.setState({ showerPicker: !this.state.showerPicker })} />
                    </View>
                </View>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/air-conditioner.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>AC</Text>
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.acPicker}
                            value={this.state.acPicker}
                            onValueChange={() => this.setState({ acPicker: !this.state.acPicker })} />
                    </View>
                </View>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/wifi.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>Wifi Hotspot</Text>
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.wifiPicker}
                            value={this.state.wifiPicker}
                            //onValueChange={this.checkboxStatusKPM}
                            onValueChange={() => this.setState({ wifiPicker: !this.state.wifiPicker })} />
                    </View>
                </View>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/stall.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>Cafeteria</Text>
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.cafePicker}
                            value={this.state.cafePicker}
                            //onValueChange={this.checkboxStatusKPM}
                            onValueChange={() => this.setState({ cafePicker: !this.state.cafePicker })} />
                    </View>
                </View>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/parking.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>Car Park</Text>
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.carPicker}
                            value={this.state.carPicker}
                            //onValueChange={this.checkboxStatusKPM}
                            onValueChange={() => this.setState({ carPicker: !this.state.carPicker })} />
                    </View>
                </View>
                <View style={styles.boxcriteria}>
                    <View style={styles.iconstyle}>
                        <ImageBackground source={require('../image/motor.png')}
                            style={styles.icon}>
                        </ImageBackground>
                    </View>
                    <View style={styles.textstyle}>
                        <Text style={styles.text1}>Motorcycle Park</Text>
                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.motorPicker}
                            value={this.state.motorPicker}
                            //onValueChange={this.checkboxStatusKPM}
                            onValueChange={() => this.setState({ motorPicker: !this.state.motorPicker })} />
                    </View>
                </View>
                <TouchableOpacity onPress={this.gotoSportLocation} style={{
                    top: ScreenHeight * 10 / 100,
                    backgroundColor: '#0064c2',
                    height: ScreenHeight * 7 / 100,
                    width: ScreenWidth * 60 / 100,
                    alignSelf: 'center',
                    borderRadius: 30
                }}>
                    <Text style={{ textAlign: 'center', top: ScreenHeight * 2 / 100, color: 'white', fontWeight:'bold' }}>Find</Text>
                </TouchableOpacity >
            </View>
        );
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'black',
                width: ScreenWidth,
                height: ScreenHeight * 200 / 100
            }}>
                <Tabs tabContainerStyle={{ backgroundColor: "white",height:ScreenHeight*6/100 }} tabBarUnderlineStyle={{height:3,backgroundColor:"white"}} ref={c => this.tabs = c} >
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#0064c2',alignItems:'center'}}>
                                {/* <Icon name="navigate" /> */}
                           
                                <Text style={{ color: 'white',textAlign:'center',fontSize:14,fontWeight:'bold' }}>Location</Text>
                            </TabHeading>
                        }>
                        <ScrollView>{this.LocationTask()}</ScrollView>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={{backgroundColor:'#0064c2' }}>
                                {/* <Icon name="speedometer" /> */}
                                <View style={{ marginLeft: 20,borderColor:'red',alignItems:'center', }}>
                                <Text style={{ color: 'white',textAlign:'center',fontSize:14,fontWeight:'bold' }}>Facility</Text>
                                </View>
                            </TabHeading>
                        }>
                        <ScrollView>{this.FacilityTask()}</ScrollView>
                    </Tab>
                </Tabs>
            </View>)
    }
}
const styles = StyleSheet.create({
    text1: {
        fontSize: 14,
        color: 'black',
        top: ScreenHeight * 3 / 100,

    },
    iconstyle: {
        // backgroundColor: 'blue',
        width: ScreenWidth * 14 / 100
    },
    textstyle: {
        // backgroundColor: 'yellow',
        width: ScreenWidth * 70 / 100
    },
    checkboxstyle: {

    },
    checkbox1: {
        // alignSelf:'flex-end',

        marginTop: ScreenHeight * 2 / 100
    },
    boxcriteria: {
        // backgroundColor: 'red',
        marginLeft: ScreenWidth * 2 / 100,
        width: ScreenWidth * 96 / 100,
        height: ScreenHeight * 6.5 / 100,
        top: ScreenHeight * 1 / 100,
        flexDirection: 'row',
        marginTop: ScreenHeight * 2 / 100
    },
    picker1: {

        borderBottomWidth: 1,
        width: ScreenHeight * 30 / 100,
        left: ScreenWidth * 40 / 100,
        bottom: ScreenHeight * 13 / 100,
        fontSize: 14
    },
    InputBox: {
        borderWidth: 1,
        borderColor: 'black',
        width: ScreenWidth * 70 / 100,
        height: ScreenHeight * 7 / 100,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 0.5,
        marginTop: 2,
        justifyContent: 'center',
    },
    bacluar: {
        height: ScreenHeight * 253 / 100,
        width: ScreenWidth,
        backgroundColor: 'white',
        borderRadius: 45,
        borderColor: 'white',
        top: ScreenHeight * 1 / 100,
        alignContent: 'center',
        flex: 1
    },
    judul: {
        alignSelf: 'center',
        fontWeight: '500', fontSize: 25,
        textShadowColor: 'black',
        color: 'black',
        top: ScreenHeight * 1 / 100,

    },
    judul2: {
        alignSelf: 'center',
        fontWeight: '500', fontSize: 25,
        textShadowColor: 'black',
        top: ScreenHeight * 1 / 100,
        color: '#17706e',

    },
    abc: {
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
        bottom: ScreenHeight * 5 / 100

    },
    asd: {
        fontSize: 40,
        fontWeight: '300',
        color: 'black',
        backgroundColor: '#ffff00',
        height: ScreenHeight * 9 / 100,
        elevation: 10

    },
    icon: {
        height: ScreenHeight * 5 / 100,
        width: ScreenWidth * 9 / 100,
        top: ScreenHeight * 1 / 100,
        left: ScreenWidth * 2 / 100
    },
    btnLogin: {

        height: 40,
        width: 300,
        backgroundColor: '#F8C300',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        left: ScreenWidth * 5 / 100,
        borderRadius: 15,
    },
    container: {
        flex: 1
    },
    backgroundImage: {
        width: ScreenWidth,
        height: ScreenHeight

    },
    MainContainer: {
        flex: 1,
        margin: 10
    },
    TextInputStyle: {
        backgroundColor: '#FFF',
        textAlign: 'center',
        marginLeft: 10,
        height: 50,
        width: 300,
        height: 40,
        borderRadius: 15,
        borderColor: '#F8C300',
        borderWidth: 3,
        marginBottom: 10,
    },
    submitButtonText: {
        color: 'white'
    }
});
function mapStateToProps(state) {
    return {
        // sportid: state.sportid,
        // password: state.password,
        // subsystemid: state.subsystemid,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setProvinsiChoosen: (provinsiChoosen) => {
            dispatch(setProvinsiChoosen(provinsiChoosen))
        },
        setKotaChoosen: (kotaChoosen) => {
            dispatch(setKotaChoosen(kotaChoosen))
        },
        setKecamatanChoosen: (kecamatanChoosen) => {
            dispatch(setKecamatanChoosen(kecamatanChoosen))
        },
        setRuangGanti: (ruangGanti) => {
            dispatch(setRuangGanti(ruangGanti))
        },
        setShower: (shower) => {
            dispatch(setShower(shower))
        },
        setAc: (ac) => {
            dispatch(setAc(ac))
        },
        setCafe: (cafe) => {
            dispatch(setCafe(cafe))
        },
        setWifi: (wifi) => {
            dispatch(setWifi(wifi))
        },
        setCar: (car) => {
            dispatch(setCar(car))
        },
        setMotor: (motor) => {
            dispatch(setMotor(motor))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Criteria)