import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, AsyncStorage,TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/InputCuti'


class KontakKami extends Component {

    constructor(props) {
        super(props)
        // this.defaultDate = props.defaultDate;
        //this.minDateProp = props.minDate;
        this.state = {
            selected2: undefined
        }
    }
    DashboardAdmin = () => {
        Actions.TabsAdmin()
    }
    datapendapatan = () => {
        Actions.DataPendapatan()
    }
    isimatch = () => {
        Actions.MatchType()
    }
    logOut = async () => {
        try {
            const remove = await AsyncStorage.removeItem('key1');
            const remove1 = await AsyncStorage.removeItem('key2');
            const remove2 = await AsyncStorage.removeItem('key3');
            const value = await AsyncStorage.getItem('key1');
            const value1 = await AsyncStorage.getItem('key2');
            const value2 = await AsyncStorage.getItem('key3');
            Actions.LoginType()
        } catch (error) {
            alert("Error resettting data" + error);
        }
    }
    abc = () => {
        Actions.BusinessCareType()
    }
    // onValueChange2(value: '123') {
    //   this.setState({
    //     selected2: value
    //   });
    // }
    Register = () => {
        Actions.RegisterType()
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
            <View style={styles.container1}>
               
               

                    <View 
                    style={{
                        flexDirection:'row',
                        marginTop:ScreenHeight*1/100,

                        borderWidth:1,
                        width:ScreenWidth*96/100,
                        alignSelf:'center',
                        borderRadius:10
                        }}>
                        <View 
                        style={{
                            flexDirection:'column', 
                            marginTop:ScreenHeight*1/100,
                            marginBottom:ScreenHeight*1/100
                            }}>
                        <Text style={styles.judul}>FitAccess Email</Text>
                        <Text style={styles.txt1}>FitAccess@gmail.co.id</Text>
            
                        </View>
                 
                    </View>
                    <View 
                    style={{
                        flexDirection:'row',
                        marginTop:ScreenHeight*1/100,

                        borderWidth:1,
                        width:ScreenWidth*96/100,
                        alignSelf:'center',
                        borderRadius:10
                        }}>
                        <View 
                        style={{
                            flexDirection:'column', 
                            marginTop:ScreenHeight*1/100,
                            marginBottom:ScreenHeight*1/100
                            }}>
 
                        <Text style={styles.judul}>FitAccess Nomor Telepon</Text>
                        <Text style={styles.txt1}>+6281318947729</Text>
                        </View>
                 
                    </View>
  
              
         
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container1: {
        height: ScreenHeight,
        backgroundColor:'white'
    },
    kotak1: {
        height: ScreenHeight*17/100,
        width:ScreenWidth,
        backgroundColor:'#116979',
        borderBottomWidth:2,
        borderColor:'#116979'
     
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: ScreenHeight * 1/ 100,
        width: ScreenWidth * 90 / 100,
        alignSelf: 'center',
        elevation:2,
        flexDirection:'row',
        borderColor:'gray',
        borderWidth:0.1

    },
    gambar1: {
        width: ScreenWidth * 12.5 / 100,
        height: ScreenHeight * 7 / 100,
        marginLeft:ScreenWidth*1/100,
        marginTop:ScreenHeight*0.5/100

    },
    iconbox: {
        width: ScreenWidth * 18.5 / 100,
        height: ScreenHeight * 10 / 100,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 126, 1)',
        borderRadius: 60,
        alignItems: 'center',
        marginLeft: ScreenWidth * 5.3 / 100,
        top: ScreenHeight * 10 / 100,
        borderWidth: 1,
        borderColor: 'yellow',
        elevation: 5

    },
    txt1: {
        fontWeight:'bold',
        fontSize:12,
        marginLeft:ScreenWidth*5/100,
        marginTop:ScreenHeight*0/100,
        color:'black'
    },
    judul: {
        fontWeight:'bold',
        fontSize:17,
        marginLeft:ScreenWidth*5/100,
        marginTop:ScreenHeight*0/100,
        color:'black'
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
        backgroundColor: 'white',
        height: ScreenHeight * 14 / 100,
        width: ScreenWidth * 100 / 100,

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

export default connect(mapStateToProps, mapDispatchToProps)(KontakKami)
