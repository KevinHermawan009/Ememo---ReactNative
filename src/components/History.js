import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, Alert, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button } from 'native-base';
import { setcompanyidRatingChoosen } from '../Redux/Action';


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/HistoryOnProgress'
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/HistoryPast'

class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OngoingData: [],
            idBanding: 'none',
            data2: [],
            pass:[]

        }
    }
    gotoRating = (index) => {
        this.props.setcompanyidRatingChoosen(this.state.OngoingData[index].companyID)
        Actions.rating()
    }
    bindOnGoing = () => {
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "CompanyId": this.props.companyidchoosen
                "CustomerId": this.props.customerId
    
            })

        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    OngoingData: res.retval

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    bindPass = () => {
        fetch(link1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "CompanyId": this.props.companyidchoosen
                "CustomerId": this.props.customerId
    
            })

        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    pass: res.retval

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.bindOnGoing();
        this.bindPass();
    }
    Past() {
        return (
            <View style={styles.bg1}>
                 {this.state.pass.map((item, index) => {
                return (
                            <View
                                key={index}
                                style={styles.btt1}>
                                <ImageBackground source={require('../image/FA2.png')} style={styles.gambarlp}>
                                </ImageBackground>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ marginLeft: ScreenWidth * 3 / 100, marginTop: ScreenHeight * 1 / 100, borderBottomWidth: 2, borderColor: '#0064c2', width: ScreenWidth * 50 / 100 }}>
                                        <Text style={{ fontSize: 14, color: "#0064c2", fontWeight: 'bold' }}>{item.bookID} - {item.type} {item.tipeOlahraga}</Text>
                                    </View>
    
                                    <View style={styles.b2}>
    
                                        <View style={styles.tt1}>
    
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Location</Text>
                                         
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Activity ID</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Status</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Date Start</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Start Hour</Text>
                                            {/* <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Last Hour</Text> */}
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Spot</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Informasi </Text>
                                        </View>
                                        <View style={styles.tt1}>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                      
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            {/* <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text> */}
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        </View>
                                        <View style={styles.tt12}>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.nama}</Text>
                                       
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.bookID}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.companyID}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.tanggalMulai}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.jamMulai}</Text>
                                            {/* <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.jamBerakhir}</Text> */}
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.spot}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.informasi}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                })}
            </View>


        )
    }

    onGoing() {
        return (
            <View style={styles.bg1}>
                {/* <Text>HALLO{this.props.customerId}</Text>
                <Text>{this.props.companyidRatingChoosen}</Text> */}
                {this.state.OngoingData.map((item, index) => {
                    if(item.isRating == '0'){
                        return (
                            <View
                                key={index}
                                style={styles.btt1}>
                                <ImageBackground source={require('../image/FA2.png')} style={styles.gambarlp}>
                                </ImageBackground>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ marginLeft: ScreenWidth * 3 / 100, marginTop: ScreenHeight * 1 / 100, borderBottomWidth: 2, borderColor: '#0064c2', width: ScreenWidth * 50 / 100 }}>
                                        <Text style={{ fontSize: 14, color: "#0064c2", fontWeight: 'bold' }}>{item.bookID} - {item.type} {item.tipeOlahraga}</Text>
                                    </View>
    
                                    <View style={styles.b2}>
    
                                        <View style={styles.tt1}>
    
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Location</Text>
                                         
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Activity ID</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Status</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Date Start</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Start Hour</Text>
                                            {/* <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Last Hour</Text> */}
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Spot</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Informasi </Text>
                                        </View>
                                        <View style={styles.tt1}>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                      
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                            {/* <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text> */}
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        </View>
                                        <View style={styles.tt12}>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.nama}</Text>
                                       
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.bookID}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.companyID}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.tanggalMulai}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.jamMulai}</Text>
                                            {/* <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.jamBerakhir}</Text> */}
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.spot}</Text>
                                            <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.informasi}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.gotoRating(index)}
                                        style={{ backgroundColor: '#0064c2', width: ScreenWidth * 40 / 100, height: ScreenHeight * 5 / 100, borderRadius: 15, borderWidth: 0, borderColor: 'white', marginBottom: ScreenHeight * 1 / 100, alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '100', color: 'white', marginTop: ScreenHeight * 1.3 / 100 }}>Rate Now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }else{
                        return(
                            <View
                            key={index}
                            style={styles.btt1}>
                            <ImageBackground source={require('../image/FA2.png')} style={styles.gambarlp}>
                            </ImageBackground>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ marginLeft: ScreenWidth * 3 / 100, marginTop: ScreenHeight * 1 / 100, borderBottomWidth: 2, borderColor: '#0064c2', width: ScreenWidth * 50 / 100 }}>
                                    <Text style={{ fontSize: 14, color: "#0064c2", fontWeight: 'bold' }}>{item.bookID} - {item.type} {item.tipeOlahraga}</Text>
                                </View>

                                <View style={styles.b2}>

                                    <View style={styles.tt1}>

                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Location</Text>
                                     
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Activity ID</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Status</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Tanggal Mulai</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Jam Mulai</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Jam Berakhir</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Spot</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>Informasi </Text>
                                    </View>
                                    <View style={styles.tt1}>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                  
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>:</Text>
                                    </View>
                                    <View style={styles.tt12}>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.nama}</Text>
                                   
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.bookID}</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.companyID}</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.tanggalMulai}</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.jamMulai}</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.jamBerakhir}</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.spot}</Text>
                                        <Text style={{ fontSize: 11, color: "#0064c2", fontWeight: 'bold' }}>{item.informasi}</Text>
                                    </View>
                                </View>
                                {/* <TouchableOpacity
                                    onPress={() => this.gotoRating(index)}
                                    style={{ backgroundColor: '#0064c2', width: ScreenWidth * 40 / 100, height: ScreenHeight * 5 / 100, borderRadius: 15, borderWidth: 0, borderColor: 'white', marginBottom: ScreenHeight * 1 / 100, alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '100', color: 'white', marginTop: ScreenHeight * 1 / 100 }}>Rate Now</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>

                        )
                    }
   
                })}

            </View>

        )
    }



    render() {
        return (
            <View style={{
                backgroundColor: 'black',
                width: ScreenWidth,
                height: ScreenHeight,
            }}>
                <Tabs tabContainerStyle={{ backgroundColor: "white",height:ScreenHeight*6/100 }} >
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#0064c2' }}>
                                <Icon name="check" style={{ color: 'white' }} size={20}
                                />
                                <View style={{ marginLeft: 20 }}></View>
                                <Text style={{ color: 'white', left: ScreenWidth * 1 / 100,fontSize:14 }}>On Going</Text>
                            </TabHeading>
                        }>
                        <ScrollView>{this.onGoing()}</ScrollView>
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: '#0064c2' }}>
                                <Icon name="history" style={{ color: 'white' }} size={20}
                                />
                                <View style={{ marginLeft: 20 }}></View>
                                <Text style={{ color: 'white',fontSize:14 }}>Past</Text>
                            </TabHeading>
                        }>
                        <ScrollView>{this.Past()}</ScrollView>
                    </Tab>
                </Tabs>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    b1: {
        backgroundColor: 'red',
        marginTop: ScreenHeight * 2.5 / 100,
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 35 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    tt1: {
        flexDirection: 'column',
        height: ScreenHeight * 21 / 100,

        marginLeft: ScreenWidth * 1 / 100,
        fontSize: 10

    },
    tt12: {
        flexDirection: 'column',
        height: ScreenHeight * 22.5 / 100,
        width: ScreenWidth * 38 / 100,

        marginLeft: ScreenWidth * 1 / 100,
        fontSize: 10

    },
    b2: {

        marginTop: ScreenHeight * 1 / 100,
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 55 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        flexDirection: 'row'
    },
    Background: {
        width: ScreenWidth,
        height: ScreenHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },

    HeaderView: {
        width: ScreenWidth,
        height: ScreenHeight * 10 / 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Header: {
        fontSize: 23,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    bg1: {
        width: ScreenWidth,
        backgroundColor: '#e7f0f1',
        marginBottom: ScreenHeight * 20.8 / 100
    },

    btt1: {
        width: ScreenWidth * 96 / 100,
        backgroundColor: 'white',
        marginLeft: ScreenHeight * 1.2 / 100,
        marginTop: ScreenHeight * 1 / 100,
        borderRadius: 10,
        elevation: 10,
        marginBottom: ScreenHeight * 1 / 100,
        flexDirection: 'row'
    },
    btt12: {
        height: ScreenHeight * 25 / 100,
        width: ScreenWidth * 96 / 100,
        backgroundColor: '#127681',
        marginLeft: ScreenHeight * 1.2 / 100,
        marginTop: ScreenHeight * 1 / 100,
        borderRadius: 10,
        elevation: 10,
        marginBottom: ScreenHeight * 1 / 100,
        flexDirection: 'row'
    },


    Items: {
        width: ScreenWidth * 30 / 100,
        justifyContent: 'center',
        height: ScreenHeight * 8 / 100,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 10

    },

    Button: {
        borderWidth: 1,
        borderColor: 'white',
        width: ScreenWidth * 60 / 100,
        height: ScreenHeight * 5 / 100,
        backgroundColor: '#FFC70E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: ScreenHeight * 1 / 100,
    },
    SearchMenu: {
        width: ScreenWidth * 50 / 100,

        marginBottom: ScreenHeight * 10 / 100,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },

    SearchMenuAwal: {
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 20 / 100,
        alignItems: 'center',
        borderRadius: 5,

        justifyContent: 'center',
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: ScreenWidth * 100 / 100,
    },

    ListItemGrey: {
        flexDirection: 'row',
        width: ScreenWidth * 95 / 100,
        height: ScreenHeight * 5 / 100,
        backgroundColor: '#CDC9C9',
        borderWidth: 0.5,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },

    ListItem: {
        flexDirection: 'row',
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 5 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ScreenHeight * 1 / 100,


    },
    ListItem1: {
        flexDirection: 'row',
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 5 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ScreenHeight * 2 / 100,
        marginBottom: ScreenHeight * 7 / 100,

    },
    ListItemWhite: {
        flexDirection: 'row',
        width: ScreenWidth * 95 / 100,
        height: ScreenHeight * 5 / 100,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextView: {
        fontSize: 10,
        textAlign: 'left',
        width: ScreenWidth * 45 / 100,
    },

    ResultView: {
        fontSize: 10,
        textAlign: 'left',
        width: ScreenWidth * 35 / 100,
    },

    placeholder: {
        width: ScreenWidth * 45 / 100,
        height: ScreenHeight * 5 / 100,
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ScreenHeight * 1.5 / 100,
    },


    text: {
        margin: 6,
        fontSize: 10,

    },
    ColoumnView: {
        width: ScreenWidth * 20 / 100,
        height: ScreenHeight * 5 / 100,
        padding: 3,
        backgroundColor: '#fee140',
        borderWidth: 0,
        borderColor: 'white',
        alignItems: 'center'
    },
    ColoumnView1: {
        width: ScreenWidth * 20 / 100,
        height: ScreenHeight * 12 / 100,
        padding: 3,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderColor: 'white',
        alignItems: 'center'
    },
    gambarlp: {
        width: ScreenWidth * 40 / 100,
        height: ScreenHeight * 23 / 100,
        marginLeft: ScreenWidth * 1 / 100,
        marginTop: ScreenHeight * 1 / 100,
    },
    ColoumnText: {
        fontSize: 9,
        marginTop: ScreenHeight * 3 / 100,
        color: 'white',
        alignItems: 'center'
    },
    ColoumnText21: {
        fontSize: 9,
        marginTop: ScreenHeight * 1 / 100,
        color: 'white',
        alignItems: 'center',
        fontWeight: 'bold'
    },
})


function mapStateToProps(state) {
    return {
        customerId: state.customerId,
        companyidRatingChoosen: state.companyidRatingChoosen,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        setcompanyidRatingChoosen: (companyidRatingChoosen) => {
            dispatch(setcompanyidRatingChoosen(companyidRatingChoosen))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)