
import React, { Component } from 'react';
// import { View , StyleSheet , Text , Dimensions, } from 'react-native';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Item, Input, Textarea, Form, Icon, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'

const options = {
    title: 'Choose to change image',
    takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
    chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
    quality: 1.0,
    // maxHeight: ScreenHeight*70/100,
    // maxWidth: ScreenWidth*50/100,
}

const imagePicker = require('react-native-imagepicker');
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://fitaccessproject.herokuapp.com/api/FitAccess/CreateMatch'
const createTwoButtonAlert = () =>
    Alert.alert(
        "Berhasil Menyimpan Data",
        "",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true }
    );


class RegisterMatchData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            chosenDate: new Date(),
            foto: '',
            matchName: '',
            matchDescription: '',
            slot: '',
            gender: '',
            age: '',
            registrationFee: '',
            dateStart: '',
            dateEnd: '',
            other: '',
            detailLocation: '',
            matchOrganizer: '',
            contactOrganizer: '',
            firstPrize: '',
            secondPrize: '',
            thirdPrize: '',
            otherPrize: ''

        };
        this.setDate = this.setDate.bind(this);

    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    IsiData = () => {
        Actions.RegisterData()
    }
    member = () => {
        Actions.MemberSportList()
    }
    asd(Alert) {
        Alert("Form Harus Di isi")
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    // onValueChange2(value: '123') {
    //   this.setState({
    //     selected2: value
    //   });
    // }
    match = () => {
        Actions.Match()
    }
    RegisterMatch = () => {

        fetch(link, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                "CompanyId": this.props.companyId,
                "UploadGambar": this.state.foto,
                "HostName": this.state.matchOrganizer,
                "HostContactNumber": this.state.contactOrganizer,
                "MatchName": this.state.matchName,
                "Description": this.state.matchDescription,
                "SlotAvailable": this.state.slot,
                "GenderType": this.state.gender,
                "Age": this.state.age,
                "RegisterFee": this.state.registrationFee,
                "DateMatchStart": this.state.dateStart,
                "DateMatchEnd": this.state.dateEnd,
                "Location": this.state.detailLocation,
                "SlotPrize1": this.state.firstPrize,
                "SlotPrize2": this.state.secondPrize,
                "SlotPrize3": this.state.thirdPrize,
                "AnotherPrize": this.state.otherPrize,
                "SportType": this.props.sportid
            })
        })
            .then(response => response.json())
            .then(res => {

                if (res.retval == "Sukses") {
                    alert("Success")
                    Actions.TabssAdmin()
                }
                else{
                    alert("All Field Must be Filled")
                }
            })
    }
    back() {
        Actions.Tab2()
    }
    TakePhotoHighlight = () => {
        // alert('clicked'); 
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {

                let source = response.data
                // alert(response.data) 
                this.setState({
                    foto: source,
                    captured: true
                });
            }
        });
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container1}>
                    <TouchableOpacity
                        style={{ marginTop: ScreenHeight * -3 / 100, backgroundColor: 'white' }}
                        onPress={() =>
                            this.TakePhotoHighlight()
                        }>
                        <View style={{ alignItems: 'center', top: ScreenHeight * 25 / 100 }}>
                            <Text style={{ color: 'black' }}>
                                + Add Match Logo
                                    </Text>
                        </View>
                        <Image
                            source={{ uri: 'data:image/jpeg;base64,' + this.state.foto }}


                            style={{
                                height: ScreenHeight * 50 / 100,
                                width: ScreenWidth * 100 / 100,
                                alignSelf: 'center',
                                resizeMode: 'stretch'

                            }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Match Name</Text>
                        {/* <Text style={styles.quest1}>{this.props.sportid}</Text>
                        <Text style={styles.quest1}>{this.props.companyId}</Text> */}
                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.matchName}
                                onChangeText={(text) => { this.setState({ matchName: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 22 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Description</Text>

                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={5} bordered placeholder=""
                                value={this.state.matchDescription}
                                onChangeText={(text) => { this.setState({ matchDescription: text }) }} />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Slot Avaible</Text>
                        <Form style={{ width: ScreenWidth * 60 / 100, height: ScreenHeight * 5 / 100, borderBottomWidth: 0 }}>
                            <Picker
                                mode="dropdown"
                                placeholderIconColor="#007aff"
                                style={{ width: ScreenHeight * 25 / 100, marginLeft: ScreenWidth * 1 / 100, borderWidth: 1, marginBottom: ScreenHeight * 1 / 100 }}
                                selectedValue={this.state.slot}
                                onValueChange={(value) =>
                                    this.setState({
                                        slot: value,

                                    })}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                                <Picker.Item label="10" value="10" />
                                <Picker.Item label="11" value="11" />
                                <Picker.Item label="12" value="12" />
                                <Picker.Item label="13" value="13" />
                                <Picker.Item label="14" value="14" />
                                <Picker.Item label="15" value="15" />
                                <Picker.Item label="16" value="16" />
                                <Picker.Item label="17" value="17" />
                                <Picker.Item label="18" value="18" />
                                <Picker.Item label="19" value="19" />
                                <Picker.Item label="20" value="20" />
                                <Picker.Item label="21" value="21" />
                                <Picker.Item label="22" value="22" />
                                <Picker.Item label="23" value="23" />
                                <Picker.Item label="24" value="24" />
                                <Picker.Item label="25" value="25" />
                                <Picker.Item label="26" value="26" />
                                <Picker.Item label="27" value="27" />
                                <Picker.Item label="28" value="28" />
                                <Picker.Item label="29" value="29" />
                                <Picker.Item label="30" value="30" />
                                <Picker.Item label="31" value="31" />
                                <Picker.Item label="32" value="32" />
                                <Picker.Item label="33" value="33" />
                                <Picker.Item label="34" value="34" />
                                <Picker.Item label="35" value="35" />
                                <Picker.Item label="36" value="36" />
                                <Picker.Item label="37" value="37" />
                                <Picker.Item label="38" value="38" />
                                <Picker.Item label="39" value="39" />
                                <Picker.Item label="40" value="40" />

                            </Picker>
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Gender</Text>
                        <Form style={{ width: ScreenWidth * 60 / 100, height: ScreenHeight * 5 / 100, borderBottomWidth: 0 }}>
                            <Picker
                                mode="dropdown"
                                placeholderIconColor="#007aff"
                                style={{ width: ScreenHeight * 25 / 100, marginLeft: ScreenWidth * 1 / 100, borderWidth: 1, marginBottom: ScreenHeight * 1 / 100 }}
                                selectedValue={this.state.gender}
                                onValueChange={(value) =>
                                    this.setState({
                                        gender: value,

                                    })}
                            >
                                <Picker.Item label="-" value="-" />
                                <Picker.Item label="Girl" value="Girl" />
                                <Picker.Item label="Boy" value="Boy" />
                            </Picker>
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>

                        <Text style={styles.quest1}>Age Range</Text>

                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.age}
                                onChangeText={(text) => { this.setState({ age: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Registration Fee (ex: 10000)</Text>
                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.registrationFee}
                                onChangeText={(text) => { this.setState({ registrationFee: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 4 / 100, backgroundColor: 'white', marginTop: ScreenHeight * 3 / 100, marginBottom: ScreenHeight * 1 / 100 }}>
                        <Text style={styles.quest1}>Date Start</Text>


                        <View style={{ bottom: ScreenHeight * 1.7 / 100, left: ScreenWidth * 0 / 100 }}>

                            <DatePicker

                                date={this.state.dateStart}
                                mode="date"
                                placeholder="select date"
                                format="DD/MM/YYYY"
                                minDate="10/08/2020"
                                maxDate="10/06/2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                              
                                }}
                                onDateChange={(date) =>
                                    this.setState({
                                        dateStart: date
                                    })
                                } />


                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 4 / 100, backgroundColor: 'white', marginTop: ScreenHeight * 1.5 / 100, marginBottom: ScreenHeight * 1.5 / 100 }}>
                        <Text style={styles.quest1}>Date End</Text>
                        <View style={{ bottom: ScreenHeight * 1.7 / 100, left: ScreenWidth * 0 / 100 }}>
                            <DatePicker

                                date={this.state.dateEnd}
                                mode="date"
                                placeholder="select date"
                                format="DD/MM/YYYY"
                                minDate="10/08/2020"
                                maxDate="10/06/2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                 
                                }}
                                onDateChange={(date) =>
                                    this.setState({
                                        dateEnd: date
                                    })
                                } />
                        </View>
                    </View>
                    {/* <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Other Requirement</Text>

                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.other}
                                onChangeText={(text) => { this.setState({ other: text }) }}
                            />
                        </Form>
                    </View> */}
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Location</Text>

                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.detailLocation}
                                onChangeText={(text) => { this.setState({ detailLocation: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Match Organizer Name</Text>

                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.matchOrganizer}
                                onChangeText={(text) => { this.setState({ matchOrganizer: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Organizer Mobile Phone or Email </Text>

                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.contactOrganizer}
                                onChangeText={(text) => { this.setState({ contactOrganizer: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>First Prize </Text>


                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.firstPrize}
                                onChangeText={(text) => { this.setState({ firstPrize: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Second Prize </Text>


                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.secondPrize}
                                onChangeText={(text) => { this.setState({ secondPrize: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white' }}>
                        <Text style={styles.quest1}>Third Prize </Text>


                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={1.5} bordered placeholder=""
                                value={this.state.thirdPrize}
                                onChangeText={(text) => { this.setState({ thirdPrize: text }) }}
                            />
                        </Form>
                    </View>
                    <View style={{ flexDirection: 'row', height: ScreenHeight * 7 / 100, backgroundColor: 'white', marginBottom: ScreenHeight * 15 / 100 }}>
                        <Text style={styles.quest1}>Other Prize </Text>


                        <Form style={{ width: ScreenWidth * 65 / 100, height: ScreenHeight * 5 / 100, marginLeft: ScreenHeight * 0 / 100 }}>
                            <Textarea rowSpan={5} bordered placeholder=""
                                value={this.state.otherPrize}
                                onChangeText={(text) => { this.setState({ otherPrize: text }) }}
                            />
                        </Form>
                    </View>


                </View>
{/*           
                            <Text>Nama Organizer: {this.state.matchOrganizer}</Text>
                            <Text>Kontak ORG: {this.state.contactOrganizer}</Text>
                            <Text>MatchName: {this.state.matchName}</Text>
                            <Text>Desc: {this.state.matchDescription}</Text>
                            <Text>Slot: { this.state.dateEnd}</Text>
                            <Text>Gender: {this.state.gender}</Text>
                            <Text>FEE: {this.state.registrationFee}</Text>
                            <Text>Age: { this.state.age}</Text>
                            <Text>DADDRESS: {this.state.detailLocation}</Text>
                            <Text>FPLACE: { this.state.firstPrize}</Text>
                            <Text>SECPLACE: {this.state.secondPrize}</Text>
                            <Text>3PLACE: { this.state.thirdPrize}</Text>
                            <Text>OT:{ this.state.otherPrize}</Text>
                            <Text>{ this.props.companyId}</Text>
            <Text>{this.props.sportid}</Text> */}

           

                <TouchableOpacity onPress={() => this.RegisterMatch()} style={styles.next}>
                    <Text style={{ color: 'white', textAlign: 'center', marginTop: ScreenHeight * 2 / 100,fontSize:14, fontWeight:'bold' }}>Create Match</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }

}
const styles = StyleSheet.create({
    next: {
        alignSelf: 'center',
        marginTop: ScreenHeight * 1 / 100,
        backgroundColor: '#0064c2',
        width: ScreenWidth * 40 / 100,
        height: ScreenHeight * 7 / 100,
        borderRadius: 30,
        elevation: 10, marginBottom: ScreenHeight * 1 / 100

    },
    quest1: {
        color: 'black',
        width: ScreenWidth * 31 / 100,
        backgroundColor: 'white',
        marginLeft: ScreenWidth * 2 / 100,
        marginRight: ScreenWidth * 1 / 100
    },
    container1: {
        backgroundColor: 'white'
    },
    kotak1: {
        height: ScreenHeight * 17 / 100,
        width: ScreenWidth,
        backgroundColor: '#ffff00',
        borderBottomWidth: 2,
        borderColor: 'dodgerblue'

    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        height: ScreenHeight * 8 / 100,
        marginTop: ScreenHeight * 2 / 100,
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
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: ScreenWidth * 5 / 100,
        marginTop: ScreenHeight * 2.5 / 100,
        color: 'black'
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
        sportid: state.sportid
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMatchData)
