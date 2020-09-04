import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ScrollView,Image, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading } from 'native-base';
import { setMatchIdChoosen, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/FontAwesome';

const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindMatch'


const createTwoButtonAlert = () =>
    Alert.alert(
      "Berhasil Menghapus",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    );
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
const link1 = 'https://wsdl.maybankfinance.co.id/uat/MAC/getuserdetail'

class MatchSaya extends Component {
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
            data:[]
        }


    }
    abcde = (index) => {
      this.props.setMatchIdChoosen(this.state.data[index].matchId),
      Actions.IsiMatchSaya()
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
          // "sportType": this.props.sportid,
         
          "sportType": "6",
          "CompanyId": this.props.companyId
          // "CompanyId": "100019"
        })
    })
        .then(response => response.json())
        .then(res => {
            this.setState({
                data: res.retval1
            })
        
        })
}
componentDidMount(){
  this.submitt();
}
  datapeserta = () => {
    Actions.DataPesertaLomba()
}

    render() {
        return (
          <View>
            <ScrollView>
            {this.state.data.map((item, index) => {
                    return (
         
                <View style={styles.kotaklapang}>
                  <View style={styles.baner}>
                    <Text style={{ color: 'white', textAlign: 'right', right: ScreenWidth * 2 / 100,top:ScreenHeight*0.5/100 }}>{item.matchName}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Image   source={{ uri: 'data:image/jpeg;base64,' +item.uploadGambar }} style={styles.logoperlombaan}   resizeMode="stretch"/>
               
                    <View style={styles.info}>
                      <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                      
                    <Text style={{ color: 'black',fontWeight:'bold' }}>
                    Match Host: {item.hostName}
                   </Text>
                      </View>
                      <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                      
                    <Text style={{ color: 'black',fontWeight:'bold' }}>Gender: {item.genderType}</Text>
                      </View>
             
             
                      <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                      
                    <Text style={{ color: 'black',fontSize:12,fontWeight:'400' }}>Slot Avaible: {item.slotAvailable}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                      
                      <Text style={{ color: 'black',fontSize:12,fontWeight:'400' }}>Loaction: {item.location}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                      
                      <Text style={{ color: 'black',fontSize:12,fontWeight:'400' }}>Status: {item.status}</Text>
                        </View>
               
                      <View style={{ flexDirection: 'row', width: ScreenWidth * 55 / 100, backgroundColor: 'white', top: ScreenHeight * 1 / 100, borderRadius: 10,marginTop:ScreenHeight*0/100 }}>
                        <TouchableOpacity onPress={()=> this.abcde(index)}>
                          <View style={{ width: ScreenWidth * 28 / 100, height: ScreenHeight * 6 / 100, backgroundColor: '#0064c2', borderRadius: 10, elevation: 10 }}>
                          <Text style={{ alignSelf: 'center', top: ScreenHeight * 1.5 / 100, color: 'white',fontSize:12,fontWeight:'bold' }}>Close </Text>
               
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.datapeserta}>
                          <View style={{ width: ScreenWidth * 28 / 100, height: ScreenHeight * 6 / 100, backgroundColor: '#0064c2', marginLeft: ScreenWidth *1/ 100, borderRadius: 10, elevation: 10 }}>
          
                            <Text style={{ alignSelf: 'center', top: ScreenHeight * 1.5 / 100, color: 'white',fontSize:10,fontSize:12,fontWeight:'bold' }}>Participant</Text>
                          </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={createTwoButtonAlert}>
                          <View style={{ width: ScreenWidth * 18 / 100, height: ScreenHeight * 6 / 100, backgroundColor: '#0064c2', marginLeft: ScreenWidth *1 / 100, borderRadius: 10, elevation: 10 }}>
                            <Text style={{ alignSelf: 'center', top: ScreenHeight * 2 / 100, color: 'white',fontSize:10 }}>Delete</Text>

                          </View>
                        </TouchableOpacity> */}
                     
                      </View>
                    </View>
                  </View>
                </View>
         
                      )
                    })}
            </ScrollView>
          </View>)
      }
    }
    const styles = StyleSheet.create({
        info: {
          left: ScreenWidth * 3 / 100,
          fontSize: 12
        },
        kotaklapang: {
          width: ScreenHeight * 56 / 100,
          height: ScreenHeight * 25 / 100,
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          borderColor: 'white',
          marginTop:ScreenHeight*1/100
        },
        baner: {
          width: ScreenWidth * 99/ 100,
          height:ScreenHeight*4/100,
          backgroundColor: '#FF7314',
          borderTopEndRadius: 10,
          borderTopLeftRadius: 10,
          left: ScreenWidth * 0 / 100
        },
        logoperlombaan: {
          width: ScreenWidth * 37 / 100,
          left: ScreenWidth * 1 / 100,
          top: ScreenHeight * 0.5 / 100,
          height: ScreenHeight * 20 / 100,
 
        }
      });
function mapStateToProps(state) {
    return {
      companyId: state.companyId,
        sportid: state.sportid
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
       


       setMatchIdChoosen: (matchIdChoosen) => {
        dispatch(setMatchIdChoosen(matchIdChoosen))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MatchSaya)