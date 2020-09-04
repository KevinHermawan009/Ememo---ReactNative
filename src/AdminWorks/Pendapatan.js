import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, AsyncStorage,TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { setCompanyDetailAddress, setCompanyName, setSpotChoosen, setKotaCompany,setKelurahanCompany,setKecamatanCompany} from '../Redux/Action';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCompanyAddField'


class Pendapatan extends Component {

    constructor(props) {
        super(props)
        // this.defaultDate = props.defaultDate;
        //this.minDateProp = props.minDate;
        this.state = {
            data:[],
            selected2: undefined
        }
    }
    DashboardAdmin = () => {
        Actions.TabsAdmin()
    }
    Gotodatapendapatan = (index) => {

        this.props.setSpotChoosen(this.state.data[index].idField),
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
                "CompanyId": "100019",
                "SportType": "6"

                // "CompanyId": this.props.companyId,
                // "SportType": this.props.sportid
            })
        })
            .then(response => response.json())
            .then(res => {

               this.setState({
                   data: res.Retval
               })
            })
    }
    back() {
        Actions.Tab2()
    }
    componentDidMount(){
        this.submitt();
    }
    render() {
        return (
            <View style={styles.container1}>
               
               {/* <View><Text>GELLO</Text></View> */}
               {this.state.data.map((item, index) => {
                    return (
                    <View 
                    style={{
                        flexDirection:'row',
                        marginTop:ScreenHeight*1/100,
                        borderColor:'#0064c2',
                        borderWidth:1,
                        width:ScreenWidth*96/100,
                        alignSelf:'center',
                        borderRadius:10
                        }}>
                        <View 
                        style={{
                            flexDirection:'column', 
                            marginTop:ScreenHeight*1/100,
                            marginBottom:ScreenHeight*1/100, width:ScreenWidth*63/100,backgroundColor:'white',marginLeft:ScreenWidth*0.5/100
                            }}>
                        <Text style={styles.judul}>Field Name: {item.namaLapangan}</Text>
                        <Text style={styles.txt1}>Field Id: {item.idField}</Text>
                        </View>
                        <TouchableOpacity 
                        onPress={()=> this.Gotodatapendapatan(index)}
                        style={{
                            width:ScreenWidth*30/100,
                            backgroundColor:'#FF7314',
                            height:ScreenHeight*5/100,
                            marginTop:ScreenHeight*1/100,
                            marginLeft:ScreenWidth*0/100,
                            borderRadius:10
                        }}>
                            <Text style={{textAlign:'center',margin:ScreenHeight*1.2/100,color:'white', fontSize:12}}>
                                Income
                            </Text>

                        </TouchableOpacity>
                    </View>
  
  )
})}
         
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
        companyId: state.companyId,
        sportid: state.sportid,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setSpotChoosen: (spotChoosen) => {
            dispatch(setSpotChoosen(spotChoosen))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pendapatan)
