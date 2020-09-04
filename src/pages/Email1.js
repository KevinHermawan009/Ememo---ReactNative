import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { setMemoID, setemail } from '../Redux/Action';

// import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/BindDataEmailui'
const link1 = 'https://wsdl.maybankfinance.co.id/uat/MAC/InboxMailrptMailMemo_ItemCommand'


class Email1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            MemoID: '',
        }
    }
    expand = (index) => {
        this.props.setMemoID(this.state.data[index].MemoID),
            //this.props.setemail(this.props.totalemail - 1)
            fetch(link1, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
                },
                body: JSON.stringify(
                    {
                        "CommandName": "Open",
                        // "MemoID": "M.06.19.001/Information&CommunicationTechnology",
                        "MemoID": this.state.data[index].MemoID,
                        "employeeID": this.props.username
                    }
                )
            })
            .then( response => response.json() )
            .then( res => {
                // alert('masuk')
                fetch(link, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
                    },
                    body: JSON.stringify({
                        "NPK": this.props.username
                    })
                })
                .then(response => response.json())
                .then(res => {
                    alert('masuk2')
                    if ( res.BindDataEmailuiResult == 'Tidak ada Email Untuk dibuka') {
                        this.setState({
                            total: 0 ,
                            data: []
                        })
                        this.props.setemail(0)
                    } else {
                        this.setState({
                            total: JSON.parse(res.BindDataEmailuiResult).length ,
                            data: JSON.parse(res.BindDataEmailuiResult)
                        })
                        this.props.setemail(JSON.parse(res.BindDataEmailuiResult).length)
                    }
                    
                    // this.serviceGetEmail()
                })
            })
            .catch( error => console.error (error))
        Actions.Memo()

    }
    resetClick = () => {
        Actions.refresh({ key: Math.random() })
    }
    serviceGetEmail() {
        fetch(link, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
            },
            body: JSON.stringify(
                {

                    "NPK": this.props.username,

                }
            )
        })
            .then(response => response.json())
            .then(res => {

                this.setState({
                    data: JSON.parse(res.BindDataEmailuiResult) ,
                    total: JSON.parse(res.BindDataEmailuiResult).length
                }, () => {
                    this.props.setemail(JSON.parse(res.BindDataEmailuiResult).length)
                })
                // alert(this.state.data)
            })
    }
 
    // componentDidMount() { 
    //     this.serviceGetEmail() 
    // } 

    render() {
        return (
            <ImageBackground
                source={require('../image/mamacan.png')}
                resizeMode="stretch"
                style={{
                    width: ScreenWidth * 125 / 100,
                    height: ScreenHeight * 64 / 100,
                    right: ScreenWidth * 12 / 100,
                    top: ScreenHeight * 8 / 100,

                }}
            >
                <View style={{ width: ScreenWidth * 120 / 100, left: ScreenWidth * 0 / 100, marginTop: ScreenHeight * -8 / 100 }}>
                    <View style={{ alignItems:'center',backgroundColor:'#C1BABA',height:ScreenHeight*5.5/100}}>

                        <TouchableOpacity onPress={this.resetClick}>
                            <Text style={{ fontSize: 20 }}>Click For Refresh</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView>

                        {this.state.data.map((item, index) => {
                            return (


                                <View style={{ width: ScreenWidth, top: ScreenHeight * 5 / 100, height: ScreenHeight * 14 / 100 }} >


                                    <View style={{
                                        left: ScreenWidth * 12 / 100,
                                        top: ScreenHeight * -5 / 100,
                                        width: ScreenWidth,
                                        backgroundColor: '#fee140'
                                    }}>
                                        <Text style={{
                                            left: ScreenWidth * 3 / 100,
                                            color: 'black',
                                            fontStyle: 'italic',
                                            fontWeight: '500'
                                        }}>you've got a new message!</Text>
                                    </View>

                                    <View key=
                                        {index}
                                        style={{
                                            top: ScreenHeight * -5 / 100,
                                            borderBottomColor: 'gray',
                                            borderWidth: 1,
                                            borderRadius: 7,
                                            width: ScreenWidth * 97 / 100,
                                            left: ScreenWidth * 13.5 / 100,
                                            height: ScreenHeight * 10 / 100,
                                            borderColor: 'black',
                                            fontSize: 20,
                                            backgroundColor: 'transparent',
                                            flexDirection: 'row',
                                        }}>
                                        <View style={{ width: ScreenWidth * 85 / 100, backgroundColor: 'transparent' }}>
                                            <Text style={{ color: 'black', fontSize: 12 }}>Anda mendapatkan request Approval Memo dengan subject {item.Subject} Memo ID {item.MemoID} pada tanggal {item.dtmupd}</Text>

                                        </View>
                                        <View style={{

                                            width: ScreenHeight * 5 / 100,
                                            backgroundColor: 'transparent',

                                            height: ScreenHeight * 9 / 100,
                                            alignItems: 'center',
                                        }}>
                                            <TouchableOpacity style={{
                                                backgroundColor: 'transparent', top: ScreenHeight * 3.5 / 100,

                                                fontSize: 18,

                                            }}
                                                onPress={() => { this.expand(index) }}
                                            >
                                                <Icon name='expand'
                                                    style={{
                                                        marginLeft: ScreenWidth * 3 / 100,
                                                        fontSize: 13,
                                                        color: 'black'
                                                    }} />
                                                <Text style={{ left: ScreenWidth * 1 / 100, fontSize: 10 }}>Open</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>

                </View>

            </ImageBackground>


        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        totalemail: state.totalemail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMemoID: (memoidchoosen) => {
            dispatch(setMemoID(memoidchoosen))
        },
        setemail: (totalemail) => {
            dispatch(setemail(totalemail))
        }

        // setMemoIDChoosen : ( memoID_Choosen ) => {
        //     dispatch ( setMemoIDChoosen ( memoID_Choosen ) )
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Email1)