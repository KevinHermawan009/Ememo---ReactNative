import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Textarea, Form, Icon, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const imagePicker = require('react-native-imagepicker');
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/RegisterCompanyField'
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyAddField'
const link_length = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyAddField'

const options = {
    title: 'Choose to change image',
    takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
    chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
    quality: 1.0,
    // maxHeight: ScreenHeight*70/100,
    // maxWidth: ScreenWidth*50/100,
}

class RegisterData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected2: undefined,
            hours: 12,
            foto: '',
            data: [],
            minutes: 0,
            seconds: 0,
            meridian: "AM",
            selected: undefined,
            totalSpot: '',
            priceField: '0',
            nilaiGanti: '0',
            nilaiShower: '0',
            nilaiCar: '0',
            nilaiMotor: '0',
            nilaiCafe: '0',
            nilaiWifi: '0',
            nilaiAC: '0',
      

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
    TakePhotoHighlight = () => {
        // alert('clicked'); 
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {

                let source = response.data
                // alert(response.data) 
                this.setState({
                    foto: source,
                    captured: true
                });
            }
        });
    }
    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }

    addForm = () => {
        // console.log('1',this.functionSearchLenght())
        // console.log(this.state.data)

        this.setState({
            data: [...this.state.data, {
                SeqNo:  '0',
                NamaLapangan: '',
                Price: '',
                SportType: this.props.sportid,
                // SportType: "1",
                Note: '',
                UploadGambar: '',
                Deskripsi: ''
            }]
        })
    }

    member = () => {
        Actions.MemberSportList()
    }

    match = () => {
        Actions.Match()
    }
    RegisterField = () => {
        console.log(this.state.data)
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "RuangGanti": this.state.nilaiGanti,
                "Shower": this.state.nilaiShower,
                "Sauna": '',
                "Wifi": this.state.nilaiWifi,
                "Cafetaria": this.state.nilaiCafe,
                "PendinginRuangan": this.state.nilaiAC,
                "ParkiranMotor": this.state.nilaiMotor,
                "ParkiranMobil": this.state.nilaiCar,
                "CompanyName": this.props.CompanyName,
                "CompanyLogo": this.state.foto,
                "CompanyDescription": this.state.Deskripsi,
                "CompanyAddressDetail": this.props.CompanyDetailAddress,
                "Provinsi": this.props.ProvinsiCompany,
                "Kota": this.props.KotaCompany,
                "Kecamatan": this.props.KecamatanCompany,
                "Kelurahan": this.props.KelurahanCompany,
                "SportType": this.props.sportid,
                "Field": this.state.data


                // "CompanyId": "1115",
                // "RuangGanti": "1",
                // "Shower": "1",
                // "Sauna": "0",
                // "Wifi": "0",
                // "Cafetaria": "1",
                // "PendinginRuangan": "1",
                // "ParkiranMotor": "1",
                // "ParkiranMobil": "1",
                // "CompanyName": "OrionName",
                // "CompanyLogo": "",
                // "CompanyDescription": "Olahraga Disini sangat Nyaman",
                // "CompanyAddressDetail": "Jalan Mangga Dua , Jakarta - 120",
                // "Provinsi": "Provinsi",
                // "Kota": "Kota",
                // "Kecamatan": "Kecamatan",
                // "Kelurahan": "Kelurahan",
                // "SportType": "1",
                // "Field": this.state.data
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.Message == "SUKSES SAVE") {
                    alert("Save Success")
                    Actions.TabssAdmin()
                } else {
                    alert("All Data Must Be Filled")
                }
            })
    }
    TakePhoto = (e, key, val) => {

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {

                let source = response.data;
                let data = this.state.data
                data[key] = { ...val, UploadGambar: source, captured: true }
                this.setState({
                    data: [...data]
                })
            }
        });
    }

    ValueFacility() {
        if (this.props.ruangGanti == true) {
            this.setState({
                nilaiGanti: '1'
            })
        }
        if (this.props.shower == true) {
            this.setState({
                nilaiShower: '1'
            })
        }
        if (this.props.ac == true) {
            this.setState({
                nilaiAC: '1'
            })
        }
        if (this.props.cafe == true) {
            this.setState({
                nilaiCafe: '1'
            })
        }
        if (this.props.wifi == true) {
            this.setState({
                nilaiWifi: '1'
            })
        }
        if (this.props.car == true) {
            this.setState({
                nilaiCar: '1'
            })
        }
        if (this.props.motor == true) {
            this.setState({
                nilaiMotor: '1'
            })
        }
    }
    getSeqNo() {
        fetch(link1, {
            method: 'POST',
            headers: {
                "CompanyId": "1115",
            },
            body: JSON.stringify(
                {
                    "CustomerId": this.props.customerId
                }
            )
        })
            .then(response => response.json())
            .then(res => {
                if (res.Message == null) {

                }
            })
    }
    componentDidMount() {
        this.ValueFacility();
        this.getSeqNo();
    }
    render() {
        const { data } = this.state
        return (
            <ScrollView>
                <View style={styles.container1}>
                    <View>
                        <TouchableOpacity
                            style={{ marginTop: ScreenHeight * -3 / 100, backgroundColor: 'white' }}
                            onPress={() =>
                                this.TakePhotoHighlight()
                            }>
                            <View style={{ alignItems: 'center', top: ScreenHeight * 25 / 100 }}>
                                <Text style={{ color: 'black' }}>
                                    + Add Your Favorite Field Photo
                                    </Text>
                            </View>
                            <Image
                                source={{ uri: 'data:image/jpeg;base64,' + this.state.foto }}


                                style={{
                                    height: ScreenHeight * 50 / 100,
                                    width: ScreenWidth * 100 / 100,
                                    alignSelf: 'center',
                                    resizeMode: 'stretch'

                                }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: ScreenHeight * 22 / 100, backgroundColor: 'white', marginTop: ScreenHeight * 1 / 100 }}>
                        <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 1 / 100, marginBottom: ScreenHeight * 1 / 100 }}>
                            <Text style={styles.quest1}>Description</Text>

                            <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100 }}>
                                <Textarea rowSpan={5} bordered placeholder="Input Your Field Description"
                                    value={this.state.Deskripsi}
                                    onChangeText={(text) => { this.setState({ Deskripsi: text }) }}
                                />
                            </Form>
                        </View>
                    </View>

                    <View style={styles.OT1}>
                        <View>
                            <Text style={styles.judul}>Choose How Many Spot You Want Register</Text>
                        </View>
                        <View>

                            <TouchableOpacity onPress={() => this.addForm()} style={styles.next}>
                                <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 1.75 / 100, fontSize: 12 }}>Add Spot</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        {data.map((val, key) => {
                            return (
                                <View style={styles.InputGambar}
                                    key={key}
                                >
                                    <Text style={styles.judul}>Register Field {key + 1}</Text>
                                    <View style={{ flexDirection: 'row', width: ScreenWidth }}>
                                        <Text style={styles.quest1}>Price per Hour (Before Tax 10%)</Text>

                                        <Item style={{ width: ScreenWidth * 65 / 100, marginTop: ScreenHeight * 5 / 100, height: ScreenHeight * 3 / 100, backgroundColor: 'white' }}>
                                            <Input
                                                type='text'
                                                style={{ fontSize: 12, backgroundColor: 'white', marginTop: ScreenHeight * -5 / 100, width: ScreenWidth * 70 / 100 }}
                                                placeholder="Input Price"
                                                value={val.Price}
                                                onChangeText={(value) => {
                                                    // e.defaultPrevented()
                                                    let mutatedData = data
                                                    mutatedData[key].Price = value
                                                    this.setState({
                                                        data: mutatedData,
                                                    })
                                                }} />
                                        </Item>

                                    </View>

                                    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                                        <Text style={styles.quest1}>Sport Field Name</Text>

                                        <Item style={{ width: ScreenWidth * 65 / 100, marginTop: ScreenHeight * 5 / 100, height: ScreenHeight * 3 / 100, backgroundColor: 'white' }}>
                                            <Input
                                                type='text'
                                                style={{ fontSize: 12, backgroundColor: 'white', marginTop: ScreenHeight * -5 / 100, width: ScreenWidth * 70 / 100 }}
                                                placeholder="Input Field Name"
                                                value={val.NamaLapangan}
                                                onChangeText={(value) => {
                                                    // e.isDefaultPrevented()
                                                    let mutatedData = data
                                                    mutatedData[key].NamaLapangan = value
                                                    this.setState({
                                                        data: mutatedData
                                                    })
                                                }} />
                                        </Item>
                                    </View>
                                    {/* <View style={{ flexDirection: 'row', width: ScreenWidth }}>
                                        <Text style={styles.quest1}>Note</Text>
                                        <Item style={{ width: ScreenWidth * 65 / 100, marginTop: ScreenHeight * 5 / 100, height: ScreenHeight * 3 / 100, backgroundColor: 'white' }}>
                                            <Input
                                                type='text'
                                                style={{ fontSize: 12, backgroundColor: 'white', marginTop: ScreenHeight * -5 / 100, width: ScreenWidth * 70 / 100 }}
                                                placeholder="Input Note"
                                                value={val.Price}
                                                onChangeText={(value) => {
                                                    // e.defaultPrevented()
                                                    let mutatedData = data
                                                    mutatedData[key].Price = value
                                                    this.setState({
                                                        data: mutatedData,
                                                    })
                                                }} />
                                        </Item>
                                    </View> */}
                                    <TouchableOpacity
                                        value={val.UploadGambar}
                                        onPress={(e) =>
                                            this.TakePhoto(e, key, val)
                                        }>
                                        <View style={{ alignItems: 'center', top: ScreenHeight * 25 / 100 }}>
                                            <Text style={{ color: 'black' }}> + Add Photo </Text>
                                        </View>
                                        <Image

                                            style={{
                                                height: ScreenHeight * 50 / 100,
                                                width: ScreenWidth * 100 / 100,
                                                alignSelf: 'center',
                                                resizeMode: 'stretch'
                                            }}
                                            source={{ uri: 'data:image/jpeg;base64,' + val.UploadGambar }}

                                        />
                                    </TouchableOpacity>


                                </View>
                            )
                        })

                        }
                    </View>
                    <TouchableOpacity onPress={() => this.RegisterField()} style={{

top: ScreenHeight * 0 / 100,
backgroundColor: '#0064c2',
height: ScreenHeight * 7 / 100,
width: ScreenWidth * 60 / 100,
alignSelf: 'center',
borderRadius: 30,
margin: 7
                    }}>
                        <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 1.75 / 100, fontSize: 14, fontWeight:'bold' }}>Save</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    InputGambar: {
        width: ScreenWidth,
        height: ScreenHeight * 73 / 100,
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
        height: ScreenHeight * 6 / 100,
        borderRadius: 30,
        elevation: 10,
        marginBottom: ScreenHeight * 3 / 200

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
        fontSize: 12,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 1 / 100,
        color: 'black', width: ScreenWidth * 30 / 100
    },
    judul: {
        fontWeight: 'bold',
        fontSize: 14,

        marginTop: ScreenHeight * 1 / 100,
        color: 'black',
        textAlign: 'center',
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
        borderWidth: 0,

    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
    }
});

function mapStateToProps(state) {
    return {
        sportid: state.sportid,
        companyId: state.companyId,
        KecamatanCompany: state.KecamatanCompany,
        KelurahanCompany: state.KelurahanCompany,
        KotaCompany: state.KotaCompany,
        ProvinsiCompany: state.ProvinsiCompany,
        CompanyDetailAddress: state.CompanyDetailAddress,
        CompanyName: state.CompanyName,

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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterData)
