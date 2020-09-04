import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/InputCuti'


class Cuti extends Component {

  constructor(props) {
    super(props)
    // this.defaultDate = props.defaultDate;
    //this.minDateProp = props.minDate;
    this.state = {
      TanggalCuti: '',
      TanggalAkhirCuti: '',
      username: ''
    }
  }
  abc = () => {
    Actions.Criteria()
  }
  submitt = () => {

    fetch(link, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
      },
      body: JSON.stringify({
        "TanggalCuti": this.state.TanggalCuti,
        "TanggalAkhirCuti": this.state.TanggalAkhirCuti,
        "NPK": this.props.username
      })
    })
      .then(response => response.json())
      .then(res => {

        if (res.InputCutiResult == "Berhasil Menyimpan Data") {
          alert("Berhasil Menyimpan Data")
          Actions.Tab2()
        }
      })
  }
  back() {
    Actions.Tab2()
  }
  render() {
    return (

      <View style={{ backgroundColor: 'red', height: ScreenHeight }}>
        <ImageBackground source={require('../image/CEWE.png')}
          style={{
            width: ScreenWidth * 100 / 100,
            height: ScreenHeight * 78 / 100,
          }}
        >
          <View style={styles.topkonten}>
            <View style={{ flexDirection: 'row' }}>
              <ImageBackground source={require('../image/user.png')}
                style={{
                  top: ScreenHeight * 2 / 100,
                  left: ScreenWidth * 5 / 100,
                  width: ScreenWidth * 12.5 / 100,
                  height: ScreenHeight * 7 / 100,
                }}
              >
              </ImageBackground>
              <Text style={{ top: ScreenHeight * 4 / 100, left: ScreenWidth * 6 / 100, fontSize: 17 }}>HELLO! Kevin Hermawan</Text>
            </View>
            <View style={{ borderWidth: 1, width: ScreenWidth * 95 / 100, top: ScreenHeight * 5 / 100, borderColor: 'gray' }}></View>
            <View style={{ flexDirection: 'row', top: ScreenHeight * 6.5 / 100,width:ScreenWidth*95/100 }}>
              <View>
                <Icon name="bell" style={{ color: 'orange', left: ScreenHeight * 11 / 100 }} size={30} />
              </View>
              <View>
                <Icon name="shopping-cart" style={{ color: 'orange', left: ScreenHeight * 33 / 100 }} size={30} />
              </View>
            </View>
          </View>


          <View style={styles.kotakicon} >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.iconbox}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/soccer.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>

                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Soccer</Text></View>
              </View>
              <View style={[styles.iconbox, { marginLeft: ScreenWidth * 5 / 100 }]}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/volleyball.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Volley</Text></View>
              </View>
              <View style={[styles.iconbox, { marginLeft: ScreenWidth * 5 / 100 }]}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/basketball.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Basket </Text></View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Ball</Text></View>
              </View>
              <View style={[styles.iconbox, { marginLeft: ScreenWidth * 5 / 100 }]}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/tt.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Table </Text></View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}> Tennis</Text></View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', top: ScreenHeight * 8 / 100 }}>
              <View style={styles.iconbox}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/ball.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 8.9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>

                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}>
                  <Text style={{
                    color: 'black', fontSize: 12
                  }}>Tennis</Text></View>
              </View>
              <View style={[styles.iconbox, { marginLeft: ScreenWidth * 5 / 100 }]}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/badminton.png')}
                    style={{
                      top: ScreenHeight * 2 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100, width: ScreenWidth * 20 / 100 }}>
                  <Text style={{ color: 'black', fontSize: 12, left: ScreenWidth * 2.2 / 100 }}>Badminton</Text></View>
              </View>
              <View style={[styles.iconbox, { marginLeft: ScreenWidth * 5 / 100 }]}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/award.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Match</Text></View>
              </View>
              <View style={[styles.iconbox, { marginLeft: ScreenWidth * 5 / 100 }]}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/united.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 10 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Member</Text></View>
                <View style={{ left: ScreenWidth * 0 / 100, top: ScreenHeight * 5 / 100 }}><Text style={{ color: 'black', fontSize: 12 }}>Sport</Text></View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  iconbox: {
    width: ScreenWidth * 18.5 / 100,
    height: ScreenHeight * 10 / 100,
    borderRadius: 30,
    top: ScreenHeight * 0.5 / 100,
    alignItems: 'center',
    left: ScreenWidth * 3 / 100,

  },
  kotakicon: {
    height: ScreenHeight * 36 / 100,
    width: ScreenWidth * 95 / 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'white',
    left: ScreenWidth * 2.5 / 100,
    top: ScreenHeight * 3 / 100,
    alignContent: 'center',
    elevation: 10
  },
  btnLogin: {

    height: 40,
    width: 300,
    backgroundColor: '#F8C300',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    left: ScreenWidth * 5 / 100,
    borderRadius: 15,
  },
  container: {
    flex: 1
  },
  topkonten: {
    top: ScreenHeight * 1 / 100,

    backgroundColor: 'white',
    height: ScreenHeight * 20 / 100,
    width: ScreenWidth * 95 / 100,
    left: ScreenWidth * 2.5 / 100,
    borderRadius: 20,
    elevation: 10
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
    username: state.username,
  }
}
function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cuti)
