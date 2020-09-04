import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View, ScrollView, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading } from 'native-base';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/FontAwesome';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const nonaktifkan = () =>
Alert.alert(
    "Apakah Anda Yakin Ingin Menghapus Lapangan Ini?",
    "Tekan OK untuk melanjutkan penhgapusan",
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
class DataSewa extends Component {
abcd= () =>{
  Actions.DetailLapanganAdm()
}
abcde= () =>{
  Actions.Booking()
}
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ backgroundColor: 'gray', width: ScreenWidth, height: ScreenHeight }}>
            <View style={styles.kotaklapang}>
              <View style={styles.baner}>
                <Text style={{ color: 'white', textAlign: 'right', right: ScreenWidth * 2 / 100 }}>BASKET - Lapangan Andaliman</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <ImageBackground source={require('../image/lapangan1.jpg')} style={styles.gambarlp}>
                </ImageBackground>
                <View style={styles.info}>
              
     
                  <View style={{ flexDirection: 'row', width: ScreenWidth * 55 / 100,marginTop:ScreenHeight*2/100,marginLeft:ScreenWidth*3/100 }}>
                    <View style={{ top: ScreenHeight * 0.5 / 100 }}>
                      <Icon name="star" style={{ color: 'black' }} size={10} />
                    </View>
                    <Text style={{ color: 'black',fontSize:12 }}>4.1</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: ScreenWidth * 55 / 100, top: ScreenHeight * 1 / 100, borderRadius: 10 }}>
                    <TouchableOpacity onPress={this.abcd}>
                      <View style={{ width: ScreenWidth * 25 / 100, height: ScreenHeight * 7 / 100, backgroundColor: '#FF7314',marginLeft:ScreenWidth*2/100, borderRadius: 10, elevation: 10 }}>
                        <Text style={{ alignSelf: 'center', top: ScreenHeight * 2 / 100, color: 'white' }}> Atur</Text>
                      </View>
                    </TouchableOpacity>
             
              
                  </View>
                </View>
              </View>
            </View>
          </View>
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
    borderColor: 'gray'
  },
  baner: {
    width: ScreenWidth * 100 / 100,
    backgroundColor: '#0064c2',
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    left: ScreenWidth * 0 / 100
  },
  gambarlp: {
    width: ScreenWidth * 40 / 100,
    left: ScreenWidth * 1 / 100,
    top: ScreenHeight * 0.5 / 100,
    height: ScreenHeight * 20.5 / 100,
    backgroundColor: 'red'
  }
});
function mapStateToProps(state) {
  return {
    // username: state.username,
    // password: state.password,
    // subsystemid: state.subsystemid,
  }
}
function mapDispatchToProps(dispatch) {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DataSewa)