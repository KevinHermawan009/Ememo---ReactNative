import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading } from 'native-base';
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

// const createTwoButtonAlert = () =>
//     Alert.alert(
//       "Apakah Anda Yakin Ingin Menutup Pendaftaran",

//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "OK", onPress: () => TakePhoto }
//       ],
//       { cancelable: true }
//     );

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindDetailMatch'
const link2 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/UpdateStatusMatch'

class IsiMatchSaya extends Component {
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
    componentDidMount(){
        this.getData();
    }
    getData = () => {
        fetch(link, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // "CompanyId": "100019",
            // "MatchId": "14"
            "CompanyId": this.props.companyId,
            "MatchId": this.props.matchIdChoosen
          })
    
        })
          .then(response => response.json())
          .then(res => {
            this.setState({
              data: res.retval1
            })
          })
          .catch((error) => {
            console.error(error);
          });
      }
    TakePhoto = (index) =>{
        // alert("Hello")
        fetch(link2, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            //   "CompanyId": "100019",
            //   "MatchId": "14"
            "MatchId": this.state.data[index].matchId,
              "CompanyId": this.state.data[index].companyId
            })
      
          })
            .then(response => response.json())
            .then(res => {
             if(res.retval == 'Sukses'){
                 alert("Match Closed")
                 Actions.TabssAdmin()
             }
             else{

             }
            })
            .catch((error) => {
              console.error(error);
            });
    }
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
            <ScrollView >
                
                <View style={{ width: ScreenWidth, flex: 1,backgroundColor:'white' }}>
                {this.state.data.map((item, index) => {
                    return (
                        <View>
                    <View>

                    <Image   source={{ uri: 'data:image/jpeg;base64,' +item.uploadGambar }} style={styles.gambarlp}   resizeMode="stretch"/>
                    
                    </View>
                    <View style={styles.dc1}>
                        <Text style={styles.textbaner}>Match Description</Text>
                    </View>
                    <View style={styles.isidc}>
                    <Text style={styles.deskripsi}>{item.description}</Text>
                    </View>
                    <View style={styles.dc1}>
                        <Text style={styles.textbaner}>Match Rules Information</Text>
                    </View>
                    <View style={styles.isidc}>
                        <View style={{flexDirection:'row'}}> 
                        <View style={{ flexDirection: 'column'}}>
                            <Text style={styles.x1}>Gender
                        </Text>
                            <Text style={styles.x1}>Slot Avaible
                        </Text>
                            <Text style={styles.x1}>Age
                        </Text>
                            <Text style={styles.x1}>Registration Fee
                        </Text>
                            <Text style={styles.x1}>Date Start
                        </Text>
                            <Text style={styles.x1}>Date End
                        </Text>
                         
                        </View>
                        <View style={{ flexDirection: 'column',marginLeft:ScreenHeight*1/100,marginRight:ScreenHeight*1/100}}>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                         
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.x1}>{item.genderType}
                        </Text>
                            <Text style={styles.x1}>{item.slotAvailable}
                        </Text>
                            <Text style={styles.x1}>{item.age}
                        </Text>

                        <NumberFormat
                                            value={item.registrationFee}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.x1}>{value}</Text>}
                                        />
    
                            <Text style={styles.x1}>{item.dateMatchStart}
                        </Text>
                            <Text style={styles.x1}>{item.dateMatchEnd}
                        </Text>
                          
                        </View>
                        </View>
                    </View>
                    <View style={styles.dc1}>
                        <Text style={styles.textbaner}>Match Location</Text>
                    </View>
                    <View style={styles.isilc}>
                        <Text style={{ color: 'black', textAlign: 'center',width:ScreenWidth*96/100 }}>{item.location}
                </Text>
                    </View>
                    <View style={styles.dc1}>
                        <Text style={styles.textbaner}>Match Host Information</Text>
                    </View>
                    <View style={styles.isilc}>
                        <Text style={{ color: 'black', textAlign: 'center',width:ScreenWidth*96/100 }}>{item.hostName}
                </Text>
                    </View>
                    <View style={styles.isilc}>
                        <Text style={{ color: 'black', textAlign: 'center',width:ScreenWidth*96/100 }}>{item.hostContactNumber}
                </Text>
                    </View>
                    <View style={styles.dc1}>
                        <Text style={styles.textbaner}>Prize</Text>

                    </View>
                    <View style={styles.isidc}>
                        <View style={{flexDirection:'row'}}> 
                        <View style={{ flexDirection: 'column'}}>
                            <Text style={styles.x1}>First Prize
                        </Text>
                            <Text style={styles.x1}>Second Prize
                        </Text>
                            <Text style={styles.x1}>Third Prize
                        </Text>
                            <Text style={styles.x1}>Other Prize
                        </Text>
                          
                        </View>
                        <View style={{ flexDirection: 'column',marginLeft:ScreenHeight*1/100,marginRight:ScreenHeight*1/100}}>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                            <Text style={styles.x11}>:
                        </Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>

                        <NumberFormat
                                            value={item.prize1st}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.x1}>{value}</Text>}
                                        />
                                                        <NumberFormat
                                            value={item.prize2nd}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.x1}>{value}</Text>}
                                        />
                                                        <NumberFormat
                                            value={item.prize3rd}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'Rp'}
                                            renderText={value => <Text style={styles.x1}>{value}</Text>}
                                        />
                          
                            <Text style={styles.x1}>{item.anotherPrize}
                        </Text>
                       
                        </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=> this.TakePhoto(index)}>
                          <View style={{ width: ScreenWidth * 50 / 100, height: ScreenHeight * 7 / 100, backgroundColor: '#0064c2', alignSelf:'center', borderRadius: 30, elevation: 10,marginBottom:ScreenHeight*1/100 }}>
                            <Text style={{ alignSelf: 'center', top: ScreenHeight * 2 / 100, color: 'white',fontSize:14, fontWeight:'bold' }}>Close Registration</Text>

                          </View>
                        </TouchableOpacity>
                    </View>
                       )
                    })}
                </View>
              
            </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    View1: {
        width: ScreenWidth,
        height: ScreenHeight * 100 / 100,

        backgroundColor: 'transparent',




    },
    Layar1: {

        height: ScreenHeight * 100 / 100,
        width: ScreenWidth * 100 / 100,

        top: ScreenHeight * 0 / 100,

        backgroundColor: 'transparent',


    },
    txt0: {
        left: ScreenHeight * 1 / 100, fontSize: 14
    },
    judultxt: {
        fontSize: 20,
        color: '#0064c2',
        fontWeight: 'bold',
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
    iconst: {
        backgroundColor: '#0064c2',
        width: ScreenWidth * 15.5 / 100,
        marginLeft: ScreenWidth * 7.5 / 100,
        height: ScreenHeight * 8.2 / 100,
        top: ScreenHeight * 2 / 100,
        borderRadius: 100,
        flexDirection: 'column'


    },
    gambarlp: {
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 40 / 100,
        alignSelf: 'center'
    },
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        top: ScreenHeight * 5 / 100,

        backgroundColor: 'transparent',

    },
    x1: {
        fontSize: 14,
        color: 'black',
        width:ScreenWidth*45/100,backgroundColor:'transparent'
    },
    x11: {
        fontSize: 14,
        color: 'black',
        width:ScreenWidth*1/100,backgroundColor:'transparent'
    },
    isilc: {
        width: ScreenWidth,
        marginTop:ScreenHeight*2/100,
        marginBottom:ScreenHeight*2/100,
        backgroundColor:'white'
    },
    isidc: {
        marginTop:ScreenHeight*2/100,
        marginBottom:ScreenHeight*2/100,
        width:ScreenWidth,
        alignItems:'center'
        

    },
    isidcxx: {
        width: ScreenWidth * 97 / 100,
        flexDirection: 'row',
        height: ScreenHeight * 10 / 100,
        marginLeft: ScreenWidth * 24.2 / 100,
        marginTop:ScreenHeight*2/100,
        marginBottom:ScreenHeight*2/100

    },
    isiop: {
        marginTop: ScreenHeight * 2 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,

        height: ScreenHeight * 15 / 100,
        flex: 1,
        flexDirection: 'column'
    },
    textbaner: { fontSize: 14, textAlign: "center", color: 'white', fontWeight: 'bold', margin:5 },
    dc1: {
        backgroundColor: '#0064c2',
        elevation: 3,
        width:ScreenWidth
    },
    kotak1: {
        height: ScreenHeight * 15 / 100,
        backgroundColor: 'white',
        width: ScreenWidth * 96 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenHeight * 1 / 100,
        borderRadius: 10,
        borderWidth: 1
    },
    deskripsi:{
        color:'black',
        textAlign:'center'
        
    }
})
function mapStateToProps(state) {
    return {
        companyId: state.companyId,
        matchIdChoosen: state.matchIdChoosen
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IsiMatchSaya)