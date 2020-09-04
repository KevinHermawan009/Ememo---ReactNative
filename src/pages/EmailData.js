import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, Alert, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/BindDataEmailui'

class EmailData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            idBanding: 'none',
        }
    }

    render() {
        return (
            <ImageBackground 
            source={require('../image/mamacan.png')} 
            resizeMode="stretch" 
            style={{
                width: ScreenWidth*125/100,
                height: ScreenHeight*70/100,
                right:ScreenWidth* 12/100,
                top: ScreenHeight * 8 / 100
                }}>
            <View style={{ width: ScreenWidth, height: ScreenHeight,left:ScreenWidth*12/100,bottom:ScreenHeight*7.5/100 }}>
                <ScrollView>
                    {this.state.data.map((item, index) => {
                       
                           
                              
                                <View key={index} >
                                    <View>
                                        <Text style={{ color: 'blue', borderBottomColor: 'blue', borderBottomWidth: 1 }}>{item.MemoID}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop:ScreenWidth*3/100 }} >

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>Subject</Text>
                                        </View>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>Tanggal</Text>
                                        </View>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>User Request</Text>
                                        </View>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>User Status</Text>
                                        </View>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>Memo Status</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                   

                                        <View style={styles.ColoumnView1}>
                                            <Text style={styles.ColoumnText}> {item.Subject} </Text>
                                        </View>

                                        <View style={styles.ColoumnView1}>
                                            <Text style={styles.ColoumnText}> {item.dtmupd} </Text>
                                        </View>

                                        <View style={styles.ColoumnView1}>
                                            <Text style={styles.ColoumnText}> {item.UserRequest} </Text>
                                        </View>

                                        <View style={styles.ColoumnView1}>
                                            <Text style={styles.ColoumnText}> {item.ApprovalUserStatus} </Text>
                                        </View>

                                        <View style={styles.ColoumnView1}>
                                            <Text style={styles.ColoumnText}> {item.ApprovalStatus} </Text>
                                        </View>
                                    </View>

                                </View>
                            
                       
                    })}
                    
                   
                </ScrollView>
            </View>
        </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    TextInputStyle: {
        textAlign: 'center',
        marginLeft: 10,
        height: 50,
        width:300,
        height: 40,
        borderRadius:0,
        borderWidth:2 , 
        marginBottom: 20,
    
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
        borderColor: 'black',
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
        borderColor: 'black',
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
        borderColor: 'black',
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
        borderColor: 'black',
        alignItems:'center'
    },
    ColoumnView1: {
        width: ScreenWidth * 20/ 100,
        height: ScreenHeight * 8 / 100,
        padding: 3,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderColor: 'black',
        alignItems:'center'
    },

    ColoumnText: {
        fontSize: 9,
        marginTop:ScreenHeight*3/100,
        color: 'black',
        alignItems:'center'
    },
    ColoumnText21: {
        fontSize: 9,
        marginTop:ScreenHeight*1/100,
        color: 'black',
        alignItems:'center',
        fontWeight:'bold'
    },
})


function mapStateToProps(state) {
    return {
        // username: state.username,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailData)