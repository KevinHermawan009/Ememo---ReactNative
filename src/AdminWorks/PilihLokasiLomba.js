import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, Picker, View, ScrollView, CheckBox, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import History from '../components/History';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
class PilihLokasiLomba extends Component {
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
            Subject: '',
            Description: '',
            isFinalPicker: "",
            memoID: '',
            Reject: false,
            isAlternate: '',
        }

    }
    abcd = () => {
        Actions.RegisterMatchData()
    }
 
    render() {
        return (
            <View>
                <View style={{ height: ScreenHeight, width: ScreenWidth }} >
                    <View style={{ top: ScreenHeight * 10 / 100,marginLeft:ScreenWidth*2/100 }}>
                        <Text style={styles.abc}>Kota</Text>
                        <View style={styles.picker1}>
                            <Picker
                                style={{ width: ScreenWidth * 55 / 100, top: ScreenHeight * 2 / 100 }}>
                                <Picker label="" value="-" />
                                <Picker label="Yes" value="1" />
                                <Picker label="No" value="0" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ top: ScreenHeight * 10 / 100,marginLeft:ScreenWidth*2/100 }}>
                        <Text style={styles.abc}>Kecamatan</Text>
                        <View style={styles.picker1}>
                            <Picker
                                style={{ width: ScreenWidth * 55 / 100, top: ScreenHeight * 2 / 100 }}>
                                <Picker label="" value="-" />
                                <Picker label="Yes" value="1" />
                                <Picker label="No" value="0" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ top: ScreenHeight * 10 / 100,marginLeft:ScreenWidth*2/100 }}>
                        <Text style={styles.abc}>Keluarahan</Text>
                        <View style={styles.picker1}>
                            <Picker
                                style={{ width: ScreenWidth * 55 / 100, top: ScreenHeight * 2 / 100 }}>
                                <Picker label="" value="-" />
                                <Picker label="Yes" value="1" />
                                <Picker label="No" value="0" />
                            </Picker>
                        </View>

                    </View>
                    <TouchableOpacity onPress={this.abcd} style={{

                        backgroundColor: '#0064c2',
                        height: ScreenHeight * 7 / 100,
                        width: ScreenWidth * 60 / 100,
                        alignSelf: 'center',
                        borderRadius: 30,
                        top: ScreenWidth * 20 / 100
                    }}>
                        <Text style={{ textAlign: 'center', top: ScreenHeight * 2 / 100, color: 'white',fontWeight:'bold' }}>Next</Text>
                    </TouchableOpacity >
                </View>
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
        marginTop:ScreenHeight*2/100
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PilihLokasiLomba)