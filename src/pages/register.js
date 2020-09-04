import React, { Component } from 'react';
// import { View , ImageBackground , ,TextInput, TouchableOpacity  ,StyleSheet ,Picker, Text , Dimensions } from 'react-native';
import {
  View, Dimensions, ImageBackground, Image, Text, Alert, TouchableOpacity, ScrollView, Platform,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Login from './login';
import { connect } from 'react-redux';
import { setUsername, setPassword, setSubSystemID } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import NumberFormat from 'react-number-format';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/Dashboard'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lblSalesHariini: '',
      lblSalesbulanini: '',
      name: '',
      jobposition: '',
      officelocation: '',
      description: '',
      email: '',
      telepon: '',
      foto: '',
      visible1: false,
      visible2: false,
      TotalSalesbulan: '',
      username: this.props.username,
      password: this.props.password,
      subsys: this.props.subsystemid,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  abc = () => {
    Actions.BasketballRules()
  }

  componentDidMount() {

    console.log("username", this.props.username)
    console.log("PW", this.props.password)
    console.log("SUB", this.props.subsystemid)
    // Alert.alert(this.props.pwDecrypt)
    //alert(this.props.password)
    fetch(link, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
      },
      body: JSON.stringify({
        "Username": this.props.username,
        "Password": this.props.pwDecrypt,
        "SubSystemID": this.props.subsystemid
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        this.setState({
          lblSalesHariini: res.GetDataDashboardResult.lblSalesHariini,
          lblSalesbulanini: res.GetDataDashboardResult.lblSalesbulanini,
          lblmemberonline: res.GetDataDashboardResult.lblmemberonline,
          lblonlinePerbulan: res.GetDataDashboardResult.lblonlinePerbulan,
          lblvisitor: res.GetDataDashboardResult.lblvisitor,
          TotalSalesbulan: res.GetDataDashboardResult.TotalSalesbulan

        })
      })
  }
  closeModal() {
    this.setState({
      visible1: false,
      visible2: false,
    })
  }
  openModal() {
    this.setState({
      visible1: true,
    })
  }

  Modal1() {
    if (this.state.visible1 == true) {
      return (
        <Modal isVisible={this.state.visible1} onBackdropPress={this.closeModal}>
          <View style={{ width: ScreenWidth * 90 / 100, height: ScreenHeight * 90 / 100, backgroundColor: 'white', alignSelf: 'center' }}>
            <View style={{ alignItems: 'center', top: ScreenHeight * 83 / 100, borderWidth: 0.5, width: ScreenWidth * 30 / 100, left: ScreenWidth * 30 / 100, borderRadius: 15, height: ScreenHeight * 5 / 100, backgroundColor: "gray" }}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={{ color: 'blue' }}>BACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <View style={{
          height: ScreenHeight,
          width: ScreenWidth,
          backgroundColor: 'white',
          borderRadius: 45,
          borderColor: 'white',
          top: ScreenHeight * 1 / 100,
          alignContent: 'center'
        }} >
          <View >
            <Text style={{
              alignSelf: 'center',
              fontWeight: '700', fontSize: 40,
              textShadowColor: 'black',
              color: 'black',
              top: ScreenHeight * 2 / 100,
              borderBottomWidth: 1
            }}
            >SPORT RULES
                      </Text>
          </View>
          <View style={{ bottom: ScreenHeight * 2 / 100 }}>
            <View style={{
              width: ScreenWidth * 45 / 100,
              height: ScreenHeight * 20 / 100,
              top: ScreenHeight * 5 / 100,
              backgroundColor: '#ffff00',
              borderRadius: 40,
              borderColor: '#black',
              left: ScreenWidth * 4 / 100,
              alignItems: 'center',
              elevation: 10
            }}>
              <View style={{ alignSelf: 'center' }}>
                <ImageBackground source={require('../image/bolasepak.png')}
                  style={{
                    top: ScreenHeight * 2 / 100,
                    width: ScreenWidth * 17.5 / 100,
                    height: ScreenHeight * 10 / 100,
                  }}
                ></ImageBackground>
              </View>
              <View style={{ width: ScreenWidth * 30 / 100, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '700', top: ScreenHeight * 4 / 100 }}> Soccer</Text>
              </View>
              {this.Modal1()}
            </View>

            <View style={{
              width: ScreenWidth * 45 / 100,
              height: ScreenHeight * 20 / 100,
              top: ScreenHeight * 7 / 100,
              backgroundColor: '#ffff00',
              borderRadius: 30,
              borderColor: 'black',
              left: ScreenWidth * 4 / 100,
              alignItems: 'center',
              elevation: 10
            }}>

              <View style={{ alignSelf: 'center' }}>
                <ImageBackground source={require('../image/volley.png')}
                  style={{
                    width: ScreenWidth * 17.5 / 100,
                    height: ScreenHeight * 10 / 100,
                    top: ScreenHeight * 2 / 100,

                  }}
                ></ImageBackground>
              </View>
              <View style={{ width: ScreenWidth * 30 / 100, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '700', top: ScreenHeight * 4 / 100 }}>Volley</Text>
              </View>
            </View>
            <TouchableOpacity onPress={this.abc} style={{
              width: ScreenWidth * 45 / 100,
              height: ScreenHeight * 20 / 100,
              borderRadius: 30,
              backgroundColor: '#ffff00',
              left: ScreenWidth * 51 / 100,
              elevation: 10,
              alignItems: 'center',
              bottom: ScreenHeight * 13 / 100
            }}>

              <View>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/bolabasket.png')}
                    style={{
                      top: ScreenHeight * 2 / 100,
                      width: ScreenWidth * 17.5 / 100,
                      height: ScreenHeight * 10 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{
                  width: ScreenWidth * 30 / 100,
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: '700',
                    top: ScreenHeight * 4 / 100
                  }}> BasketBall
            </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{
              width: ScreenWidth * 45 / 100,
              height: ScreenHeight * 20 / 100,
              top: ScreenHeight * -55 / 100, elevation: 10,
              backgroundColor: '#ffff00', borderRadius: 35, borderWidth: 0, borderColor: 'black', left: ScreenWidth * 51 / 100, alignItems: 'center'
            }}>

              <View style={{ alignSelf: 'center' }}>
                <ImageBackground source={require('../image/tenismeja.png')}
                  style={{
                    top: ScreenHeight * 2 / 100,
                    width: ScreenWidth * 17.5 / 100,
                    height: ScreenHeight * 10 / 100,
                  }}
                ></ImageBackground>
              </View>
              <View style={{ width: ScreenWidth * 30 / 100, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: 'black', top: ScreenHeight * 4 / 100, }}>Table Tennis</Text>

              </View>
              <View style={{ width: ScreenWidth * 30 / 100, alignItems: 'center', left: ScreenWidth * 7.7 / 100, bottom: ScreenHeight * 2.5 / 100 }}>

                <Text style={{ top: ScreenHeight * 2 / 100, fontSize: 9, color: '#ffff00' }}> bulan ini</Text>
              </View>
            </View>
            <View style={{
              width: ScreenWidth * 45 / 100,
              height: ScreenHeight * 20 / 100,
              bottom: ScreenHeight * 31 / 100,
              backgroundColor: '#ffff00',
              borderRadius: 30,
              borderColor: 'black',
              left: ScreenWidth * 51 / 100,
              alignItems: 'center',
              elevation: 10
            }}>
              <View style={{ alignSelf: 'center' }}>
                <ImageBackground source={require('../image/tennis.png')}
                  style={{
                    top: ScreenHeight * 2 / 100,
                    width: ScreenWidth * 17.5 / 100,
                    height: ScreenHeight * 10 / 100,
                  }}
                ></ImageBackground>
              </View>

              <View style={{ width: ScreenWidth * 30 / 100, alignItems: 'center' }}>
                {/* <NumberFormat
                      value={this.state.TotalSalesbulan}
                      thousandSeparator={true}
                      displayType={'text'}
                      fixedDecimalScale={true}
                      decimalScale={2}
                      renderText={value => <Text style={{ top: ScreenHeight * 2 / 100, fontSize: 9, color: '#ffff00', bottom: ScreenHeight * 2 / 100 }}>Rp.{value}</Text>} /> */}
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '700', top: ScreenHeight * 4 / 100 }}> Tennis</Text>
              </View>
            </View>
            <View style={{
              width: ScreenWidth * 45 / 100,
              height: ScreenHeight * 20 / 100,
              bottom: ScreenHeight * 51 / 100,
              backgroundColor: '#ffff00',
              borderRadius: 30,
              borderColor: 'black',
              left: ScreenWidth * 4 / 100,
              alignItems: 'center',
              elevation: 10
            }}>
              <View style={{ alignSelf: 'center' }}>
                <ImageBackground source={require('../image/badminton.png')}
                  style={{
                    top: ScreenHeight * 2 / 100,
                    width: ScreenWidth * 17.5 / 100,
                    height: ScreenHeight * 10 / 100,
                  }}
                ></ImageBackground>
              </View>
              <View style={{ width: ScreenWidth * 30 / 100, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: '700', top: ScreenHeight * 4 / 100 }}> Badminton</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  butttonstyle: {
    borderRadius: 30,
    borderWidth: 0.5,
    width: ScreenWidth * 32 / 100,
    height: ScreenHeight * 10 / 100,
    borderColor: '#38383B',
    backgroundColor: '#38383B',
    alignItems: 'center'


  },


  View1: {
    width: ScreenWidth,
    height: ScreenHeight * 120 / 100,
    bottom: ScreenHeight * 15 / 100,
    left: ScreenWidth * 12 / 100,
    backgroundColor: 'transparent',

    flex: 1

  },
})
function mapStateToProps(state) {
  return {
    username: state.username,
    password: state.password,
    subsystemid: state.subsystemid,
    pwDecrypt: state.PasswordDecrypt
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setUsername: (username) => {
      dispatch(setUsername(username))
    },
    setPassword: (password) => {
      dispatch(setPassword(password))
    },
    setSubSystemID: (subsystemid) => {
      dispatch(setSubSystemID(subsystemid))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)