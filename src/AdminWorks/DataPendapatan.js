import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, AsyncStorage, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Picker, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/Income'
var NumberFormat = require('react-number-format');

class DataPendapatan extends Component {

    constructor(props) {
        super(props)
        // this.defaultDate = props.defaultDate;
        //this.minDateProp = props.minDate;
        this.state = {
            selected2: undefined,
            data:[]
        }
    }
    DashboardAdmin = () => {
        Actions.TabsAdmin()
    }
    datapendapatan = () => {
        Actions.DataPendapatan()
    }
    isimatch = () => {
        Actions.MatchType()
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
    abc = () => {
        Actions.BusinessCareType()
    }
    // onValueChange2(value: '123') {
    //   this.setState({
    //     selected2: value
    //   });
    // }
    Register = () => {
        Actions.RegisterType()
    }
    submitt = () => {
        // alert("Babi")
        fetch(link, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
      
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "CourtNumber": this.props.spotChoosen
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    data: res.RetVal
                })
            
            })
    }
    back() {
        Actions.Tab2()
    }
    componentDidMount(){
        this.submitt();
    }
    render() {
        return (
            <View style={styles.container1}>
                {/* <Text>KONTOOOOOOOOOOOOOl</Text> */}
                {this.state.data.map((item, index) => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: ScreenHeight * 1 / 100,

                                borderWidth: 1,
                                width: ScreenWidth * 96 / 100,
                                alignSelf: 'center',
                                borderRadius: 10
                            }}>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    marginTop: ScreenHeight * 1 / 100,
                                    marginBottom: ScreenHeight * 1 / 100
                                }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Booking Id</Text>
                                    <Text style={styles.txt2}>:</Text>
                            <Text style={styles.txt3}>{item.bookId}</Text>
                                </View>
                                {/* <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Tanggal Pembayaran</Text>
                                    <Text style={styles.txt2}>:</Text>
                                    <Text style={styles.txt3}>07/10/2020</Text>
                                </View> */}
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Tanggal Sewa</Text>
                                    <Text style={styles.txt2}>:</Text>
                            <Text style={styles.txt3}>{item.bookDate}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Customer Name</Text>
                                    <Text style={styles.txt2}>:</Text>
                            <Text style={styles.txt3}>{item.bookingName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Start Hour</Text>
                                    <Text style={styles.txt2}>:</Text>
                            <Text style={styles.txt3}>{item.startHour}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Total Jam Sewa</Text>
                                    <Text style={styles.txt2}>:</Text>
                            <Text style={styles.txt3}>{item.totalBookHour}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt1}>Total Pembayaran</Text>
                                    <Text style={styles.txt2}>:</Text>
                                    <NumberFormat
                                            value={item.totalPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.txt3}>{value}</Text>}
                                        />
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container1: {
        height: ScreenHeight,
        backgroundColor: 'white'
    },
    kotak1: {
        height: ScreenHeight * 17 / 100,
        width: ScreenWidth,
        backgroundColor: '#116979',
        borderBottomWidth: 2,
        borderColor: '#116979'

    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: ScreenHeight * 1 / 100,
        width: ScreenWidth * 90 / 100,
        alignSelf: 'center',
        elevation: 2,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 0.1

    },
    gambar1: {
        width: ScreenWidth * 12.5 / 100,
        height: ScreenHeight * 7 / 100,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 0.5 / 100

    },
    iconbox: {
        width: ScreenWidth * 18.5 / 100,
        height: ScreenHeight * 10 / 100,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 126, 1)',
        borderRadius: 60,
        alignItems: 'center',
        marginLeft: ScreenWidth * 5.3 / 100,
        top: ScreenHeight * 10 / 100,
        borderWidth: 1,
        borderColor: 'yellow',
        elevation: 5

    },
    txt1: {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenHeight * 0 / 100,
        color: 'black',
        width: ScreenWidth * 28 / 100,
        backgroundColor: 'transparent'
    },
    txt2: {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: ScreenWidth * 1 / 100,
        marginRight: ScreenWidth * 1 / 100,
        color: 'black'
    },
    txt3: {
        fontWeight: 'bold',
        fontSize: 12,

        color: 'black',
        width: ScreenWidth * 60 / 100,
        backgroundColor: 'transparent'
    },
    judul: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: ScreenWidth * 5 / 100,
        marginTop: ScreenHeight * 0 / 100,
        color: 'black'
    },
    btnLogin: {

        height: 40,
        width: 300,
        backgroundColor: '#F8C300',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        left: ScreenWidth * 5 / 100,
        borderRadius: 6,
    },
    container: {
        flex: 1
    },
    topkonten: {
        backgroundColor: 'white',
        height: ScreenHeight * 14 / 100,
        width: ScreenWidth * 100 / 100,

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
        borderWidth: 0,
        marginBottom: 10,
    },
    submitButtonText: {
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        companyId: state.companyId,
        sportid: state.sportid,
        spotChoosen: state.spotChoosen
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPendapatan)
