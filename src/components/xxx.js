import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet, Picker, AppRegistry } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button, Right } from 'native-base';


const options = {
    title: 'Choose to change image',
    takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
    chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
    quality: 0.5,
    maxHeight: 100,
    maxWidth: 100,
}
const sewa = () =>
    Alert.alert(
        "Jam Harus Di Pilih",
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
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyField'
const link_fac = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindFacility'
const link_lapangan = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyAddField'
const link_time = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindOperationalTime'
const link_loadTime = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindHoursBooking'
class DetailLapangan extends Component {
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
            Kamis: [],
            Jumat: [],
            Sabtu: [],
            Minggu: [],
            isVisible: false,
            visible1: false,
            visible2: false,
            chosenDate: new Date()
        }
        this.ServiceLoadTime = this.ServiceLoadTime.bind(this);
        this.setDate = this.setDate.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    // setVisible(){
    //     this.setState({ isVisible == true})
    // }
    changeColor() {
        this.setState({ black: !this.state.black })
    }
    bindDataCompany = () => {
        fetch(link1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyidchoosen
            })

        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    companyname: res.Retval[0].companyName,
                    companydescription: res.Retval[0].companyDescription,
                    companyaddress: res.Retval[0].companyAddressDetail

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    bindDataFac = () => {
        fetch(link_fac, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyidchoosen
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    ruangganti: res.RetVal[0].ruangGanti,
                    cafe: res.RetVal[0].cafetaria,
                    wifi: res.RetVal[0].wifi,
                    ac: res.RetVal[0].pendinginRuangan,
                    mobil: res.RetVal[0].parkiranMobil,
                    motor: res.RetVal[0].parkiranMotor,
                    shower: res.RetVal[0].shower,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    ShowerLoad() {
        if (this.state.shower == "Tersedia") {
            return (
                <View style={styles.iconst}>
                    <Icon name="shower" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                    <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 14, color: 'black' }}> Shower</Text>
                </View>
            )
        }
        else {
            return (
                <View>

                </View>
            )
        }
    }
    WifiLoad() {
        if (this.state.wifi == "Tersedia") {
            return (
                <View style={styles.iconst}>
                    <Icon name="wifi" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                    <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 12, color: 'black' }}> Wifi</Text>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
    Rganti() {
        if (this.state.ruangganti == "Tersedia") {
            return (
                <View style={styles.iconst}>
                    <Icon name="venus-mars" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                    <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 14, color: 'black' }}> Ruang Ganti</Text>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
    mobilLoad() {
        if (this.state.mobil == "Tersedia") {
            return (
                <View style={styles.iconst}>
                    <Icon name="car" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                    <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 12, color: 'black' }}>Pakiran Mobil</Text>
                </View>
            )
        } else {
            <View></View>
        }
    }
    motorLoad() {
        if (this.state.motor == "Tersedia") {
            return (
                <View style={styles.iconst}>
                    <Icon name="motorcycle" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                    <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 12, color: 'black', width: ScreenWidth * 20 / 100, left: ScreenWidth * -2.5 / 100 }}> Pakiran Motor</Text>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
    AcLoad() {
        if (this.state.ac == "Tersedia") {
            return (
                <View style={styles.iconst}>
                    <Icon name="snowflake-o" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                    <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 14, color: 'black' }}> AC</Text>
                </View>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
    cafeLoad() {
        if (this.state.cafe == "Tersedia") {
            <View style={styles.iconst}>
                <Icon name="cutlery" style={{ color: 'white', alignSelf: 'center', top: ScreenHeight * 2 / 100 }} size={30} />
                <Text style={{ top: ScreenHeight * 3 / 100, textAlign: 'center', fontSize: 12, color: 'black' }}> Cafeteria </Text>
            </View>
        }
        else {
            return (
                <View></View>
            )
        }
    }
    bindLapanganData = () => {
        fetch(link_lapangan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "CompanyId": this.props.companyidchoosen
                "CompanyId": "71"
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    DataLapangan: res.Retval,
                    // lapangan: res.Retval[0].gambar

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    bindOperationalTime = () => {
        fetch(link_time, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "CompanyId": this.props.companyidchoosen
                "CompanyId": "3"
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    Time: res.Retval
                    // lapangan: res.Retval[0].gambar

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.bindDataCompany();
        this.bindDataFac();
        this.bindLapanganData();
        this.bindOperationalTime();
    }
    taskToDoShow() {
        return (
            <View style={{ width: ScreenWidth, flex: 1, marginBottom: ScreenHeight * 11.7 / 100 }}>
                <ScrollView >
                    <View>

                        {/* <Image
                        style={styles.gambarlp}
                        source={{ uri: this.state.lapangan}}
                        resizeMode="stretch"
                        /> */}

                    </View>
                    <View>

                        <View style={styles.dc1}>
                            <Text style={styles.barjudul}>Description</Text>
                        </View>
                        <View style={styles.isidc}>
                            <Text style={styles.textdata}>{this.state.companydescription}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.dc1}>
                            <Text style={styles.barjudul}>Detail Lokasi</Text>
                        </View>
                        <View style={styles.isidc}>
                            <Text style={styles.textdata}>{this.state.companyaddress}</Text>
                        </View>
                    </View>

                    <View style={styles.dc1}>
                        <Text style={styles.barjudul}>Waktu Operasional</Text>
                    </View>
                    <View style={styles.isiop}>
                        {this.state.Time.map((item, index) => {
                            return (
                                <View style={{ flexDirection: 'row', width: ScreenWidth }}>
                                    <View style={{ backgroundColor: 'white', width: ScreenWidth * 30 / 100 }}>
                                        <Text style={styles.textdata2}>{item.day}</Text>
                                    </View>
                                    <View
                                        style={{ width: ScreenWidth * 30 / 100, backgroundColor: 'white', marginLeft: ScreenWidth * 9.5 / 100 }}>
                                        <Text style={styles.textdata1}>{item.opened} - {item.closed}</Text>
                                    </View>

                                </View>

                            )
                        })}
                    </View>
                    <View style={styles.dc1}>
                        <Text style={styles.barjudul}>Fasilitas Tersedia</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: ScreenWidth * 100 / 100, height: ScreenHeight * 15 / 100, backgroundColor: 'transparent' }}>
                        {this.ShowerLoad()}
                        {this.Rganti()}
                        {this.motorLoad()}
                        {this.AcLoad()}
                    </View>
                    <View style={{ height: ScreenHeight * 15 / 100, backgroundColor: 'transparent', flexDirection: 'row', alignSelf: 'center', width: ScreenWidth }}>
                        {this.mobilLoad()}
                        {this.WifiLoad()}
                        {this.cafeLoad()}
                    </View>
                    {this.state.DataLapangan.map((item, index) => {
                        return (
                            <View
                                key={index}>
                                <View style={styles.dc1} >
                                    <Text style={styles.barjudul}>{item.namaLapangan}</Text>
                                </View>
                                <Image
                                    style={styles.gambarlp}
                                    source={{ uri: item.gambar }}
                                    resizeMode="stretch"
                                />
                                <View style={styles.price}>
                                    <Text style={styles.pricetext}>{item.price}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
    CallTime =()=>{
        alert("KONTOL")
        const { toggle } = this.state;
        const buttonbg = toggle ? "#fb7813" : "#0064c2";
        const txtbg = toggle ? "white" : "white";
        return (
            <View style={styles.bcc1}>
                <View style={styles.dc1}>
                    <Text style={{ fontSize: 18, textAlign: "center", color: 'white', fontWeight: '400' }}>Choose Time</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this._onPress07()}
                        style={[styles.buttontime, { backgroundColor: "#18b0b0" }]} >
                        <Text style={{ top: ScreenHeight * 1.7 / 100, fontSize: 16, color: txtbg }}>00:00</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    TimeLoad (){
     
    }
    isTimeLoad(){
        if(this.state.isVisible == true){
            const { toggle } = this.state;
            const buttonbg = toggle ? "#fb7813" : "#0064c2";
            const txtbg = toggle ? "white" : "white";
            return(
                <View style={styles.bcc1}>
                <View style={styles.dc1}>
                    <Text style={{ fontSize: 18, textAlign: "center", color: 'white', fontWeight: '400' }}>Choose Time</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this._onPress07()}
                        style={[styles.buttontime, { backgroundColor: "#18b0b0" }]} >
                        <Text style={{ top: ScreenHeight * 1.7 / 100, fontSize: 16, color: txtbg }}>00:00</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
        else{
            return(
                <Text>There is no data</Text>
            )
        }
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
                "CompanyId": "1001",
                "CourtNumber": "1",
                "BookDate": "10/08/2020"
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
    taskToDoShow1() {
        return (
            <View style={styles.bc2}>
                <View style={styles.bc21}>
                    <View style={styles.b1}>
                        <Text style={styles.txt133}>Choose Spot:</Text>
                    </View>
                    <Picker
                        style={{ width: ScreenWidth * 40 / 100, height: ScreenHeight * 3 / 100 }}
                        mode="dropdown"
                        selectedValue={this.state.selectedSpot}
                        onValueChange={(value) => (
                            this.setState({
                                selectedSpot: value,

                            }))}>
                        {this.state.DataLapangan.map((item, index) => {
                            return (
                                // <Picker.Item label="CHOOSE" value="CHOOSE" key={index} />
                                <Picker.Item label={item.namaLapangan} value={item.seqNo} key={index} />
                            )
                        })}

                    </Picker>
                </View>

                <View style={styles.bc21}>
                    <View style={styles.b1}>
                        <Text style={styles.txt133}> Date: </Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, width: ScreenWidth * 30 / 100, height: ScreenHeight * 5 / 100 }}>
                        <DatePicker
                            defaultDate={new Date(2020, 4, 4)}
                            minimumDate={new Date(2020, 7, 18)}
                            maximumDate={new Date(2021, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "black" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        {/* <Text>
                            Date: {this.state.chosenDate.toString().substr(4, 12)}
                        </Text> */}
                    </View>

                </View>
                <TouchableOpacity onPress={this.ServiceLoadTime} style={{ backgroundColor: '#0064c2', borderRadius: 30, width: ScreenWidth * 50 / 100, height: ScreenHeight * 7 / 100, alignSelf: 'center', top: ScreenHeight * 5 / 100, marginBottom: ScreenHeight * 2 / 100 }}>
                    <View style={{ backgroundColor: '#0e9aa7 ', borderRadius: 30, width: ScreenWidth * 50 / 100, height: ScreenHeight * 7 / 100, alignSelf: 'center', top: ScreenHeight * 0 / 100 }}>
                        <Text style={{ textAlign: 'center', top: ScreenHeight * 1.7 / 100, fontSizeL: 14, color: 'white' }}>
                            Cari WOY
                        </Text>
                    </View>
                </TouchableOpacity>
                {this.isTimeLoad()}

                <TouchableOpacity onPress={sewa} style={{ backgroundColor: '#0064c2', borderRadius: 30, width: ScreenWidth * 50 / 100, height: ScreenHeight * 7 / 100, alignSelf: 'center', top: ScreenHeight * 5 / 100 }}>
                    <View style={{ backgroundColor: '#0e9aa7 ', borderRadius: 30, width: ScreenWidth * 50 / 100, height: ScreenHeight * 7 / 100, alignSelf: 'center', top: ScreenHeight * 0 / 100 }}>
                        <Text style={{ textAlign: 'center', top: ScreenHeight * 1.7 / 100, fontSizeL: 14, color: 'white' }}>
                            Sewa
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _onPress07() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress08() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    } _onPress09() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress10() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress11() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress12() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress13() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress14() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }
    _onPress15() {
        const newState = !this.state.toggle;
        this.setState({ toggle: newState })
    }

    render() {
        return (
            <View style={{
                backgroundColor: 'black',
                width: ScreenWidth,
                height: ScreenHeight,
            }}>
                <Tabs>
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#FF7314' }}>
                                <Icon name="info" style={{ color: 'white' }} size={25}
                                />
                                <View style={{ marginLeft: 20 }}></View>
                                <Text style={{ color: 'white', left: ScreenWidth * 1 / 100 }}>{this.state.companyname}</Text>
                            </TabHeading>
                        }>
                        <ScrollView>{this.taskToDoShow()}</ScrollView>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#FF7314' }}>
                                <Icon name="cart-plus" style={{ color: 'white' }} size={25}
                                />
                                <View style={{ marginLeft: 20 }}></View>
                                <Text style={{ color: 'white' }}>Sewa</Text>
                            </TabHeading>
                        }>
                        <ScrollView>{this.taskToDoShow1()}</ScrollView>
                    </Tab>
                </Tabs>
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
        height: ScreenHeight
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
    bc23: {
        top: ScreenHeight * 8 / 100,
        flexDirection: 'row',

    },
    gambarlp: {
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 40 / 100,
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
        marginTop: ScreenHeight * -5 / 100
    },
    pricetext: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: ScreenHeight * 1 / 100

    }



})
function mapStateToProps(state) {
    return {
        companyidchoosen: state.companyidchoosen
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailLapangan)