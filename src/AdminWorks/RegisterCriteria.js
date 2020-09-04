import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, Picker, View, ScrollView, CheckBox, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { setRuangGanti, setShower, setAc, setCafe,setWifi,setCar, setMotor} from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import History from '../components/History';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class RegisterCriteria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_description: [],
            data_supporter: [],
            data_attachment: [],
            data: [],
            data1: [],
            data4: [],
            data5: [],
            data6: [],
            data7: '',
            data_DtDetail: '',
            data_DtSupportDetail: '',
            data_DtAttachment: '',
            data_DtApprovalScheme: '',
            final: '',
            foto: '',
            idBanding: 'none',
            showModal: false,
            closeModal: false,
            rgantiPicker: false,
            showerPicker: false,
         
            acPicker: false,
            wifiPicker: false,
            cafePicker: false,
            carPicker: false,
            motorPicker: false,

            nilaiGanti: '0',
            nilaiShower: '0',
            nilaiCar: '0',
            nilaiMotor: '0',
            nilaiCafe: '0',
            nilaiWifi: '0',
            nilaiAC: '0',


            Subject: '',
            Description: '',
            isFinalPicker: "",
            memoID: '',
            Reject: false,
            isAlternate: '',
        }

    }
    start(){
    
    }
    RuangGanti(){
        
    }
    gotoTimeOperasional = () => {
        this.props.setRuangGanti(this.state.rgantiPicker)
        this.props.setShower(this.state.showerPicker)
        this.props.setAc(this.state.acPicker)
        this.props.setCafe(this.state.cafePicker)
        this.props.setCar(this.state.carPicker)
        this.props.setMotor(this.state.motorPicker)
        this.props.setWifi(this.state.wifiPicker)

        Actions.OperationalTime();
    }


    render() {
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
                      

                    </View>
                    <View style={styles.checkbox1}>
                        <CheckBox
                            title='Click Here'
                            checked={this.state.rgantiPicker}
                            value={this.state.rgantiPicker}
                            onValueChange={() =>
                                this.setState({
                                    rgantiPicker: !this.state.rgantiPicker,
                                    nilaiGanti: '1'
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
                            value={this.state.showerPicker}
                            title='Click Here'
                            checked={this.state.showerPicker}
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
                {/* {this.gotoTimeOperasional()} */}
                <TouchableOpacity onPress={() => this.gotoTimeOperasional()} style={{
                    top: ScreenHeight * 10 / 100,
                    backgroundColor: '#0064c2',
                    height: ScreenHeight * 7 / 100,
                    width: ScreenWidth * 60 / 100,
                    alignSelf: 'center',
                    borderRadius: 30
                }}>
                    <Text style={{ textAlign: 'center', top: ScreenHeight * 2 / 100, color: 'white', fontWeight:'bold' }}>Next</Text>
                </TouchableOpacity >

            </View>
        );
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
        // username: state.username,
        // password: state.password,
        // subsystemid: state.subsystemid,
    }
}
function mapDispatchToProps(dispatch) {
    return {

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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterCriteria)