import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ScrollView, Image, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading } from 'native-base';
import { setCompanyIdChoosen } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/FontAwesome';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindFilterLocationAndFacility';

class SportLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nama: [],
      description: [],
      address: [],
      data: [],
      nilaiGanti: '',
      nilaiAc: '',
      nilaiShower: '',
      nilaiWifi: '',
      nilaiCar: '',
      nilaiMotor: '',
      nilaiCafe: ''
    }
  }

  componentDidMount() {
    this.getData1();
    this.FilterData();

  
  }
  BookData = (index) => {
    this.props.setCompanyIdChoosen(this.state.data[index].companyId),
      Actions.DetailLapangan()
  }
  getData1 = () => {
    if (this.props.ruangGanti == true) {
      this.setState({
        nilaiGanti: 'Tersedia'
      })
    }
    if (this.props.ac == true) {
      this.setState({
        nilaiAc: 'Tersedia'
      })
    }
    if (this.props.shower == true) {
      this.setState({
        nilaiShower: 'Tersedia'
      })
    }
    if (this.props.cafe == true) {
      this.setState({
        nilaiCafe: 'Tersedia'
      })
    }
    if (this.props.wifi == true) {
      this.setState({
        nilaiWifi: 'Tersedia'
      })
    }
    if (this.props.car == true) {
      this.setState({
        nilaiCar: 'Tersedia'
      })
    }
    if (this.props.motor == true) {
      this.setState({
        nilaiMotor: 'Tersedia'
      })
    }
  
  }
  FilterData = () => {
  
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "ProvinsiNama": this.props.provinsiChoosen,
        "KotaNama": this.props.kotaChoosen,
        "KecamatanNama": this.props.kecamatanChoosen,
        "RuangaGanti": this.state.nilaiGanti,
        "Shower": this.state.nilaiShower,
        "AC": this.state.nilaiAc,
        "WifiHotspot": this.state.nilaiWifi,
        "Cafetaria": this.state.nilaiCafe,
        "PakiranMobil": this.state.nilaiCar,
        "ParkiranMotor": this.state.nilaiMotor,
        "SportType": this.props.sportid
        // "ProvinsiNama": "",
        // "KotaNama": "",
        // "KecamatanNama": "Jakarta",
        // "RuangaGanti": "Tersedia",
        // "Shower": "",
        // "AC": "",
        // "WifiHotspot": "",
        // "Cafetaria": "",
        // "PakiranMobil": "",
        // "ParkiranMotor": "",
        // "SportType":"1"
      })


    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          data: res.RetVal
        })
      })
   
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{ width: ScreenWidth, height: ScreenHeight, backgroundColor: '#F4F4F4' }}>
      <ScrollView>
        <View>
    <Text>
    {/* "ProvinsiNama": {this.props.provinsiChoosen},
        "KotaNama":{ this.props.kotaChoosen},
        "KecamatanNama": {this.props.kecamatanChoosen},
        "RuangaGanti": {this.state.nilaiGanti},
        "Shower": {this.state.nilaiShower},
        "AC": {this.state.nilaiAc},
        "WifiHotspot": {this.state.nilaiWifi},
        "Cafetaria":{ this.state.nilaiCafe},
        "PakiranMobil": {this.state.nilaiCar},
        "ParkiranMotor":{ this.state.nilaiMotor},
        "SportType": {this.props.sportid} */}

    </Text>
          {this.state.data.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.boxsport}>
                <View style={styles.baner}>
                  <Text style={{ color: 'white', textAlign: 'right', right: ScreenWidth * 2 / 100, fontWeight:'bold' }}>{item.companyName}</Text>
                </View>
                <View style={styles.gambar}>
                  <Image
                    source={{ uri: item.companyLogo }}
                    style={styles.gambarlp}
                    resizeMode="stretch"
                  ></Image>

                  <View style={styles.detaildata}>
                    <View style={styles.datalokasi}>
                      <Icon name="map-marker" style={{ color: '#0064c2' }} size={14} />
                      <Text style={{ color: 'black', fontSize: 13, marginLeft: ScreenWidth * 2 / 100, fontWeight: 'bold' }}>{item.companyAddressDetail}</Text>
                    </View>
                    {/* <View style={styles.datalokasi}>
                    <Icon name="phone-square" style={{ color: '#0e9aa7' }} size={14} />
                    <Text style={{ color: 'black', fontSize: 13, marginLeft: ScreenWidth * 1.5 / 100 }}>081318947729</Text>
                  </View> */}
                    <View style={styles.datalokasi}>
                      <Icon name="star" style={{ color: '#0064c2' }} size={14} />
                      <Text style={{ color: 'black', fontSize: 13, marginLeft: ScreenWidth * 1.5 / 100, fontWeight:'bold' }}>5</Text>
                    </View>
                    {/* <View style={styles.datalokasi}>
                    <Icon name="money" style={{ color: '#0e9aa7' }} size={14} />
                    <Text style={{ color: 'black', fontSize: 13, marginLeft: ScreenWidth * 1.5 / 100 }}>Rp 25.000,00</Text>
                  </View> */}
                    <TouchableOpacity style={{ width: ScreenWidth * 35 / 100, height: ScreenHeight * 6 / 100, borderRadius: 30, backgroundColor: '#0064c2', elevation: 10, marginTop: ScreenHeight * 8 / 100, alignSelf: 'center' }}
                      onPress={() => this.BookData(index)}>
                      <View >
                        <Text style={{ alignSelf: 'center', top: ScreenHeight * 1.5 / 100, color: 'white', fontWeight:'bold', fontSize:14,textAlign:'center' }}> Book</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  info: {
    left: ScreenWidth * 3 / 100,
    fontSize: 12
  },
  boxsport: {
    width: ScreenWidth * 97 / 100,
    marginTop: ScreenHeight * -1 / 100,
    marginLeft: ScreenHeight * 1 / 100,
    height: ScreenHeight * 25 / 100,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    elevation: 5
  },
  datalokasi: {
    width: ScreenWidth * 53 / 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: ScreenHeight * 0.5 / 100
  },
  detaildata: {
    width: ScreenWidth * 53 / 100,
    backgroundColor: 'white',
    marginLeft: ScreenWidth * 2 / 100,
    height: ScreenHeight * 15 / 100,
    marginTop: ScreenHeight * 1 / 100,
    flexDirection: 'column'
  },
  gambar: {
    width: ScreenWidth * 95 / 100,
    backgroundColor: 'white',
    height: ScreenHeight * 20 / 100,
    marginLeft: ScreenWidth * 1 / 100,
    flexDirection: 'row'
  },
  kotaklapang: {
    width: ScreenHeight * 56 / 100,
    height: ScreenHeight * 25 / 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: 'gray'
  },
  baner: {
    width: ScreenWidth * 97 / 100,
    backgroundColor: '#FF7314',
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    left: ScreenWidth * 0 / 100,
    height:ScreenHeight*3/100
  },
  gambarlp: {
    width: ScreenWidth * 40 / 100,
    height: ScreenHeight * 19/ 100,
    margin:1
   
  }
});
function mapStateToProps(state) {
  return {
    provinsiChoosen: state.provinsiChoosen,
    kotaChoosen: state.kotaChoosen,
    kecamatanChoosen: state.kecamatanChoosen,
    ruangGanti: state.ruangGanti,
    shower: state.shower,
    ac: state.ac,
    cafe: state.cafe,
    wifi: state.wifi,
    car: state.car,
    motor: state.motor,
    sportid: state.sportid
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setCompanyIdChoosen: (companyidchoosen) => {
      dispatch(setCompanyIdChoosen(companyidchoosen))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SportLocation)