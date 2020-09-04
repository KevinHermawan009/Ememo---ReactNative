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


class MemberLocation extends Component {
abcd= () =>{
  Actions.DetailMemberLocation()
}
abcde= () =>{
  Actions.Booking()
}
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ backgroundColor: 'gray', width: ScreenWidth}}>
            <View style={styles.kotaklapang}>
              <View style={styles.baner}>
                <Text style={{ color: 'white', textAlign: 'right', right: ScreenWidth * 2 / 100 }}>HOLLY MOLLEY!!</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <ImageBackground source={require('../image/mie.jpg')} style={styles.gambarlp}>
                </ImageBackground>
                <View style={styles.info}>
                  <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                    <View style={{ top: ScreenHeight * 1 / 100 }}>
                      <Icon name="map-marker" style={{ color: 'black' }} size={10} />
                    </View>
                    <Text style={{ color: 'black' }}>JL.Grogol petamburan Wisma Eka Jiwa lantai 7</Text>
                  </View>
                  <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                    <View style={{ top: ScreenHeight * 1 / 100 }}>
                      <Icon name="phone-square" style={{ color: 'black' }} size={10} />
                    </View>
                    <Text style={{ color: 'black' }}>081318947729</Text>
                  </View>
                  <View style={{ flexDirection: 'row', backgroundColor: 'white', width: ScreenWidth * 55 / 100 }}>
                    <View style={{ top: ScreenHeight * 0.5 / 100 }}>
                      <Icon name="star" style={{ color: 'black' }} size={10} />
                    </View>
                    <Text style={{ color: 'black',fontSize:12 }}>4.1</Text>
                  </View>
                  <View style={{ flexDirection: 'row', width: ScreenWidth * 55 / 100, backgroundColor: 'white', top: ScreenHeight * 1 / 100, borderRadius: 10 }}>
                    <TouchableOpacity onPress={this.abcd}>
                      <View style={{ width: ScreenWidth * 25 / 100, height: ScreenHeight * 7 / 100, backgroundColor: '#0064c2', borderRadius: 10, elevation: 10 }}>
                        <Text style={{ alignSelf: 'center', top: ScreenHeight * 2 / 100, color: 'white' }}> Detail</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(MemberLocation)