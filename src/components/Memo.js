import React, { Component } from 'react';
import { View, Text, Dimensions, ImageBackground, ScrollView, TouchableOpacity, TextInput, Picker, StyleSheet, KeyboardAvoidingView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { setFinalID, setDtDetail, setDtSupportDetail, setDtAttachment, setDtApprovalScheme } from '../Redux/Action';
import Modal from 'react-native-modal';


const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/EMemoNew'
const link1 = 'https://wsdl.maybankfinance.co.id/uat/MAC/EMemordbIsFinal'
const link2 = 'https://wsdl.maybankfinance.co.id/uat/MAC/EMemobtnSaveComplete'
const link3 = 'https://wsdl.maybankfinance.co.id/uat/MAC/EMemobtnReturn'

class Memo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_description: [],
            data_supporter: [],
            data_attachment: [],
            data: [],
            data1: [],
            // data2: [],
            // data3: [],
            data4: [],
            data5: [],
            data6: [],
            data7: '',
            data_DtDetail: '',
            data_DtSupportDetail: '',
            data_DtAttachment: '',
            data_DtApprovalScheme: '',
            final: '',
            foto: '',
            idBanding: 'none',
            showModal: false,
            closeModal: false,
            Subject: '',
            Description: '',
            isFinalPicker: "",
            memoID: '',
            Reject: false,
            isAlternate: '',
        }

        this.closeModal = this.closeModal.bind(this)
    }
    closeModal() {
        this.setState({
            showModal: false,
            closeModal: false,
        })
    }
    submitt = () => {
        Actions.Tab3()
    }

    serviceLink2 = () => {
        // alert(this.state.data.conclusion)
        fetch(link2, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
            },
            body: JSON.stringify({
                "ent2": {
                    "FormViewStatus": "1",
                    "MemoID": this.props.MemoID,
                    "Subject": this.state.data.Subject,
                    "Description": this.state.data.Description,
                    "Vendor": this.state.data.conclusion,
                    "Limit": this.state.data.Limit,
                    "sys_employeeID": this.props.username,
                    "Usrupd": this.props.username,
                    "DeptID": this.state.data.DeptID,
                    "IsFinal": this.state.final,
                    "ApprovalSeqNum": this.state.data5.ApprovalSeqNum,
                    "NoteMemo": "",
                    "IsAlternate": this.state.isAlternate,
                    "NextPersonNPK": this.state.data5.NPK,
                    "ApprovalSchemeID": this.state.data5.ApprovalSchemeID,
                    "DtFungsi": JSON.stringify(this.state.data_DtDetail),
                    "DtFungsiDetail": JSON.stringify(this.state.data_DtSupportDetail),
                    "DtAttachment": JSON.stringify(this.state.data_DtAttachment),
                    "DtApprovalScheme": JSON.stringify(this.state.data_DtApprovalScheme),
                    "Reject": "false"
                }

            })
        })
            .then(response => response.json())
            .then(res => {
                // alert(res.EMemobtnReturnResult.Reject)
                alert("Submitt Success")
                Actions.Tab3()
               
            })
        
    }

    balikin = () => {
        alert(this.state.data_DtApprovalScheme)
        fetch(link2, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
            },
            body: JSON.stringify({
                "ent2": {
                    "FormViewStatus": "1",
                    "MemoID": this.props.MemoID,
                    "Subject": this.state.data.Subject,
                    "Description": this.state.data.Description,
                    "Vendor": this.state.data.conclusion,
                    "Limit": this.state.data.Limit,
                    "sys_employeeID": this.props.username,
                    "Usrupd": this.props.username,
                    "DeptID": this.state.data.DeptID,
                    "IsFinal": "0",
                    "ApprovalSeqNum": this.state.data5.ApprovalSeqNum,
                    "NoteMemo": "",
                    "IsAlternate": this.state.isAlternate,
                    "NextPersonNPK": this.state.data5.NPK,
                    "ApprovalSchemeID": this.state.data5.ApprovalSchemeID,
                    "DtFungsi": JSON.stringify(this.state.data_DtDetail),
                    "DtFungsiDetail": JSON.stringify(this.state.data_DtSupportDetail),
                    "DtAttachment": JSON.stringify(this.state.data_DtAttachment),
                    "DtApprovalScheme": JSON.stringify(this.state.data_DtApprovalScheme),
                    "Reject": "true"
                }

            })
        })
            .then(response => response.json())
            .then(
                res => {

                    Actions.Tab3()
                    alert("Return Success")
                })
        // Actions.submitt()
    }
    finalchoose = () => {

        this.props.setFinalID(this.state.final)
        console.log(this.state.data7)
        console.log(this.state.isFinalPicker)

        fetch(link1, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
            },
            body: JSON.stringify({
                "temp": this.state.final
            })
        })
            .then(response => response.json())
            .then(res => {
                alert("masuk")


            })
    }

    finalchoose2 = () => {
        console.log("SUBJECT", this.state.data.Subject)
        console.log("DESCRIPTION", this.state.data.Description)
        console.log("CONCLUSION", this.state.data.conclusion)
        console.log("LIMIT", this.state.data.Limit)
        console.log("DEPTID", this.state.data.DeptID)
        console.log("FINAL", this.state.final)

        fetch(link2, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
            },
            body: JSON.stringify({
                "ent2": {
                    "FormViewStatus": "1",
                    "MemoID": this.props.MemoID,
                    "Subject": this.state.data.Subject,
                    "Description": this.state.data.Description,
                    "Vendor": this.state.data.conclusion,
                    "Limit": this.state.data.Limit,
                    "sys_employeeID": this.props.username,
                    "Usrupd": this.props.username,
                    "DeptID": this.state.data.DeptID,
                    "IsFinal": this.state.final,
                    "NoteMemo": "",
                    "IsAlternate": this.state.isAlternate,
                    "NextPersonNPK": this.state.data5.NPK,
                    "ApprovalSchemeID": this.state.data5.ApprovalSchemeID,
                    "DtFungsi": this.state.data_DtDetail,
                    "DtFungsiDetail": this.state.data_DtSupportDetail,
                    "DtAttachment": this.state.data_DtAttachment,
                    "DtApprovalScheme": this.state.data_DtApprovalScheme,
                    // "Reject":
                }
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
            })
    }
    toggleModal = (index) => {
        this.setState({
            foto: this.state.data1[index].FileContent,
            showModal: !this.state.showModal
        })
    }

    isFinalLoad() {
        if (this.state.isFinalPicker == true) {
            return (
                <View>
                    <View
                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                        <Text style={{ color: 'black', fontSize: 15, marginTop: 23 }}>Is Final </Text>
                    </View>

                    <View style={{ backgroundColor: 'white', borderRadius: 10, borderEndColor: 'black', borderWidth: 1, width: ScreenHeight * 30 / 100, left: ScreenWidth * 30 / 100, bottom: ScreenHeight * 2.7 / 100 }}>
                        <Picker
                            style={{ width: ScreenWidth * 55 / 100, left: ScreenWidth * 0 / 100 }}
                            selectedValue={this.state.final}
                            onValueChange={(lang) => this.setState({ final: lang })}

                        >
                            <Picker label="Choose" value="-" />
                            <Picker label="Yes" value="1" />
                            <Picker label="No" value="0" />
                        </Picker>
                    </View>
                </View>
            )
        } else if (this.state.isFinalPicker == false) {
            return (
                <View>
                    <View
                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                        <Text style={{ color: 'black', fontSize: 15, marginTop: 23 }}>Is Final </Text>
                    </View>

                    <View style={{ backgroundColor: 'white', borderRadius: 10, borderEndColor: 'black', borderWidth: 1, width: ScreenHeight * 30 / 100, left: ScreenWidth * 30 / 100, bottom: ScreenHeight * 2.7 / 100 }}>
                        <Picker
                            enabled={false}
                            style={{ width: ScreenWidth * 55 / 100, left: ScreenWidth * 0 / 100 }}
                            selectedValue={this.state.final}
                            onValueChange={(lang) => this.setState({ final: lang })}

                        >

                            <Picker label="No" value="2" />
                        </Picker>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (

            <KeyboardAvoidingView style={styles.container} behavior="position" enabled>

                <Modal isVisible={this.state.showModal} onBackdropPress={this.closeModal} >
                    <View style={{ width: ScreenWidth * 90 / 100, height: ScreenWidth * 90 / 100, backgroundColor: 'white' }}>
                        <Image
                            style={{ width: ScreenWidth * 90 / 100, height: ScreenWidth * 90 / 100 }}
                            source={{ uri: 'data:image/jpeg;base64,' + this.state.foto }}
                            resizeMode="stretch"
                        />
                    </View>
                    <TouchableOpacity onPress={this.closeModal} style={{ top: ScreenHeight * 10 / 100, left: ScreenWidth * 40 / 100 }}>
                        <Text style={{ color: 'yellow' }}>BACK</Text>
                    </TouchableOpacity>
                </Modal>

                <View style={{ height: ScreenHeight, width: ScreenWidth, backgroundColor: 'transparent' }}>

                    <ImageBackground
                        source={require('../image/mamacan.png')}
                        resizeMode="center"
                        style={styles.Backgroundstyle}>

                        <View style={styles.View1}>
                            <ScrollView style={{ height: ScreenHeight }}>

                                <View style={styles.Bcjudul}>
                                    <Text style={styles.Judul}>IT MEMO APPROVAL PROCESS</Text>

                                    <TouchableOpacity
                                        onPress={this.submitt}
                                        style={{
                                            marginLeft: ScreenWidth * -90 / 100, marginTop: ScreenHeight * 1 / 100

                                        }}>
                                        <Icon name="arrow-left" style={{
                                            color: 'black',
                                            fontSize: 20

                                        }}
                                            size={40}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: ScreenHeight * 3 / 100 }}>
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>No.Memo</Text>
                                    </View>

                                    <View style={styles.Memostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.MemoID}</Text>
                                    </View>


                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Subject</Text>
                                    </View>
                                    <View style={styles.Memostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.Subject}</Text>
                                    </View>
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Description</Text>
                                    </View>
                                    <View style={styles.DescMemostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.Description}</Text>
                                    </View>
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '800' }}>Description</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>No</Text>
                                        </View>
                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>Vendor</Text>
                                        </View>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>Detail</Text>
                                        </View>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>Total Price(Rp.) + PPN 10%</Text>
                                        </View>
                                    </View>

                                    {this.state.data_description.map((data, index) => {
                                        return (
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.ColoumnView1}>
                                                    <Text style={styles.ColoumnText}> {index + 1}</Text>
                                                </View>
                                                <View style={styles.ColoumnView1}>
                                                    <Text style={styles.ColoumnText}> {data.VendorName} </Text>
                                                </View>
                                                <View style={styles.ColoumnView1}>
                                                    <Text style={styles.ColoumnText}> {data.Detail} </Text>
                                                </View>
                                                <View style={styles.ColoumnView1}>
                                                    <Text style={styles.ColoumnText}> {data.Total} </Text>
                                                </View>
                                            </View>
                                        )
                                    })}
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '800' }}>Supporter Detail</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>

                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>No</Text>
                                        </View>
                                        <View style={styles.ColoumnViewDD}>
                                            <Text style={styles.ColoumnText21}>Description Detail</Text>
                                        </View>

                                    </View>

                                    {this.state.data_supporter.map((data, index) => {
                                        return (
                                            <View style={{ flexDirection: 'row' }}>

                                                <View style={styles.ColoumnView1}>
                                                    <Text style={styles.ColoumnText}>{index + 1}</Text>
                                                </View>

                                                <View style={styles.ColoumnView11}>
                                                    <Text style={styles.ColoumnText}> {data.Description} </Text>
                                                </View>

                                            </View>
                                        )
                                    })}
                                    {/* <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.ColoumnView1}>
                                            <Text style={styles.ColoumnText}> 1 </Text>
                                        </View>
                                        <View style={styles.ColoumnView11}>
                                            <Text style={styles.ColoumnText}> {this.state.data3.Description} </Text>
                                        </View>

                                    </View> */}
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '800' }}>Attachment Detail</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.ColoumnView}>
                                            <Text style={styles.ColoumnText21}>No</Text>
                                        </View>
                                        <View style={styles.ColoumnViewDD}>
                                            <Text style={styles.ColoumnText21}>Attachment File</Text>
                                        </View>

                                    </View>
                                    {this.state.data_attachment.map((item, index) => {
                                        return (
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.ColoumnView1}>
                                                    <Text style={styles.ColoumnText}>{index + 1}</Text>
                                                </View>
                                                <View style={styles.ColoumnView11}>
                                                    <TouchableOpacity onPress={() => { this.toggleModal(index) }} >
                                                        <Text style={styles.ColoumnTextA}> {item.Filename} </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    })}
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '800' }}>Detail E-memo Approval</Text>
                                    </View>

                                    {this.isFinalLoad()}

                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, width: ScreenWidth * 27 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Number Of Limit </Text>
                                    </View>
                                    <View style={styles.Memostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.Limit}</Text>
                                    </View>
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, width: ScreenWidth * 27 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Type Of Approval </Text>
                                    </View>
                                    <View style={styles.Memostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.data.TypeApproval}</Text>
                                    </View>
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, width: ScreenWidth * 27 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Position Of Approval Member </Text>
                                    </View>
                                    <View style={styles.Memostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.data4.Description}</Text>
                                    </View>
                                    <View
                                        style={{ top: ScreenHeight * 0 / 100, width: ScreenWidth * 27 / 100, left: ScreenWidth * 2 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 12 }}>Next Person</Text>
                                    </View>
                                    <View style={styles.Memostyle}>
                                        <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.data5.Full_Name}</Text>
                                    </View>
                                    <View
                                        style={{ top: ScreenHeight * -10 / 100 }}>
                                        <Text style={{ color: 'black', fontSize: 15, top: ScreenHeight * 50 / 100 }}></Text>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent' }}>
                                        <View
                                            style={{ top: ScreenHeight * 0 / 100, left: ScreenWidth * 2 / 100 }}>
                                            <Text style={{ color: 'black', fontSize: 12 }}>Note</Text>
                                        </View>
                                        <View style={styles.DescMemostyle}>
                                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.data6.ApprovalNote}</Text>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: 'transparent' }}>
                                        <View
                                            style={{ top: ScreenHeight * 0 / 100, width: ScreenWidth * 27 / 100, left: ScreenWidth * 2 / 100 }}>
                                            <Text style={{ color: 'black', fontSize: 12 }}>Memo Status</Text>
                                        </View>
                                        <View style={styles.Memostyle}>
                                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100 }}>{this.state.data6.StatusMemo}</Text>
                                        </View>
                                    </View>

                                    

                                    <TouchableOpacity
                                        onPress={this.balikin}

                                        style={{
                                            left: ScreenWidth * 2 / 100,
                                            backgroundColor: '#fee140',
                                            width: ScreenWidth * 47 / 100,
                                            height: ScreenHeight * 7 / 100,
                                            borderWidth: 1,
                                            borderColor: 'yellow',
                                            borderRadius: 15,
                                            alignItems: 'center',
                                            bottom: ScreenHeight * 2 / 100
                                        }}>
                                        <Text style={{ color: 'black', top: ScreenHeight * 1.7 / 100 }}>Return</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.serviceLink2}
                                        style={{
                                            left: ScreenWidth * 52 / 100,
                                            bottom: ScreenHeight * 9 / 100,
                                            backgroundColor: '#fee140',
                                            width: ScreenWidth * 47 / 100,
                                            height: ScreenHeight * 7 / 100,
                                            borderWidth: 1,
                                            borderColor: 'yellow',
                                            borderRadius: 15,
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{ color: 'black', top: ScreenHeight * 1.7 / 100 }}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{height : ScreenHeight*50/100}}>
                                    <Text> 
                                        FormViewStatus: "1",
                                        MemoID: {this.props.MemoID}
                                        Subject: {this.state.data.Subject}
                                        Description: {this.state.data.Description}
                                        Vendor: {this.state.data.conclusion}
                                        Limit: {this.state.data.Limit}                                      
                                        "sys_employeeID": {this.props.username}
                                        "Usrupd": {this.props.username}
                                        "DeptID":{this.state.data.DeptID}
                                        "IsFinal": {this.state.final}
                                        "ApprovalSeqNum": {this.state.data5.ApprovalSeqNum}
                                        "NoteMemo": "",
                                        "IsAlternate": {this.state.isAlternate}
                                        "NextPersonNPK": {this.state.data5.NPK}
                                        "ApprovalSchemeID": {this.state.data5.ApprovalSchemeID}
                                        "DtFungsi": {JSON.stringify(this.state.data_DtDetail)}
                                        "DtFungsiDetail": {JSON.stringify(this.state.data_DtSupportDetail)}
                                        "DtAttachment": {JSON.stringify(this.state.data_DtAttachment)}
                                        "DtApprovalScheme": {JSON.stringify(this.state.data_DtApprovalScheme)}
                                        "Reject": "false"
                                    </Text>
                                </View>
                            </ScrollView>

                        </View>
                    </ImageBackground>
                </View>

            </KeyboardAvoidingView>
        )

    }
}
const styles = StyleSheet.create({
    ColoumnViewDD: {
        width: ScreenWidth * 75.99 / 100,
        height: ScreenHeight * 5 / 100,
        padding: 3,
        backgroundColor: '#fee140',
        borderWidth: 0,
        borderColor: 'black',
        alignItems: 'center'
    },
    ColoumnView: {
        width: ScreenWidth * 24.99 / 100,
        height: ScreenHeight * 5 / 100,
        padding: 3,
        backgroundColor: '#fee140',
        borderWidth: 0,
        borderColor: 'black',
        alignItems: 'center'
    },
    ColoumnViewNo: {
        width: ScreenWidth * 24.99 / 100,
        height: ScreenHeight * 10 / 100,
        padding: 3,
        backgroundColor: '#fee140',
        borderWidth: 0,
        borderColor: 'black',
        alignItems: 'center'
    },
    ColoumnText21: {
        fontSize: 9,
        marginTop: ScreenHeight * 1 / 100,
        color: 'black',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    ColoumnText: {
        fontSize: 9,
        marginTop: ScreenHeight * 3 / 100,
        color: 'black',
        alignItems: 'center'
    },
    ColoumnTextA: {
        height: ScreenHeight * 10 / 100,
        fontSize: 9,
        marginTop: ScreenHeight * 3 / 100,
        color: 'blue',
        alignItems: 'center'
    },
    ColoumnView1: {
        width: ScreenWidth * 24.99 / 100,
        height: ScreenHeight * 10 / 100,
        padding: 3,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderColor: 'black',
        alignItems: 'center'
    },
    ColoumnView11: {
        width: ScreenWidth * 75.99 / 100,
        height: ScreenHeight * 10 / 100,
        padding: 3,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderColor: 'black',
        alignItems: 'center'
    },

    View1: {
        width: ScreenWidth,
        height: ScreenHeight * 200 / 100,
        left: ScreenWidth * 12 / 100,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flex: 1

    },
    Judul: {
        fontSize: 15,
        color: 'black',
        fontStyle: 'normal',
        fontWeight: '800',
        top: ScreenHeight * 4 / 100,

        color: 'black',
        backgroundColor: 'transparent',
        fontStyle: 'normal',
        fontWeight: '800',
        top: ScreenHeight * 4 / 100
    },
    Bcjudul: {
        height: ScreenHeight * 15 / 100,
        backgroundColor: '#fee140',
        alignItems: 'center',
        borderColor: "transparent",
        borderRadius: 3,
        borderBottomWidth: 10
    },
    Backgroundstyle: {
        width: ScreenWidth * 125 / 100,
        height: ScreenHeight * 100 / 100,
        right: ScreenWidth * 12 / 100,
        top: ScreenHeight * 0 / 100,
        backgroundColor: 'transparent'

    },
    Memostyle: {
        left: ScreenWidth * 30 / 100,
        bottom: ScreenHeight * 3 / 100,
        height: ScreenHeight * 5 / 100,
        width: ScreenWidth * 65 / 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'gray',



    },
    DescMemostyle: {
        left: ScreenWidth * 30 / 100,
        bottom: ScreenHeight * 3 / 100,
        height: ScreenHeight * 40 / 100,
        width: ScreenWidth * 65 / 100,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'gray',

    },
    TextInputStyle: {
        textAlign: 'center',
        marginLeft: ScreenWidth * 35 / 100,
        width: ScreenWidth * 62 / 100,
        height: ScreenHeight * 6 / 100,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#B0B0B0',
        bottom: ScreenHeight * 4.5 / 100,

    },
    TextInputStyle1: {

        marginLeft: ScreenWidth * 35 / 100,
        width: ScreenWidth * 62 / 100,
        height: ScreenHeight * 20 / 100,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#B0B0B0',
        bottom: ScreenHeight * 4.5 / 100,

    },

})


function mapStateToProps(state) {
    return {
        // memoID : state.memoID_Choosen ,
        // username: state.username,
        // MemoID: state.memoidchoosen
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // setFinalID: (finalid) => {
        //     dispatch(setFinalID(finalid))
        // },
        // setDtDetail: (DtDetail) => {
        //     dispatch(setDtDetail(DtDetail))
        // },
        // setDtSupportDetail: (DtSupportDetail) => {
        //     dispatch(setDtSupportDetail(DtSupportDetail))
        // },
        // setDtAttachment: (DtApprovalScheme) => {
        //     dispatch(setDtAttachment(DtApprovalScheme))
        // },
        // setDtApprovalScheme: (DtApprovalScheme) => {
        //     dispatch(setDtApprovalScheme(DtApprovalScheme))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memo)