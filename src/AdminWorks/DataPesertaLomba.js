import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, AsyncStorage, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/BindCustomerMatch'


class DataPesertaLomba extends Component {

    constructor(props) {
        super(props)
        // this.defaultDate = props.defaultDate;
        //this.minDateProp = props.minDate;
        this.state = {
            selected2: undefined,
            data: []
        }
    }
    DashboardAdmin = () => {
        Actions.TabsAdmin()
    }
    member = () => {
        Actions.MemberSportList()
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
                "MatchId": "6"
            })
        })
            .then(response => response.json())
            .then(res => {

                this.setState({

                    data: res.RetVal
                })
            })
    }
    back() {
        Actions.Tab2()
    }
    componentDidMount() {
        this.submitt()
    }
    render() {
        return (
            <View style={styles.container1}>
                <ScrollView>
                {this.state.data.map((item, index) => {
                    return (



                        <View style={{
                            flexDirection: 'row',

                            borderWidth: 1,
                            margin: 6,
                            borderRadius: 10,
                            backgroundColor: '#FF7314',
                            borderColor: '#FF7314'

                        }}>
                            <View style={{ margin: 6 }}>

                                <Text style={styles.txt12}>Name</Text>
                                <Text style={styles.txt12}>Match Id</Text>
                                <Text style={styles.txt12}>Customer Id</Text>
                                <Text style={styles.txt12}>Transaction Id</Text>
                                <Text style={styles.txt12}>Date Transaction</Text>
                            </View>
                            <View style={{ margin: 6 }}>

                                <Text style={styles.txt1}>:</Text>
                                <Text style={styles.txt1}>:</Text>
                                <Text style={styles.txt1}>:</Text>
                                <Text style={styles.txt1}>:</Text>
                                <Text style={styles.txt1}>:</Text>
                            </View>
                            <View style={{ margin: 6 }}>

                                <Text style={styles.txt1}>{item.namaLengkap}</Text>
                                <Text style={styles.txt1}>{item.id}</Text>
                                <Text style={styles.txt1}>{item.customerId}</Text>
                                <Text style={styles.txt1}>{item.kodeTransaksi}</Text>
                                <Text style={styles.txt1}>{item.tanggalBayar}</Text>
                            </View>


                        </View>


                    )
                })}
</ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container1: {

        backgroundColor: 'white'
    },
    kotak1: {
        height: ScreenHeight * 17 / 100,
        width: ScreenWidth,
        backgroundColor: '#116979',
        borderBottomWidth: 2,
        borderColor: '#116979'

    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: ScreenHeight * 1 / 100,
        width: ScreenWidth * 90 / 100,
        alignSelf: 'center',
        elevation: 2,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 0.1

    },
    gambar1: {
        width: ScreenWidth * 12.5 / 100,
        height: ScreenHeight * 7 / 100,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 0.5 / 100

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
        fontWeight: '300',
        fontSize: 12,
        margin: 0,
        marginLeft: ScreenWidth * 2 / 100,
        color: 'white'
    },
    txt12: {
        fontWeight: 'bold',
        fontSize: 12,
        margin: 0,
        marginLeft: ScreenWidth * 2 / 100,
        color: 'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(DataPesertaLomba)
