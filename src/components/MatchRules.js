import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet, Picker, AppRegistry } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { setMatchCompanyIdChoosen,setMatchPaymentCode } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button, Right } from 'native-base';
var NumberFormat = require('react-number-format');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindDetailMatch'
const link_save = 'https://fitaccessproject.herokuapp.com/api/FitAccess/SaveCustomerMatch'
class MatchRules extends Component {
    constructor(props) {
        super(props);
        this.state = {

            chosenDate: new Date(),
            lblSalesHariini: '',
            lblSalesbulanini: '',
            name: '',
            jobposition: '',
            officelocation: '',
            description: '',
            email: '',
            telepon: '',
            foto: '',
            toggle: true,
            visible1: false,
            visible2: false,
            detailData: [],
            datapayment: []
        }
        this.setDate = this.setDate.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState({ black: !this.state.black })
    }
    abcde = () => {
        Actions.Booking()
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    GetDetailDataMatch = () => {
        fetch(link1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "MatchId": this.props.matchIdChoosen
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    detailData: res.retval1,

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.GetDetailDataMatch();
    }
    saveMatch = (index) => {

        fetch(link_save, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "MatchId": this.props.matchIdChoosen,
                "CompanyId": this.state.detailData[index].companyId,

                "CustomerId": this.props.customerId,
                "NamaLengkap": this.props.namaLengkap
            })
        })
            .then(response => response.json())
            .then(res => {
                this.props.setMatchPaymentCode(res.Message),
                this.props.setMatchCompanyIdChoosen(this.state.detailData[index].companyId),
                this.gotoOTP();
               
            })
            .catch((error) => {
                console.error(error);
            });
    }
      gotoOTP = () => {
        Actions.OTPMatch();
    }
    taskToDoShow() {

        return (
            <View style={{ width: ScreenWidth, flex: 1, marginBottom: ScreenHeight * 11 / 100 }}>
                <ScrollView >
                    {this.state.detailData.map((item, index) => {
                        return (
                            <View
                                key={index}
                            >
                                <View>
                                <Image   source={{ uri: 'data:image/jpeg;base64,' +item.uploadGambar }} style={styles.gambarlp}   resizeMode="stretch"/>
                                </View>
                                <View>
                                    <View style={styles.dc1}>
                                        <Text style={styles.barjudul}>Match Description </Text>
                                    </View>
                                    <View style={styles.isidc}>
                                        <Text style={styles.textdata}>
                                            {item.description}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.dc1}>
                                        <Text style={styles.barjudul}>Detail Location</Text>
                                    </View>
                                    <View style={styles.isidc}>
                                        <Text style={styles.textdata}>{item.location}</Text>
                                    </View>
                                </View>

                                <View style={styles.dc1}>
                                    <Text style={styles.barjudul}>Match Time</Text>
                                </View>
                                <View style={styles.isiop}>
                                    <View style={{ flexDirection: 'column', width: ScreenWidth * 95 / 100 }}>
                                        <Text style={styles.textdata}>{item.dateMatchStart} Until {item.dateMatchEnd}</Text>



                             

                                    </View>

                                </View>
                                <View style={styles.dc1}>
                                    <Text style={styles.barjudul}>Match Organizer Contact</Text>
                                </View>
                                <View style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: ScreenHeight * 2 / 100, marginTop: ScreenHeight * 2 / 100 }}>
                                    <View>
                                        <Text style={styles.textdata1}>{item.hostName}</Text>

                                    </View>
                                    <View >
                                        <Text style={styles.textdata1}>{item.hostContactNumber}</Text>


                                    </View>

                                    {/* <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textdata1}>Cokro@gmail.com</Text>


                        </View> */}
                                </View>

                                <View style={styles.dc1}>
                                    <Text style={styles.barjudul}>Prize</Text>

                                </View>
                                <View>
                                    <View style={{ flexDirection: 'column', height: ScreenHeight * 15 / 100, alignSelf: 'center' }}>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{width:ScreenWidth*25/100}}>
                                        <Text style={styles.textdata1}>
                                            
                                            1. Prize One:</Text>
                                            </View>
                                            <NumberFormat
                                            value={item.prize1st}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.textdata1}>{value}</Text>}
                                        />

          
                                        </View>
                                      
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{width:ScreenWidth*25/100}}>

                                       
                                        <Text style={styles.textdata1}>
                                        2. Prize Two: </Text>
                                        </View>

                                        <NumberFormat
                                            value={item.prize2nd}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.textdata1}>{value}</Text>}
                                        />
                                      
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{width:ScreenWidth*25/100}}>
                                        <Text style={styles.textdata1}>
                                            3. Prize Three:</Text>
                                            </View>
                                            <NumberFormat
                                            value={item.prize3rd}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.textdata1}>{value}</Text>}
                                        />
                                      
                                      
                                        </View>
                                        <View style={{flexDirection:'row'}}>
                                        <View style={{width:ScreenWidth*25/100}}>
                                        <Text style={styles.textdata1}>
                                            4. Other Prize:
                                        </Text>
                              
                                        </View>
                                        <Text style={styles.textdata1}>{item.anotherPrize}</Text>
                                        </View>
                                      
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => this.saveMatch(index)}
                                    style={styles.joinBtn}>
                                    <Text style={{ marginTop: ScreenHeight * 2 / 100, color: 'white',fontWeight:'bold' }}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )


    }


    render() {
        return (
            <View style={{
                backgroundColor: 'white',
                width: ScreenWidth,
                height: ScreenHeight,
            }}>
                <ScrollView>{this.taskToDoShow()}</ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bcc1: {
        height: ScreenHeight * 50 / 100,
        width: ScreenWidth,
        marginTop: ScreenHeight * 5 / 100,

    },
    txt1: {
        top: ScreenHeight * 1.7 / 100,
        fontSize: 16,
        color: 'white',

    },
    textdata: {
        color: 'black',
        fontSize: 14,
        textAlign:'center'
    },
    textdata1: {
        color: 'black',
        fontSize: 14,
        textAlign:'center'
    },
    txt133: {
        marginTop: ScreenHeight * 1 / 100,
        fontSize: 16,
        color: 'black'
    },
    txt12: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        left: ScreenWidth * 3 / 100
    },
    bt1: {
        backgroundColor: '#fb7813',
        height: ScreenHeight * 7.5 / 100,
        width: ScreenWidth * 17.56 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenWidth * 3 / 100,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 0
    },
    bc2: {
        width: ScreenWidth,
        height: ScreenHeight
    },
    bc21: {
        top: ScreenHeight * 3 / 100,
        flexDirection: 'row',
        width: ScreenWidth * 96 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    bc22: {
        top: ScreenHeight * 6 / 100,
        flexDirection: 'row',

    },
    barjudul: {
        fontSize: 14,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
        marginTop: ScreenHeight * 0.5 / 100
    },
    bc23: {
        top: ScreenHeight * 8 / 100,
        flexDirection: 'row',

    },
    gambarlp: {
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 40 / 100,
        alignSelf: 'center'
    },
    iconst: {
        backgroundColor: '#0064c2',
        width: ScreenWidth * 15.5 / 100,
        marginLeft: ScreenWidth * 7.5 / 100,
        height: ScreenHeight * 8.2 / 100,
        top: ScreenHeight * 2 / 100,
        borderRadius: 100,
        flexDirection: 'column'


    },
    bc1: {
        backgroundColor: 'white',

    },
    joinBtn: {
        height: ScreenHeight * 7 / 100,
        width: ScreenWidth * 60 / 100,
        alignSelf: 'center',
        backgroundColor: '#0064c2',
        marginBottom: ScreenHeight * 2 / 100,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 10
    },
    picker1: {
        width: ScreenWidth * 30 / 100,
        borderBottomWidth: 1,
        alignContent: 'flex-end'

    },
    txt0: {
        left: ScreenHeight * 1 / 100, fontSize: 14, color: 'black'
    },
    isidc: {
        marginTop: ScreenHeight * 1 / 100,
        width: ScreenWidth * 97 / 100,
        color: 'black',
        marginBottom: ScreenHeight * 1 / 100,
        alignSelf:'center'
    },
    isiop: {
        marginTop: ScreenHeight * 1 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        marginBottom: ScreenHeight * 1 / 100,


        flex: 1,
        flexDirection: 'row'
    },
    isilc: {
        marginTop: ScreenHeight * 2 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        height: ScreenHeight * 10 / 100,
        flex: 1,
        flexDirection: 'row'
    },
    dc1: {
        backgroundColor: '#0064c2',
        elevation: 0,
        height: ScreenHeight * 4 / 100
    },
    Layar1: {
        height: ScreenHeight * 100 / 100,
        width: ScreenWidth * 100 / 100,
        backgroundColor: 'transparent',
    },
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        top: ScreenHeight * 5 / 100,
        backgroundColor: 'transparent',
    },
    b1: {
        backgroundColor: 'white',
        width: ScreenWidth * 70 / 100,
    },
    buttontime: {
        height: ScreenHeight * 7.5 / 100,
        width: ScreenWidth * 17.56 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenWidth * 3 / 100,
        borderRadius: 15,
        alignItems: 'center',
    },
    price: {
        backgroundColor: '#fb7813',
        height: ScreenHeight * 5 / 100,
        width: ScreenWidth * 20 / 100,
        borderRadius: 7,
        alignSelf: 'flex-end',
        marginTop: ScreenHeight * 33 / 100
    },
    kotakdetail: {
        backgroundColor: 'white',
        height: ScreenHeight * 15 / 100,
        width: ScreenWidth * 96 / 100,
        flexDirection: 'row',
        marginLeft: ScreenHeight * 1.2 / 100,
        borderWidth: 1,
        borderColor: 'dodgerblue'
    },
    pricetext: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: ScreenHeight * 1 / 100

    },
    txt1: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white'
    },
    txt2: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black'
    },
    judultxt: {
        fontSize: 20,
        color: '#0064c2',
        fontWeight: 'bold',
    },



})
function mapStateToProps(state) {
    return {
        matchIdChoosen: state.matchIdChoosen,
        customerId: state.customerId,
        namaLengkap: state.namaLengkap,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setMatchCompanyIdChoosen: (matchCompanyIdChoosen) => {
            dispatch(setMatchCompanyIdChoosen(matchCompanyIdChoosen))
        },
        setMatchPaymentCode: (matchPaymentCode) => {
            dispatch(setMatchPaymentCode(matchPaymentCode))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchRules)