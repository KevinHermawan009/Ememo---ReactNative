import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername,setPaymentId } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button } from 'native-base';
var NumberFormat = require('react-number-format');

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const Link_Payment = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindDetailBooking'

class Booking extends Component {
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
      data: [],
      totalTax: [],
      price: [],
      visible1: false,
      visible2: false
    }
  }
  OTPUser1 = () => {
    // this.setState({ spinner: false });

}
  gotoOTP = (index) => {
    this.props.setPaymentId(this.state.data[index].kodeTransaksi),
  
    Actions.OTPUser()
  }
  getDataPayment = () => {
    fetch(Link_Payment, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "BookingId": this.props.BookId
      })
    })
      .then(response => response.json())
      .then(
        res => {
          this.setState({
            data: res.RetVal,

          })
        })
  }
  componentDidMount() {
    this.getDataPayment();
  }
  render() {
    return (
      <View>
        {this.state.data.map((item, index) => {
          return (
            <View 
            key={index}
            style={{ height: ScreenHeight, width: ScreenWidth, backgroundColor: 'white' }}>

              <View style={{ marginLeft: ScreenWidth * 2 / 100 }}>
                <Text style={styles.judultxt}>Detail Booking
                    </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="calendar" style={{ color: 'black' }} size={14} />
                  <Text style={styles.txt0}>{this.props.bookDate}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="clock-o" style={{ color: 'black' }} size={14} />
                  <Text style={styles.txt0}>{this.props.startHour} - {this.props.endHour}</Text>
                </View>
                <Text style={styles.judultxt}>Payment Method - Id
                    </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name="money" style={{ color: 'black' }} size={14} />
                  <Text style={styles.txt0}>Online -{item.kodeTransaksi}</Text>
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
                    <Text style={styles.txt1}>Field Name</Text>
                  </View>
                  <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
                    <Text style={styles.txt2}>{this.props.namaLapangan}</Text>
                  </View>
                </View>
                <View style={{ height: ScreenHeight * 9.7 / 100, width: ScreenWidth * 20 / 100 }}>
                  <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 20 / 100 }}>
                    <Text style={styles.txt1}>Start at</Text>
                  </View>
                  <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
                    <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
                      <Text style={styles.txt2}>{this.props.startHour}</Text>
                    </View>
                  </View>
                </View>
                <View style={{ height: ScreenHeight * 24.7 / 100, width: ScreenWidth * 15 / 100 }}>
                  <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 15 / 100 }}>
                    <Text style={styles.txt1}>Price/hr</Text>
                  </View>
                  <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
                    <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
                    <NumberFormat
                  value={item.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp'}
                  renderText={value => <Text style={styles.txt2}>{value}</Text>}
                />
                    </View>
                  </View>
                </View>
                <View style={{ height: ScreenHeight * 24.7 / 100, width: ScreenWidth * 21.5 / 100 }}>
                  <View style={{ height: ScreenHeight * 5 / 100, backgroundColor: 'dodgerblue', width: ScreenWidth * 21.5 / 100 }}>
                    <Text style={styles.txt1}>Total Price</Text>
                  </View>
                  <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#d6f7ff' }}>
                    <View style={{ height: ScreenHeight * 9.7 / 100, backgroundColor: '#dff9ff' }}>
                      
                <NumberFormat
                  value={item.totalPrice}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp'}
                  renderText={value => <Text style={styles.txt2}>{value}</Text>}
                />
                      <Text style={styles.txt2}>{this.state.totalPrice}</Text>

                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: ScreenWidth * 2 / 100 }}>
                <Text style={styles.judultxt}>Detail Payment
                    </Text>
                <View style={styles.asd}>
                  <Text style={{ left: ScreenWidth * 1 / 100, fontSize: 14, color: 'dodgerblue', fontWeight: '500', marginTop: ScreenHeight * 0.5 / 100 }}>Total Payment + Tax 10%: 
            </Text>
                  <NumberFormat
                    value={item.totalTax}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'Rp'}
                    renderText={value => <Text style={{ left: ScreenWidth * 1 / 100, fontSize: 14, color: 'dodgerblue', fontWeight: '500', marginTop: ScreenHeight * 0.5 / 100 }}> {value}</Text>}
                  />

                </View>
              </View>
              <TouchableOpacity 
              onPress={() => this.gotoOTP(index)} 
              style={{ alignSelf: 'center', width: ScreenWidth * 40 / 100, backgroundColor: '#0064c2', height: ScreenHeight * 7 / 100, borderRadius: 30, top: ScreenHeight * 5 / 100 }}>
                <Text style={{ textAlign: 'center', fontSize: 14, color: 'white', top: ScreenHeight * 2 / 100, fontWeight:'bold' }}>Pay Now</Text>
              </TouchableOpacity>

            </View>
          )

        })}
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
  asd: {
    
    height: ScreenHeight * 4 / 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    marginTop: ScreenHeight * 0.5 / 100,
    flexDirection: 'row'

  },
  txt1: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white'
  },
  txt0: {
    left: ScreenHeight * 1 / 100, fontSize: 14, color: 'black'
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
    borderColor: 'dodgerblue',
    marginTop: ScreenHeight * 2 / 100
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
    bookDate: state.bookDate,
    startHour: state.startHour,
    endHour: state.endHour,
    BookId: state.BookId,
    namaLapangan: state.namaLapangan,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setPaymentId: (paymentId) => {
      dispatch(setPaymentId(paymentId))
  },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)