import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ScrollView, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert,Image } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading } from 'native-base';
import { setUsername, setMatchIdChoosen, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/FontAwesome';
var NumberFormat = require('react-number-format');
const options = {
  title: 'Choose to change image',
  takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
  chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
  quality: 0.5,
  maxHeight: 100,
  maxWidth: 100,
}

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindMatch'

class Match extends Component {
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
      MatchData: []
    }


  }
  abcde = (index) => {
    this.props.setMatchIdChoosen(this.state.MatchData[index].matchId)
    Actions.MatchRules()
  }
  bindMatchData = () => {
    fetch(link1, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "SportType": this.props.matchSportId
      })
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          MatchData: res.retval1

        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  componentDidMount() {
    this.bindMatchData();
  }
  render() {
    return (

      <ScrollView>
        <View style={{ width: ScreenWidth, backgroundColor: '#gray', marginBottom: ScreenHeight * 2 / 100 }}>
          {/* <Text>{this.props.matchSportId}</Text> */}
          {this.state.MatchData.map((item, index) => {

            if(item.status == 'START'){
            return (
              <View
                key={index}
                style={styles.boxsport}>
                <View style={styles.baner}>
                  <Text style={{ color: 'white', textAlign: 'right', right: ScreenWidth * 2 / 100, fontWeight:'bold' }}>{item.matchName}</Text>
                </View>
                <View style={styles.gambar}>

                  
                <Image   source={{ uri: 'data:image/jpeg;base64,' +item.uploadGambar }} style={styles.gambarlp}   resizeMode="stretch"/>
                  {/* <ImageBackground source={require('../image/cometa.jpg')} style={styles.gambarlp}>
                  </ImageBackground> */}
                  <View style={styles.detaildata}>
                    <View style={styles.datalokasi}>
                      <Icon name="map-marker" style={{ color: '#0064c2' }} size={12} />
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 2 / 100, fontWeight: 'bold' }}>Location:</Text>
                      <View style={{width:ScreenWidth*38/100,backgroundColor:'white'}}>
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 2 / 100 }}>{item.location}</Text>
                      </View>
                 
                    </View>
                   
                    <View style={styles.datalokasi}>
                      <Icon name="calendar" style={{ color: '#0064c2' }} size={12} />
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100, fontWeight: 'bold' }}>Date Start:</Text>
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100 }}>{item.dateMatchStart}</Text>
                      

                    </View>
                    <View style={styles.datalokasi}>
                      <Icon name="user" style={{ color: '#0064c2' }} size={12} />
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100, fontWeight: 'bold' }}>Slot Avaible:</Text>
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100 }}>{item.slotAvailable}</Text>
                    </View>
                    <View style={styles.datalokasi}>
                      <Icon name="money" style={{ color: '#0064c2' }} size={12} />
                      <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100, fontWeight: 'bold' }}>Registration Fee:</Text>

                      
                      <NumberFormat
                                            value={item.registrationFee}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100 }}>{value}</Text>}
                                        />
                      {/* <Text style={{ color: 'black', fontSize: 11, marginLeft: ScreenWidth * 1.5 / 100, fontWeight: 'bold' }}>{item.registrationFee}</Text> */}
                    </View>
                    <TouchableOpacity style={{ width: ScreenWidth * 35 / 100, height: ScreenHeight * 6 / 100, borderRadius: 30, backgroundColor: '#0064c2', elevation: 10, marginTop: ScreenHeight * 2 / 100, alignSelf: 'center' }} onPress={() => this.abcde(index)}>

                      <Text style={{ alignSelf: 'center', top: ScreenHeight * 1.5 / 100, color: 'white', fontSize: 12 }}> Join Now</Text>

                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }
          })}
        </View>
      </ScrollView>)
  }
}
const styles = StyleSheet.create({
  info: {
    left: ScreenWidth * 3 / 100,
    fontSize: 12
  },
  boxsport: {
    width: ScreenWidth * 97 / 100,
    marginTop: ScreenHeight * 1 / 100,
    marginLeft: ScreenHeight * 1 / 100,
    height: ScreenHeight * 25 / 100,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    elevation: 5
  },
  datalokasi: {
    width: ScreenWidth * 52 / 100,

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
    height: ScreenHeight * 22 / 100,
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
    left: ScreenWidth * 0 / 100
  },
  gambarlp: {
    width: ScreenWidth * 40 / 100,
    height: ScreenHeight * 22 / 100,
    backgroundColor: 'white'
  }
});
function mapStateToProps(state) {
  return {
    matchSportId: state.matchSportId,
    // password: state.password,
    // subsystemid: state.subsystemid,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setMatchIdChoosen: (matchIdChoosen) => {
      dispatch(setMatchIdChoosen(matchIdChoosen))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match)