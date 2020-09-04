import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, AsyncStorage, ImageBackground, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { setSportId, setNamaLengkap,setEmailCust } from '../Redux/Action';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/InputCuti'
const Link_BindCustData = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCustomer'


class Dashboard extends Component {

  constructor(props) {
    super(props)
    // this.defaultDate = props.defaultDate;
    //this.minDateProp = props.minDate;
    this.state = {
      TanggalCuti: '',
      TanggalAkhirCuti: '',
      username: '',
      soccerid: '4',
      tennisid: '6',
      tennismejaid: '5',
      basketid: '3',
      volleyid: '2',
      badmintonid: '1',
      sportid: '',
      namaLengkap: '',
      spinner: false,
      progress: 0,
      emailCust: '',
      // mobilePhone:''
    }
  }
  soccer = () => {
 
    this.props.setSportId(this.state.soccerid)
    this.setState({ spinner: true });
    setInterval(() => {
        if (this.state.spinner == true) {
            this.setState({ spinner: false })
        }
    }, 3000)
    Actions.Criteria()
  }
  badminton = () => {
   
    this.props.setSportId(this.state.badmintonid)
    this.setState({ spinner: true });
    setInterval(() => {
        if (this.state.spinner == true) {
            this.setState({ spinner: false })
        }
    }, 3000)
    Actions.Criteria()
  }
  tennismeja = () => {
  
    this.props.setSportId(this.state.tennismejaid)
    this.setState({ spinner: true });
    setInterval(() => {
        if (this.state.spinner == true) {
            this.setState({ spinner: false })
        }
    }, 3000)
    Actions.Criteria()
  }
  volley = () => {

    this.props.setSportId(this.state.volleyid)
    this.setState({ spinner: true });
    setInterval(() => {
        if (this.state.spinner == true) {
            this.setState({ spinner: false })
        }
    }, 3000)
    Actions.Criteria()
  }
  basketball = () => {

    this.props.setSportId(this.state.basketid)
    this.setState({ spinner: true });
    setInterval(() => {
        if (this.state.spinner == true) {
            this.setState({ spinner: false })
        }
    }, 3000)
    Actions.Criteria()
  }
  tennis = () => {

    this.props.setSportId(this.state.tennisid)
    // this.setState({ spinner: true });
    // setInterval(() => {
    //     if (this.state.spinner == true) {
    //         this.setState({ spinner: false })
    //     }
    // }, 3000)
    Actions.Criteria()
  }
  member = () => {
    Actions.MemberSportList()
  }
  match = () => {
    Actions.MatchSportType()
  }
  bindCustomerData = () => {
    fetch(Link_BindCustData, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "CustomerId": this.props.customerId
      })
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          namaLengkap: res.namaLengkap,
          emailCust: res.email

        })
        this.props.setEmailCust(this.state.emailCust)
        this.props.setNamaLengkap(this.state.namaLengkap)
      })
  }
  componentDidMount() {
    this.bindCustomerData();
  }
  back() {
    Actions.Tab2()
  }
  render() {
    return (
      <ScrollView>
                 <Spinner visible={this.state.spinner} />
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 1 / 100, marginBottom: ScreenHeight * 2 / 100 }}>
            <ImageBackground source={require('../image/FA1.png')} style={styles.kotaknama}></ImageBackground>
          </View>
          <View style={styles.kotakicon} >
            <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 2 / 100 }}>
              <TouchableOpacity style={styles.iconbox} onPress={this.soccer}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/soccer.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#0064c2', fontSize: 12, fontWeight: 'bold' }}>Futsal</Text></View>

              </TouchableOpacity>
              <TouchableOpacity style={styles.iconbox} onPress={this.basketball}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/basketball.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#0064c2', fontSize: 12, fontWeight: 'bold' }}>Basket</Text></View>

              </TouchableOpacity>
              <TouchableOpacity style={styles.iconbox} onPress={this.tennis}>

                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/ball.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#0064c2', fontSize: 12, fontWeight: 'bold' }}>Tennis</Text></View>

              </TouchableOpacity>
              <TouchableOpacity style={styles.iconbox} onPress={this.badminton}>

                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/badminton.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#0064c2', fontSize: 12, fontWeight: 'bold' }}>Badminton</Text></View>

              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 5 / 100 }}>
              <TouchableOpacity style={styles.iconbox} onPress={this.tennismeja}>

                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/tt.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#0064c2', fontSize: 12, textAlign: 'center', fontWeight: 'bold' }}>Table Tennis</Text></View>

              </TouchableOpacity>
              <TouchableOpacity style={styles.iconbox} onPress={this.volley}>

                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/volleyball.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#0064c2', fontSize: 12, fontWeight: 'bold' }}>Volley</Text></View>

              </TouchableOpacity>
              <TouchableOpacity style={styles.iconbox} onPress={this.match}>
                <View style={{ alignSelf: 'center' }}>
                  <ImageBackground source={require('../image/award.png')}
                    style={{
                      top: ScreenHeight * 2.5 / 100,
                      width: ScreenWidth * 9 / 100,
                      height: ScreenHeight * 5 / 100,
                    }}
                  ></ImageBackground>
                </View>
                <View style={{ top: ScreenHeight * 5 / 100 }}><Text style={{ color: '#FF7314', fontSize: 12, fontWeight: 'bold' }}>Match</Text></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topkonten}>
            <View style={{ flexDirection: 'row' }}>
              <ImageBackground source={require('../image/user.png')}
                style={{
                  top: ScreenHeight * 2 / 100,
                  left: ScreenWidth * 5 / 100,
                  width: ScreenWidth * 12.5 / 100,
                  height: ScreenHeight * 7 / 100,
                }}>
              </ImageBackground>
              <Text style={{ top: ScreenHeight * 3 / 100, left: ScreenWidth * 6 / 100, fontSize: 17, color: 'white', fontWeight: 'bold' }}>{this.props.namaLengkap}</Text>
            </View>
            <Text style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 19 / 100, fontSize: 12, color: 'white' }}>User ID: {this.props.customerId}</Text>
            <View style={{ borderWidth: 1, width: ScreenWidth * 95 / 100, top: ScreenHeight * 3 / 100, borderColor: '#E85E01' }}></View>
            <View style={{ top: ScreenHeight * 4 / 100 }}>
              <Text style={{ textAlign: 'center', color: 'white' }}>Just Do It!</Text>
            </View>
          </View>
          <View style={styles.rules}>
            <ImageBackground source={require('../image/rules.png')}
              style={{
                top: ScreenHeight * 4.8 / 100,
                width: ScreenWidth * 18 / 100,
                height: ScreenHeight * 10 / 100,
                left: ScreenWidth * 2 / 100
              }}>
            </ImageBackground>
            <View style={{ flexDirection: 'column', width: ScreenWidth * 50 / 100, top: ScreenHeight * 5.5 / 100, left: ScreenWidth * 5 / 100 }}>
              <Text style={{ color: 'white', fontSize: 14 }}>Check Out Sport Rules For A Better Challenging Sport Actions </Text>
            </View>

            <ImageBackground source={require('../image/marvel.png')}
              style={{
                top: ScreenHeight * 4.8 / 100,
                width: ScreenWidth * 18 / 100,
                height: ScreenHeight * 10 / 100,
                left: ScreenWidth * 5.5 / 100
              }}>
            </ImageBackground>

          </View>
          <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 2 / 100 }}>
            <TouchableOpacity style={styles.kotakrl}>
              <ImageBackground source={require('../image/fpy.png')}
                style={{
                  top: ScreenHeight * 2.5 / 100,
                  width: ScreenWidth * 18 / 100,
                  height: ScreenHeight * 10 / 100
                }}>
              </ImageBackground>
              <Text style={styles.txtbb}>Futsal Rules</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kotakrl}>
              <ImageBackground source={require('../image/bbpy.png')}
                style={{
                  top: ScreenHeight * 2.5 / 100,
                  width: ScreenWidth * 18 / 100,
                  height: ScreenHeight * 10 / 100
                }}>
              </ImageBackground>
              <Text style={styles.txtbb}>BasketBall Rules</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 1 / 100 }}>
            <TouchableOpacity style={styles.kotakrl}>
              <ImageBackground source={require('../image/tpy.png')}
                style={{
                  top: ScreenHeight * 2.5 / 100,
                  width: ScreenWidth * 18 / 100,
                  height: ScreenHeight * 10 / 100
                }}>
              </ImageBackground>
              <Text style={styles.txtbb}>Tennis Rules</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kotakrl}>
              <ImageBackground source={require('../image/vpy.png')}
                style={{
                  top: ScreenHeight * 2.5 / 100,
                  width: ScreenWidth * 18 / 100,
                  height: ScreenHeight * 10 / 100,

                }}>
              </ImageBackground>
              <Text style={styles.txtbb}>Volley Rules</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: ScreenHeight * 1 / 100 }}>
            <TouchableOpacity style={styles.kotakrl}>
              <ImageBackground source={require('../image/ttpy.png')}
                style={{
                  top: ScreenHeight * 2.5 / 100,
                  width: ScreenWidth * 18 / 100,
                  height: ScreenHeight * 10 / 100
                }}>
              </ImageBackground>
              <Text style={styles.txtbb}>Table Tennis Rules</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kotakrl}>
              <ImageBackground source={require('../image/bpy.png')}
                style={{
                  top: ScreenHeight * 2.5 / 100,
                  width: ScreenWidth * 18 / 100,
                  height: ScreenHeight * 10 / 100
                }}>
              </ImageBackground>
              <Text style={styles.txtbb}>Badminton Rules</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    )
  }

}
const styles = StyleSheet.create({
  txtbb: {
    color: 'white',
    top: ScreenHeight * 5 / 100,

  },
  rules: {
    width: ScreenWidth * 96 / 100,
    height: ScreenHeight * 20 / 100,
    backgroundColor: '#0064c2',
    bottom: ScreenHeight * 2 / 100,
    borderRadius: 6,
    marginLeft: ScreenHeight * 1 / 100,
    flexDirection: 'row',
    elevation:10

  },
  kotakrl: {
    height: ScreenHeight * 20 / 100,
    width: ScreenWidth * 47 / 100,
    backgroundColor: 'dodgerblue',
    marginLeft: ScreenWidth * 2 / 100,
    bottom: ScreenHeight * 5 / 100,
    elevation: 5,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: ScreenHeight * 2 / 100,

  },
  kotaknama: {

    marginLeft: ScreenWidth * 1 / 100,
    width: ScreenWidth * 40 / 100,
    height: ScreenHeight * 8 / 100
  },
  kotaknama1: {
    bottom: ScreenHeight * 2 / 100,
    marginLeft: ScreenWidth * 13 / 100,
    width: ScreenWidth * 45 / 100,
    height: ScreenHeight * 10 / 100
  },
  topkonten: {
    bottom: ScreenHeight * 39 / 100,
    backgroundColor: '#FF7314',
    height: ScreenHeight * 18 / 100,
    width: ScreenWidth * 95 / 100,
    left: ScreenWidth * 2.5 / 100,
    borderRadius: 6,
    elevation: 10.5
  },
  iconbox: {
    width: ScreenWidth * 18.5 / 100,
    height: ScreenHeight * 10 / 100,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: ScreenWidth * 3 / 100,
    left: ScreenWidth * -1 / 100,
    top: ScreenHeight * 4 / 100,
    elevation: 5,
     borderColor:'dodgerblue',
     borderWidth:2

  },
  kotakicon: {
    height: ScreenHeight * 37 / 100,
    width: ScreenWidth,
    backgroundColor: 'white',
    top: ScreenHeight * 14 / 100,
    alignContent: 'center',
    alignItems: 'center',

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
    customerId: state.customerId,
    namaLengkap: state.namaLengkap
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setSportId: (sportid) => {
      dispatch(setSportId(sportid))
    },
    setNamaLengkap: (namaLengkap) => {
      dispatch(setNamaLengkap(namaLengkap))
    },
    setEmailCust: (emailCust) => {
      dispatch(setEmailCust(emailCust))
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
