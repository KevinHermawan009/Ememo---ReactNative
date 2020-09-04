import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input,Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/InputCuti'


class RegisterSport extends Component {

  constructor(props) {
    super(props)
    // this.defaultDate = props.defaultDate;
    //this.minDateProp = props.minDate;
    this.state = {
      selected2: undefined
    }
  }
  abc = () => {
    Actions.Criteria()
  }
  member = () => {
    Actions.MemberSportList()
  }
  // onValueChange2(value: '123') {
  //   this.setState({
  //     selected2: value
  //   });
  // }
  match = () =>{
    Actions.Match()
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
      <View style={{ backgroundColor: 'white',height:ScreenHeight }}>
      <ScrollView>
      <View >
        <View style={{marginTop:ScreenHeight*2/100}}>
      <View style={styles.container1}>
        <View style={styles.cquestion1}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Company Name</Text>
            <View style={{bottom:ScreenWidth*2/100}}>
            <Item>
            <Input style={{fontSize:12,marginBottom:ScreenHeight*-2/100}} placeholder="Input Company Name" />
          </Item>
          </View>
        </View>
        <View style={styles.cquestion1}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Company Detail Address</Text>
            <View style={{bottom:ScreenWidth*2/100}}>
            <Item>
            <Input style={{fontSize:12,marginBottom:ScreenHeight*-2/100}} placeholder="Input Company Address" />
          </Item>
          </View>
        </View>
        <View style={styles.cquestion1}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Company City Address</Text>
            <View style={{bottom:ScreenWidth*2/100}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined,fontSize:12,marginBottom:ScreenHeight*-2/100 }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0"/>
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </View>
        </View>
        <View style={styles.cquestion1}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Company District Address</Text>
            <View style={{bottom:ScreenWidth*2/100}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined,fontSize:12,marginBottom:ScreenHeight*-2/100 }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0"/>
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </View>
        </View>
        <View style={styles.cquestion1}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Company ZipCode</Text>
            <View style={{bottom:ScreenWidth*2/100}}>
            <Item>
            <Input style={{fontSize:12,marginBottom:ScreenHeight*-2/100}} placeholder="Input Company ZipCode" />
          </Item>
          </View>
        </View>
      {/* <TouchableOpacity onPress={this.abc} style={styles.next}>
        <Text style={{color:'white',textAlign:'center',marginTop:ScreenHeight*2/100}}>Next</Text>
      </TouchableOpacity> */}
      </View>
      </View>
      </View>
      </ScrollView>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container1:{
    backgroundColor:'white',
    height:ScreenHeight*90/100

},
cquestion1:{
  width:ScreenWidth*90/100,
  height:ScreenHeight*10/100,
  backgroundColor:'white',
  marginLeft:ScreenWidth*5/100

},
  next:{
    alignSelf:'center',
    marginTop:ScreenHeight*5/100,
    backgroundColor:'dodgerblue',
    width:ScreenWidth*30/100,
    height:ScreenHeight*7/100,
    borderRadius:30,
    elevation:10
    
  },
  iconbox: {
    width: ScreenWidth * 18.5 / 100,
    height: ScreenHeight * 10 / 100,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 126, 1)',
    borderRadius: 60,
    alignItems: 'center',
    marginLeft: ScreenWidth * 5.3 / 100,
    top:ScreenHeight*10/100,
    borderWidth:1,
    borderColor:'yellow',
    elevation:5

  },
  kotakicon: {
    height: ScreenHeight * 43 / 100,
    width: ScreenWidth * 100 / 100,
    backgroundColor: 'white',
    top: ScreenHeight * 14.55 / 100,
    alignContent: 'center',
    elevation: 10,
    borderTopWidth:2,
    borderColor:'black'
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
  topkonten: {
    bottom: ScreenHeight*42/100,
    backgroundColor: 'white',
    height: ScreenHeight * 20 / 100,
    width: ScreenWidth * 95 / 100,
    left: ScreenWidth * 2.5 / 100,
    borderRadius: 6,
    elevation: 10.5
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
    // username: state.username,
  }
}
function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSport)
