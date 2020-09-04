import DatePicker from 'react-native-datepicker'
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { setSportId } from '../Redux/Action';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/InputCuti'


class BusinessCareType extends Component {

    constructor(props) {
        super(props)
        // this.defaultDate = props.defaultDate;
        //this.minDateProp = props.minDate;
        this.state = {
            selected2: undefined,
            selected2: undefined,
            soccerid: '4',
            tennisid: '6',
            tennismejaid: '5',
            basketid: '3',
            volleyid: '2',
            badmintonid: '1',
        }
    }
    IsiData = () => {
        Actions.DetailLapanganAdm()
    }
    member = () => {
        Actions.MemberSportList()
    }
    soccer = () => {

        this.props.setSportId(this.state.soccerid)
        Actions.DetailLapanganAdm()
    }
    badminton = () => {

        this.props.setSportId(this.state.badmintonid)
        Actions.DetailLapanganAdm()
    }
    tennismeja = () => {

        this.props.setSportId(this.state.tennismejaid)
        Actions.DetailLapanganAdm()
    }
    volley = () => {

        this.props.setSportId(this.state.volleyid)
        Actions.DetailLapanganAdm()
    }
    basketball = () => {

        this.props.setSportId(this.state.basketid)
        Actions.DetailLapanganAdm()
    }
    tennis = () => {

        this.props.setSportId(this.state.tennisid)
        Actions.DetailLapanganAdm()
    }
    match = () => {
        Actions.Match()
    }

    back() {
        Actions.Tab2()
    }
    render() {
        return (
            <View style={styles.container1}>
                <TouchableOpacity onPress={this.tennis} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/ball.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Tennis Arena</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.basketball} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/basketball.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Basketball Arena </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.volley} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/volleyball.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Volleyball Arena </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.soccer} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/soccer.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Soccer Arena</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.tennismeja} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/tt.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Table Tennis Arena</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.badminton} style={styles.button}>
                    <View style={{ flexDirection: 'row' }}>
                        <ImageBackground source={require('../image/badminton.png')}
                            style={styles.gambar1}>
                        </ImageBackground>
                        <View>
                            <Text style={styles.txt1}>Badminton Arena</Text>
                        </View>
                    </View>
                </TouchableOpacity>


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
        backgroundColor:'#ffff00',
        borderBottomWidth:2,
        borderColor:'dodgerblue'
     
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: ScreenHeight * 8 / 100,
        marginTop: ScreenHeight * 2 / 100,
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
        fontSize:14,
        marginLeft:ScreenWidth*5/100,
        marginTop:ScreenHeight*2.5/100,
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
        setSportId: (sportid) => {
            dispatch(setSportId(sportid))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCareType)
