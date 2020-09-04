import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, AsyncStorage, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { setCompanyDetailAddress, setCompanyName, setProvinsiCompany, setKotaCompany,setKelurahanCompany,setKecamatanCompany} from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompany'

class DashboardAdmin extends Component {

    constructor(props) {
        super(props)
        // this.defaultDate = props.defaultDate;
        //this.minDateProp = props.minDate;
        this.state = {
            selected2: undefined,
            provinsi:'',
            spinner: false,
            progress: 0,
            kota:'',
            nama:'',
            kecamatan:'',
            kelurahan:'',
            alamat:''
        }
    }
    DashboardAdmin = () => {
        Actions.TabsAdmin()
    }
    member = () => {
        Actions.MemberSportList()
    }
    kontakkami = () => {
        Actions.KontakKami()
    }
    isimatch = () => {
        Actions.MatchType()
    }

    abc = () => {
        this.setState({ spinner: true });
        setInterval(() => {
            if (this.state.spinner == true) {
                this.setState({ spinner: false })
            }
        }, 3000)
        Actions.BusinessCareType()
    }
    // onValueChange2(value: '123') {
    //   this.setState({
    //     selected2: value
    //   });
    // }
    GotoSportType = () => {
        Actions.RegisterType()
    }
    pendapatan = () => {
        Actions.IncomeSportType()
    }
    componentDidMount(){
        this.DoBindCompanyData();
    }
    DoBindCompanyData = () => {

        fetch(link, {
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
                  provinsi: res.companyProvinsi,
                  kecamatan: res.companyKecamatan,
                  kelurahan: res.companyKelurahan,
                  kota: res.companyKota,
                  nama: res.companyName,
                  alamat: res.companyAddress
              })
              this.props.setCompanyDetailAddress(this.state.alamat)
              this.props.setCompanyName(this.state.nama)
              this.props.setProvinsiCompany(this.state.provinsi)
              this.props.setKotaCompany(this.state.kota)
              this.props.setKelurahanCompany(this.state.kelurahan)
              this.props.setKecamatanCompany(this.state.kecamatan)
            })
          
    }
    back() {
        Actions.Tab2()
    }
    render() {
        return (
            <View style={styles.container1}>

                <View style={styles.kotak1}>
                    <Text style={{ fontSize: 22, fontWeight: '800', color: 'white', marginTop: ScreenHeight * 5 / 100 }}>{this.state.nama}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{  color: 'white', fontWeight: '800' }}> ID: </Text>
     
                        <Text style={{  color: 'white', fontWeight: '800' }}>{this.props.companyId}</Text>
                    </View>

                </View>

                <TouchableOpacity onPress={this.GotoSportType} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/employee.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Register Field</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.abc} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/target.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Business Care</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.isimatch} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/piala.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Create Match</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.pendapatan} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/report.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>My Income</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.kontakkami} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/call.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>FitAccess Help</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={this.logOut} style={styles.button}>
                    <View style={{flexDirection:'row'}}>
                        <ImageBackground source={require('../image/logout.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                        <Text style={styles.txt1}>Log Out</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}

            </View>
        )
    }

}
const styles = StyleSheet.create({
    container1: {
        height: ScreenHeight,
        backgroundColor: 'white',
        alignItems:'center'
    },
    kotak1: {
        height: ScreenHeight * 17 / 100,
        width: ScreenWidth,
        backgroundColor: 'dodgerblue',
        alignItems:"center"

    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: ScreenHeight * 8 / 100,
        marginTop: ScreenHeight * 2 / 100,
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
        fontSize: 14,
        marginLeft: ScreenWidth * 5 / 100,
        marginTop: ScreenHeight * 2.5 / 100,
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
        CompanyDetailAddress: state.CompanyDetailAddress
    }
}
function mapDispatchToProps(dispatch) {
    return {

    

        setKecamatanCompany: (KecamatanCompany) => {
            dispatch(setKecamatanCompany(KecamatanCompany))
        },
        setKelurahanCompany: (KelurahanCompany) => {
            dispatch(setKelurahanCompany(KelurahanCompany))
        },
        setKotaCompany: (KotaCompany) => {
            dispatch(setKotaCompany(KotaCompany))
        },
        setProvinsiCompany: (ProvinsiCompany) => {
            dispatch(setProvinsiCompany(ProvinsiCompany))
        },
        setCompanyDetailAddress: (CompanyDetailAddress) => {
            dispatch(setCompanyDetailAddress(CompanyDetailAddress))
        },
        setCompanyName: (CompanyName) => {
            dispatch(setCompanyName(CompanyName))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdmin)
