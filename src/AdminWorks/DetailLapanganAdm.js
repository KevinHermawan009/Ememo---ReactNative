import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableHighlight, TouchableOpacity, ScrollView, StyleSheet, Picker, AppRegistry } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { setSpotChoosen, setPriceChoosen, setNamaLapangan } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button, Right } from 'native-base';

var NumberFormat = require('react-number-format');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyField'
const link_fac = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindFacility'
const link_lapangan = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyAddField'
const link_time = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindOperationalTime'

class DetailLapanganAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companylogo: '',
            companyname: '',
            companydescription: '',
            companyaddress: '',
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
            companyLogo: '',
            isStarted: false,
            isVisible: false,
            selectedHour: [],
            chosenDate: new Date(),
            buttonColor: '#979797'
        }



    }
    bindDataCompany = () => {
        fetch(link1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    companyname: res.CompanyName,
                    companydescription: res.CompanyDescription,
                    companyaddress: res.CompanyAddressDetail,
                    companyLogo: res.CompanyLogo

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
                "CompanyId": this.props.companyId
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
                "CompanyId": this.props.companyId,
                "SportType": this.props.sportid

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
                "CompanyId": this.props.companyId
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
    gotoTimeSelection = (index) => {
        this.props.setPriceChoosen(this.state.DataLapangan[index].price),
            this.props.setSpotChoosen(this.state.DataLapangan[index].idField),
            this.props.setNamaLapangan(this.state.DataLapangan[index].namaLapangan)
        Actions.TimeSelectionAdm()
    }

    componentDidMount() {

        this.bindDataCompany();
        this.bindDataFac();
        this.bindLapanganData();
        this.bindOperationalTime();
    }
    taskToDoShow() {
        return (
            <View style={{ width: ScreenWidth, flex: 1, marginBottom: ScreenHeight * 0 / 100, backgroundColor: 'white' }}>
                <ScrollView >


                    <Image
                        style={styles.gambarlp}
                        source={{ uri: this.state.companyLogo }}
                        resizeMode="stretch"
                    />

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
                            <Text style={styles.barjudul}>Detail Location</Text>
                        </View>
                        <View style={styles.isidc}>
                            <Text style={styles.textdata}>{this.state.companyaddress}</Text>
                        </View>
                    </View>

                    <View style={styles.dc1}>
                        <Text style={styles.barjudul}>Operational Time</Text>
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
                    <View style={{ flexDirection: 'row', width: ScreenWidth * 100 / 100, height: ScreenHeight * 15 / 100, backgroundColor: 'transparent', marginTop: ScreenHeight * 1.5 / 100 }}>
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
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => this.gotoTimeSelection(index)}
                                    style={styles.price}>
                                    <View style={{ width: ScreenWidth * 10 / 100, borderRightWidth: 2, borderRightColor: 'white' }}>
                                        <Icon name="wrench" style={{ color: 'white', marginLeft: ScreenWidth * 1 / 100, marginTop: ScreenWidth * 1 / 100 }} size={25}
                                        />
                                    </View>




                                        <NumberFormat
                                            value={item.price}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.pricetext}>{value}</Text>}
                                        />

                           
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
                backgroundColor: 'black',
                width: ScreenWidth,

            }}>

                <ScrollView>
                    {this.taskToDoShow()}
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
        fontSize: 15,
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
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
        marginTop: ScreenHeight * 1.5 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        marginBottom: ScreenHeight * 2 / 100,
    },
    isiop: {
        marginTop: ScreenHeight * 1.5 / 100,
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
        width: ScreenWidth * 35 / 100,
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
        textAlign:'center',
        marginTop: ScreenHeight * 1 / 100,
        marginLeft:ScreenWidth*3/100

    }



})
function mapStateToProps(state) {
    return {
        companyId: state.companyId,
        sportid: state.sportid
    }
}
function mapDispatchToProps(dispatch) {
    return {

        setPriceChoosen: (priceChoosen) => {
            dispatch(setPriceChoosen(priceChoosen))
        },
        setSpotChoosen: (spotChoosen) => {
            dispatch(setSpotChoosen(spotChoosen))
        },
        setNamaLapangan: (namaLapangan) => {
            dispatch(setNamaLapangan(namaLapangan))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailLapanganAdm)