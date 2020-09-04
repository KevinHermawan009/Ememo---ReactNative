import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Textarea, Form, Icon, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'

const createTwoButtonAlert = () =>
    Alert.alert(
        "Berhasil Menyimpan Data",
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


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/SaveOperationalTime'

const options = {
    title: 'Choose to change image',
    takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
    chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
    quality: 0.5,
    maxHeight: 100,
    maxWidth: 100,
}

var Field = [];
Field.push

class OperationalTime extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected2: undefined,
            hours: 12,
            foto: '',
            minutes: 0,
            seconds: 0,
            meridian: "AM",
            selected: undefined,
            totalSpot: '',
            isActive: false,
            MondayStatus: 'Not Registered',
            TuesdayStatus: 'Not Registered',
            WednesdayStatus: 'Not Registered',
            ThursdayStatus: 'Not Registered',
            FridayStatus: 'Not Registered',
            SaturdayStatus: 'Not Registered',
            SundayStatus: 'Not Registered',



            MondayStart: '',
            MondayEnd: '',

            TuesdayStart: '',
            TuesdayEnd: '',

            WednesdayStart: '',
            WednesdayEnd: '',

            ThursdayStart: '',
            ThursdayEnd: '',

            FridayStart: '',
            FridayEnd: '',

            SaturdayStart: '',
            SaturdayEnd: '',

            SundayStart: '',
            SundayEnd: ''
        }
    }
    setTime = (h, m, mn) => {
        this.setState({ hours: h, minutes: m, meridian: mn });
    }
    onChange = time => this.setState({ time })
    onCancel() {
        this.TimePicker.close();
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }
    gotoRegisterData = () => {
        Actions.RegisterData()
    }
    member = () => {
        Actions.MemberSportList()
    }
    // onValueChange2(value: '123') {
    //   this.set7State({
    //     selected2: value
    //   });
    // }
    match = () => {
        Actions.Match()
    }

    SaveMonday = () => {

        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "1",
                "Opened": this.state.MondayStart,
                "Closed": this.state.MondayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Monday Time Successfully")
                    this.setState({
                        MondayStatus: 'Is Registered',

                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
                else if (res.Retval1 == 'Data Telah tedaftar') {
                    alert("Monday Time Successfully")
                    this.setState({
                        MondayStatus: 'Is Registered',

                    })
                }
            })
    }
    SaveTuesday = () => {

        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "2",
                "Opened": this.state.TuesdayStart,
                "Closed": this.state.TuesdayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Tuesday Time Successfully")
                    this.setState({
                        TuesdayStatus: 'Is Registered'
                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
            })
    }
    SaveWednesday = () => {

        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "3",
                "Opened": this.state.WednesdayStart,
                "Closed": this.state.WednesdayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Wednesday Time Successfully")
                    this.setState({
                        WednesdayStatus: 'Is Registered',
                        isActive: true
                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
            })
    }
    SaveThursday = () => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "4",
                "Opened": this.state.ThursdayStart,
                "Closed": this.state.ThursdayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Monday Time Successfully")
                    this.setState({
                        ThursdayStatus: 'Is Registered'
                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
            })
    }
    SaveFriday = () => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "5",
                "Opened": this.state.FridayStart,
                "Closed": this.state.FridayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Friday Time Successfully")
                    this.setState({
                        FridayStatus: 'Is Registered'
                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
            })
    }
    SaveSaturday = () => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "6",
                "Opened": this.state.SaturdayStart,
                "Closed": this.state.SaturdayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Saturday Time Successfully")
                    this.setState({
                        SaturdayStatus: 'Is Registered'
                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
            })
    }
    SaveSunday = () => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "DaysId": "7",
                "Opened": this.state.SundayStart,
                "Closed": this.state.SundayEnd
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Retval1 == "Sukses Save") {
                    alert("Sunday Time Successfully")
                    this.setState({
                        SundayStatus: 'Is Registered'
                    })

                }
                else if (res.Retval1 == 'Time Opened And Closed Cannot Be Empty') {
                    alert("Time Opened And Closed Cannot Be Empty")
                }
            })
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container1}>
        {/* <Text>{this.props.ruangGanti}</Text>
        <Text>{this.props.shower}</Text>
        <Text>{this.props.ac}</Text>
        <Text>{this.props.cafe}</Text>
        <Text>{this.props.wifi}</Text>
        <Text>{this.props.car}</Text>
        <Text>{this.props.motor}</Text> */}
                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Monday-{this.state.MondayStatus} </Text>
                        </View>
                        

                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Monday" value="1" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.MondayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                MondayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.MondayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                MondayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity disabled={this.state.isActive} onPress={() => this.SaveMonday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Monday</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Tuesday-{this.state.TuesdayStatus}</Text>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Tuesday" value="1" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.TuesdayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                TuesdayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.TuesdayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                TuesdayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.SaveTuesday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Tuesday</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Wednesday-{this.state.WednesdayStatus}</Text>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Wednesday" value="3" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.WednesdayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                WednesdayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.WednesdayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                WednesdayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.SaveWednesday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Wednesday</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Thursday-{this.state.ThursdayStatus}</Text>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Thursday" value="4" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.ThursdayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                ThursdayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.ThursdayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                ThursdayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.SaveThursday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Thursday</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Friday-{this.state.FridayStatus}</Text>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Friday" value="5" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.FridayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                FridayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.FridayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                FridayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.SaveFriday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Friday</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Saturday-{this.state.SaturdayStatus}</Text>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Friday" value="5" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.SaturdayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                SaturdayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.SaturdayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                SaturdayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.SaveSaturday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Saturday</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Operational Time Sunday-{this.state.SundayStatus}</Text>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Day</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: ScreenWidth * 0 / 100 }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        enabled={false}

                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="Friday" value="5" />

                                    </Picker>

                                </Form>
                            </View>
                        </View>
                        <View style={styles.operationtimes}>
                            <View>
                                <Text style={styles.quest1}>Operational Time</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Form style={styles.Time}>
                                    <Picker
                                        mode="dropdown"
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.SaturdayStart}
                                        onValueChange={(value) =>
                                            this.setState({
                                                SundayStart: value
                                            })}
                                    >
                                        <Picker.Item label='Opening Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />

                                    </Picker>
                                    <Text style={styles.quest123}>Until</Text>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: ScreenHeight * 35 / 100, marginLeft: ScreenWidth * 1 / 100 }}
                                        selectedValue={this.state.SundayEnd}
                                        onValueChange={(value) =>
                                            this.setState({
                                                SundayEnd: value
                                            })}
                                    >
                                        <Picker.Item label='Closing Time' value='0' />

                                        <Picker.Item label="01:00" value="01:00" />
                                        <Picker.Item label="02:00" value="02:00" />
                                        <Picker.Item label="03:00" value="03:00" />
                                        <Picker.Item label="04:00" value="04:00" />
                                        <Picker.Item label="05:00" value="05:00" />
                                        <Picker.Item label="06:00" value="06:00" />
                                        <Picker.Item label="07:00" value="07:00" />
                                        <Picker.Item label="08:00" value="08:00" />
                                        <Picker.Item label="09:00" value="09:00" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="17:00" value="17:00" />
                                        <Picker.Item label="18:00" value="18:00" />
                                        <Picker.Item label="19:00" value="19:00" />
                                        <Picker.Item label="20:00" value="20:00" />
                                        <Picker.Item label="21:00" value="21:00" />
                                        <Picker.Item label="22:00" value="22:00" />
                                        <Picker.Item label="23:00" value="23:00" />
                                        <Picker.Item label="00:00" value="00:00" />
                                    </Picker>
                                </Form>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.SaveSunday()} style={styles.next}>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 12 }}>Save Sunday</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <TouchableOpacity onPress={() => this.gotoRegisterData()} style={{
                    top: ScreenHeight * 0 / 100,
                    backgroundColor: '#0064c2',
                    height: ScreenHeight * 7 / 100,
                    width: ScreenWidth * 60 / 100,
                    alignSelf: 'center',
                    borderRadius: 30,
                margin: 7}
                }>
                            <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100, fontSize: 14, fontWeight: "bold" }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    InputGambar: {
        width: ScreenWidth,
        height: ScreenHeight * 60 / 100,
        backgroundColor: 'white',
        marginTop: ScreenHeight * 1 / 100
    },
    container1: {

        width: ScreenWidth,
        backgroundColor: '#D8D8D8'
    },
    next: {
        alignSelf: 'center',
        marginTop: ScreenHeight * 2 / 100,
        backgroundColor: 'dodgerblue',
        width: ScreenWidth * 35 / 100,
        height: ScreenHeight * 7 / 100,
        borderRadius: 30,
        elevation: 10,
        marginBottom: ScreenHeight * 5 / 200

    },
    kotak1: {
        height: ScreenHeight * 17 / 100,
        width: ScreenWidth,
        backgroundColor: '#ffff00',
        borderBottomWidth: 2,
        borderColor: 'dodgerblue',
        flexDirection: 'column'

    },

    OT1: {
        flexDirection: 'column',
        backgroundColor: 'white',

        width: ScreenWidth,
        marginTop: ScreenHeight * 1 / 100,
        borderWidth: 0,
    },
    txt1: {
        width: ScreenWidth * 67 / 100
    },
    OT2: {
        marginTop: ScreenHeight * 1 / 100,
        flexDirection: 'row'
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
    quest1: {
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 1 / 100,
        color: 'black', width: ScreenWidth * 30 / 100
    },
    judul: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 1 / 100,
        color: 'black',
        borderBottomWidth: 1
    },
    quest12: {
        fontWeight: 'bold',
        fontSize: 14,

        marginTop: ScreenHeight * 2.5 / 100,
        color: 'black'
    },
    quest123: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: ScreenHeight * 2.5 / 100,
        color: 'black',
        textAlign: 'center'
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
    },
    text: {
        fontSize: 20,
        marginTop: 10
    },
    button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 50
    },
    Time: {
        marginTop: ScreenHeight * -1.5 / 100,
        flexDirection: 'column',

    },
    Time1: {
        marginTop: ScreenHeight * -1.5 / 100,
        flexDirection: 'column',
        marginLeft: ScreenWidth * 2 / 100

    },
    Time2: {
        marginTop: ScreenHeight * -1.5 / 100,
        flexDirection: 'column',
        marginLeft: ScreenWidth * 7 / 100

    },
    borderRadius: {
        borderWidth: 1
    },
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        top: ScreenHeight * 5 / 100,
        backgroundColor: 'transparent',

    },
    operationtimes: {
        flexDirection: 'row',
        borderWidth: 0
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
    }
});

function mapStateToProps(state) {
    return {
        companyId: state.companyId,
        sportid: state.sportid,
        ruangGanti: state.ruangGanti,
        shower: state.shower,
        ac: state.ac,
        cafe: state.cafe,
        wifi: state.wifi,
        car: state.car,
        motor: state.motor
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationalTime)
