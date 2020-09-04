import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableHighlight, TouchableOpacity, ScrollView, StyleSheet, Picker, AppRegistry } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { setEndHourChoosen, setStartHourChoosen, setBookDateChoosen, setBookId } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, Button, Right } from 'native-base';
import DatePicker from 'react-native-datepicker'
import TimeSelection from '../components/TimeSelection';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link_loadTime = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindHoursBooking'
const link_CreateDate = 'https://fitaccessproject.herokuapp.com/api/FitAccess/SaveHoursBooking'
const link_saveBook = 'https://fitaccessproject.herokuapp.com/api/FitAccess/UpdateHoursBooking'

var NumberFormat = require('react-number-format');

class TimeSelectionAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companylogo: [],
            companyname: [],
            companydescription: [],
            companyaddress: [],
            ruangganti: [],
            StartLoadTime: [],
            sauna: [],
            shower: [],
            lapangan: [],
            selectedSpot: 'Choose Spot',
            ac: [],
            cafe: [],
            mobil: [],
            motor: [],
            wifi: [],
            DataLapangan: [],
            toggle: true,
            company: [],
            Time: [],
            Selasa: [],
            Rabu: [],
            data1: [],
            Kamis: [],
            Jumat: [],
            Sabtu: [],
            Minggu: [],
            endHour: [],
            startDate: '',
            endDate: '',
            startIndex: '',
            isStarted: false,
            isVisible: false,
            selectedHour: [],
            date: '',
            BookId: '',
            buttonColor: '#979797'
        }
        this.ServiceLoadTime = this.ServiceLoadTime.bind(this);

    }
    changeColor() {
        this.setState({ black: !this.state.black })
    }
    gotoBooking = () => {
        // alert(this.state.endDate);
        fetch(link_saveBook, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "BookingName": this.props.CompanyName,
                "CourtNumber": this.props.spotChoosen,
                "BookDate": this.state.date,
                "StartHour": this.state.startDate,
                "EndHour": this.state.endDate,
            })
        })
            .then(response => response.json())
            .then(res => {
 
                if (res.Message == "Sukses") {

                   alert("Success")
                    Actions.TabssAdmin()
                } else {
                   alert("Time Must Be Choosen")
                }

            })

            .catch((error) => {
                console.error(error);
            });
    }
    bindSelectHour = (ind) => {
        const { StartLoadTime } = this.state;
        // const key = this.state.isStarted ? "endDate" : "startDate"

        if (!this.state.isStarted) {
            if (ind == this.state.startIndex) {
                this.setState({
                    startDate: "",
                    startIndex: "",
                    isStarted: false
                })
            } else {
                this.setState({
                    startDate: this.state.StartLoadTime[ind].hours,
                    startIndex: ind,
                    isStarted: true
                })

            }
        } else {
            this.setState({
                endDate: this.state.StartLoadTime[ind].hours,
                isStarted: true
            })

        }

        let arr = StartLoadTime.map((item, index) => {
            if (ind == index) {
                item.isSelected = !item.isSelected;
            }
            return { ...item } //spreading 
        })
        this.setState({
            StartLoadTime: arr
        })
    }
    componentDidMount() {
        let arr = this.state.StartLoadTime.map((item, index) => {
            item.isSelected = false
            return { ...item };
        })
        this.setState({ StartLoadTime: arr });
    }

    isTimeLoad() {
        if (this.state.isVisible == true) {
            return (
                <View style={styles.bcc1}>
                    <View style={{ width: ScreenWidth * 96 / 100, alignSelf: 'center', marginBottom: ScreenHeight * 1 / 100, flexDirection: 'row' }}>
                        <View style={{
                            width: ScreenWidth * 5 / 100,
                            height: ScreenHeight * 2.5 / 100,
                            backgroundColor: '#246171',
                            borderWidth: 0.5
                        }}>

                        </View>
                        <Text style={{ marginLeft: ScreenWidth * 1 / 100 }}>Tidak Tersedia</Text>
                        <View style={{
                            width: ScreenWidth * 5 / 100,
                            height: ScreenHeight * 2.5 / 100,
                            backgroundColor: '#0064c2',
                            borderWidth: 0.5, marginLeft: ScreenWidth * 2 / 100
                        }}>

                        </View>
                        <Text style={{ marginLeft: ScreenWidth * 1 / 100 }}>Tersedia</Text>
                        <View style={{
                            width: ScreenWidth * 5 / 100,
                            height: ScreenHeight * 2.5 / 100,
                            backgroundColor: '#FF7314',
                            borderWidth: 0.5, marginLeft: ScreenWidth * 2 / 100
                        }}>

                        </View>
                        <Text style={{ marginLeft: ScreenWidth * 1 / 100 }}>Telah di Pilih</Text>
                    </View>

                    <View style={styles.dc1}>
                        <Text style={{ fontSize: 18, textAlign: "center", color: 'white', fontWeight: '400' }}>Choose Time</Text>
                    </View>
                    <View style={{ width: ScreenWidth * 100 / 100, height: ScreenHeight * 50 / 100, flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>

                        {this.state.StartLoadTime.map((item, index) => {
                            if (item.status == "Not Available") {
                                return (
                                    <View>
                                        <TouchableOpacity disabled={true}
                                            style={styles.buttonDisable} >
                                            <Text style={{ top: ScreenHeight * 1.7 / 100, fontSize: 16, color: 'white' }}>{item.hours}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            else {
                                const { toggle } = this.state;
                                const buttonbg = item.isSelected ? "#fb7813" : "#0064c2";
                                const txtbg = toggle ? "white" : "white";
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        // id={item.hoursid}
                                        onPress={() => this.bindSelectHour(index)}
                                        style={{
                                            height: ScreenHeight * 6.5 / 100,
                                            width: ScreenWidth * 17.56 / 100,
                                            marginLeft: ScreenWidth * 2 / 100,
                                            marginTop: ScreenWidth * 3 / 100,
                                            borderRadius: 15,
                                            alignItems: 'center',
                                            backgroundColor: buttonbg

                                        }} >
                                        <Text style={{ top: ScreenHeight * 1.7 / 100, fontSize: 16, color: txtbg }}>{item.hours}</Text>
                                    </TouchableOpacity >
                                )
                            }
                        })}
                    </View>
                    <TouchableOpacity onPress={this.gotoBooking} style={{ backgroundColor: '#0064c2', borderRadius: 30, width: ScreenWidth * 35 / 100, height: ScreenHeight * 6 / 100, alignSelf: 'center', top: ScreenHeight * 8 / 100 }}>
                        <View style={{ backgroundColor: '#0e9aa7 ', borderRadius: 30, width: ScreenWidth * 50 / 100, height: ScreenHeight * 7 / 100, alignSelf: 'center', top: ScreenHeight * 0 / 100 }}>
                            <Text style={{ textAlign: 'center', top: ScreenHeight * 1.5 / 100, fontSizeL: 14, color: 'white' }}>
                                Turn Off
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return (
                <Text></Text>
            )
        }
    }
    ServiceCreateDate = () => {
        // this.setState({
        //     isVisible: true
        // })
        fetch(link_CreateDate, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "CompanyId": "1001",
                // "CourtNumber": "1",
                "CompanyId": this.props.companyId,
                "CourtNumber": this.props.spotChoosen,
                "BookDate": this.state.date,

            })
        })
            .then(response => response.json())
            .then(res => {
                if (res.Message == 'Sukses') {
                    this.ServiceLoadTime();
                    // alert("SUKSES")
                }
                else if(res.Message == 'Data Sudah Terdaftar'){
                    this.ServiceLoadTime();
                    // alert("Sudah Terdaftar")
                    
                }
                else if(res.Message == 'Gagal Menjalankan Save Booking '){
                    alert("Data Tidak Tersedia")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    ServiceLoadTime = () => {
        this.setState({
            isVisible: true
        })
        fetch(link_loadTime, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "CourtNumber": this.props.spotChoosen,
                "BookDate": this.state.date,
                // "CompanyId": "1001",
                // "CourtNumber": "1",
                // "BookDate": "10/08/2020"
            })

        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    StartLoadTime: res.RetVal
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    TaskSewa() {
        return (
            <View style={styles.bc2}>
                <View style={styles.bc21}>
                    <View style={styles.b1}>
                        <Text style={styles.txt133}>Nama Lapangan:</Text>
                        {/* <Text style={styles.txt133}>{this.props.spotChoosen}</Text>
                        <Text style={styles.txt133}>{this.props.priceChoosen}</Text>
                        <Text style={styles.txt133}>{this.props.companyId}</Text>
                        <Text style={styles.txt133}>{this.props.CompanyName}</Text> */}

                    </View>
                    <View style={styles.b1}>
                        {/* <Text style={styles.txt133}>{this.state.BookId}</Text> */}
                        <Text style={styles.txt133}>{this.props.namaLapangan}</Text>
                    </View>

                </View>
                <View style={styles.bc21}>
                    <View style={styles.b1}>
                        <Text style={styles.txt133}>Date: </Text>
                    </View>
                    {/* <View style={{ borderBottomWidth: 1, width: ScreenWidth * 30 / 100, height: ScreenHeight * 5 / 100 }}> */}
                    <DatePicker
                        style={{ width: ScreenWidth * 40 / 100, headers: ScreenHeight * 10 / 100 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate="10/08/2020"
                        maxDate="10/06/2022"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            // dateIcon: {
                            //     position: 'absolute',
                            //     left: 0,
                            //     top: 4,
                            //     marginLeft: 0
                            // },
                            // dateInput: {
                            //     // marginLeft: 36
                            // }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => this.ServiceCreateDate(
                            this.setState({
                                date: date
                            })
                        )} />
                    {/* 
                    </View> */}

                </View>
                {/* <TouchableOpacity onPress={this.ServiceLoadTime} style={{ backgroundColor: '#0064c2', borderRadius: 20, width: ScreenWidth * 35 / 100, height: ScreenHeight * 6 / 100, alignSelf: 'center', top: ScreenHeight * 5 / 100, marginBottom: ScreenHeight * 2 / 100 }}>
                    <View style={{ backgroundColor: '#FF7314', borderRadius: 20, width: ScreenWidth * 35 / 100, height: ScreenHeight * 6 / 100, alignSelf: 'center', top: ScreenHeight * 0 / 100 }}>
                        <Text style={{ textAlign: 'center', top: ScreenHeight * 1.5 / 100, fontSizeL: 14, color: 'white' }}>
                            Cari Jam
                        </Text>
                    </View>
                </TouchableOpacity> */}
                {this.isTimeLoad()}
            </View>
        )
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'black',
                width: ScreenWidth,
                height: ScreenHeight,
            }}>
                {/* <Header hasTabs style={{ backgroundColor: '#0064c2' }} Title="asd">
                    <Body style={{ marginLeft: 20 }}>
                        <Title style={{ color: 'white' }}>FitAccess Time Selection</Title>
                    </Body>
                </Header> */}
                <ScrollView>
                    {this.TaskSewa()}
                </ScrollView>

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
        textAlign: 'center',
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 1 / 100

    },
    textdata2: {
        color: 'black',
        fontSize: 14,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 1 / 100

    },
    textdata1: {
        color: 'black',
        fontSize: 14,
        marginTop: ScreenHeight * 1 / 100,
        textAlign: 'right',
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
        elevation: 5
    },
    bc2: {
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: 'white'
    },
    bc21: {
        top: ScreenHeight * 3 / 100,
        flexDirection: 'row',
        width: ScreenWidth * 96 / 100,
        marginLeft: ScreenWidth * 4 / 100
    },
    bc22: {
        top: ScreenHeight * 6 / 100,
        flexDirection: 'row',

    },
    barjudul: {
        fontSize: 16,
        textAlign: "center",
        color: 'white',
        fontWeight: '400',
        marginTop: ScreenHeight * 0.5 / 100
    },
    buttonDisable: {
        height: ScreenHeight * 6.5 / 100,
        width: ScreenWidth * 17.56 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenWidth * 3 / 100,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: '#246171'
    },
    bc23: {
        top: ScreenHeight * 8 / 100,
        flexDirection: 'row',

    },
    gambarlp: {
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 40 / 100,
    },
    iconst: {
        backgroundColor: '#FF7314',
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
    picker1: {
        width: ScreenWidth * 30 / 100,
        borderBottomWidth: 1,
        alignContent: 'flex-end'

    },
    isidc: {
        marginTop: ScreenHeight * 2 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        marginBottom: ScreenHeight * 2 / 100,
    },
    isiop: {
        marginTop: ScreenHeight * 1 / 100,
        width: ScreenWidth * 70 / 100,
        marginBottom: ScreenHeight * 1 / 100,
        flexDirection: 'column',
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        alignSelf: 'center'
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
        elevation: 3,
        alignContent: 'center',
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
        width: ScreenWidth * 55 / 100,
        flexDirection: 'column'
    },
    buttontime: {
        height: ScreenHeight * 6.5 / 100,
        width: ScreenWidth * 17.56 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenWidth * 3 / 100,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    price: {
        backgroundColor: '#fb7813',
        height: ScreenHeight * 5 / 100,
        width: ScreenWidth * 30 / 100,
        borderRadius: 7,
        alignSelf: 'flex-end',
        marginTop: ScreenHeight * -5 / 100,
        flexDirection: 'row'
    },
    pricetext: {
        fontSize: 14,
        // textAlign: 'right',
        fontWeight: 'bold',
        color: 'white',
        marginTop: ScreenHeight * 1 / 100

    }



})
function mapStateToProps(state) {
    return {
        companyidchoosen: state.companyidchoosen,
        priceChoosen: state.priceChoosen,
        spotChoosen: state.spotChoosen,
        namaLapangan: state.namaLapangan,
        companyId: state.companyId,
        CompanyName: state.CompanyName,
        emailCust: state.emailCust
    }
}
function mapDispatchToProps(dispatch) {
    return {

        setBookDateChoosen: (bookDate) => {
            dispatch(setBookDateChoosen(bookDate))
        },
        setStartHourChoosen: (startHour) => {
            dispatch(setStartHourChoosen(startHour))
        },
        setEndHourChoosen: (endHour) => {
            dispatch(setEndHourChoosen(endHour))
        },
        setBookId: (BookId) => {
            dispatch(setBookId(BookId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSelectionAdm)