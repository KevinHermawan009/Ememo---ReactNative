import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button } from 'native-base';





const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://wsdl.maybankfinance.co.id/uat/MAC/getuserdetail'

class MemberPayment extends Component {
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
      visible2: false
    }


  }
  render() {
    return (
      <View style={{ height: ScreenHeight, width: ScreenWidth, backgroundColor: 'white' }}>
        <View style={{ marginLeft: ScreenWidth * 2 / 100 }}>
          <Text style={styles.judultxt}>Detail Booking
                    </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="calendar-plus-o" style={{ color: 'black' }} size={14} />
            <Text style={styles.txt0}>2020/09/01</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="calendar-check-o" style={{ color: 'black' }} size={14} />
            <Text style={styles.txt0}>2020/09/01</Text>
          </View>
          <Text style={styles.judultxt}>Payment Method
                    </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="money" style={{ color: 'black' }} size={14} />
            <Text style={styles.txt0}>Online Payment</Text>
          </View>
          <Text style={styles.judultxt}>Detail Location Descriptions
                    </Text>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.txt0}>COMETTA ARENA
                    </Text>
            <Text style={styles.txt0}>JL.Tiangseng No.06, Gsedung Wisma Eka Jiwa lantai 7 - IT Development, Jakarta Utara sebelah mangga dual mall
                    </Text>
            <Text style={styles.txt0}>
            </Text>
            <Text style={{ left: ScreenHeight * 1 / 100, fontSize: 14, color: 'dodgerblue' }}>Sport Type: Gymnastic
                    </Text>
          </View>

        </View>
        <View style={styles.kotakdetail}>
          <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 24 / 100 }}>

            <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 24 / 100 }}>
              <Text style={styles.txt1}>Date</Text>
            </View>
            <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
              <Text style={styles.txt2}>Thu 20/20/2020</Text>

            </View>

          </View>
          <View style={{ height: ScreenHeight * 9.7 / 100, width: ScreenWidth * 15 / 100 }}>
            <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 15 / 100 }}>
              <Text style={styles.txt1}>Month</Text>
            </View>
            <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>

              <Text style={styles.txt2}>1</Text>

            </View>

          </View>
          <View style={{ height: ScreenHeight * 9.7 / 100, width: ScreenWidth * 25 / 100 }}>
            <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 25 / 100 }}>
              <Text style={styles.txt1}>Reg Fee</Text>
            </View>
            <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
              <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>

                <Text style={styles.txt2}>Rp. 250.000,00</Text>

              </View>
            </View>

          </View>
        
          <View style={{ height: ScreenHeight * 24.7 / 100, width: ScreenWidth * 31.5 / 100 }}>
            <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 31.5 / 100 }}>

              <Text style={styles.txt1}>Price</Text>

            </View>
            <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#d6f7ff' }}>
              <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>

                <Text style={styles.txt2}>Rp. 250.000,00</Text>

              </View>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: ScreenWidth * 2 / 100 }}>
        <Text style={styles.judultxt}>Detail Payment
                    </Text>
          <View style={styles.asd}>
            <Text style={{ left: ScreenWidth * 1 / 100, fontSize: 14, color: 'dodgerblue',fontWeight:'500' }}>Total Payment: 500k
                    </Text>
          </View>
          </View>
          <TouchableOpacity style={{alignSelf:'center',width:ScreenWidth*40/100,backgroundColor:'dodgerblue',height:ScreenHeight*7/100,borderRadius:10,top:ScreenHeight*5/100}}>
            <Text style={{textAlign:'center',fontSize:14,color:'white',top:ScreenHeight*1.5/100}}>Pay Now</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  judultxt: {
    fontSize: 20,
    color: '#0064c2',
    fontWeight: 'bold',
  },
  asd:{
    width:ScreenWidth*50/100,
    height:ScreenHeight*4/100,
    borderRadius:10,
    borderWidth:1,
    borderColor:'dodgerblue'

  },
  txt1: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white'
  },
  txt0:{
    left: ScreenHeight * 1 / 100, fontSize: 14,
    color:'black'
  },
  txt2: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black'
  },
  kotakdetail: {
    backgroundColor: 'white',
    height: ScreenHeight * 15 / 100,
    width: ScreenWidth * 96 / 100,
    flexDirection: 'row',
    marginLeft: ScreenHeight * 1.2 / 100,
    borderWidth: 1,
    borderColor: 'dodgerblue'
  },
  Layar1: {

    height: ScreenHeight * 100 / 100,
    width: ScreenWidth * 100 / 100,

    top: ScreenHeight * 0 / 100,

    backgroundColor: 'transparent',


  },
  Foto: {
    height: ScreenHeight * 20 / 100,
    width: ScreenWidth * 30 / 100,
    top: ScreenHeight * 5 / 100,

    backgroundColor: 'transparent',

  },
})
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

export default connect(mapStateToProps, mapDispatchToProps)(MemberPayment)