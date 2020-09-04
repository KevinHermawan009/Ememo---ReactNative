import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions,AsyncStorage, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'


const options = {
    title: 'Choose to change image',
    takePhotoButtonTitle: 'Ambil Menggunakan Kamera',
    chooseFromLibraryButtonTitle: 'Pilih Dari Gallery',
    quality: 0.5,
    maxHeight: 100,
    maxWidth: 100,
}

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://wsdl.maybankfinance.co.id/uat/MAC/getuserdetail'

class Profile extends Component {
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
            visible2: false
        }


    }
    componentDidMount() {

        fetch(link1, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'IZYXlIljQDpDOdthLa2bq2laqnzlsVpgAv3Wi3Ri'
            },
            body: JSON.stringify({
                "ent2":
                {
                    "sesNpk": this.props.username
                }
            })
        })
            .then(response => response.json())
            .then(res => {
                this.setState({
                    name: res.getuserdetailResult.Nickname,
                    jobposition: res.getuserdetailResult.Jobposition,
                    email: res.getuserdetailResult.Email,
                    telepon: res.getuserdetailResult.Telepon,
                    description: res.getuserdetailResult.Description,
                    officelocation: res.getuserdetailResult.Officelocation
                })


            })

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
    render() {
        return (
            <View>
                <View style={styles.Layar1}>
                    <View style={{ width: ScreenWidth * 100 / 100, height: ScreenHeight * 35.65 / 100, backgroundColor: '#0064c2', alignItems: 'center' }}>

                        <View style={styles.Foto}>
                            <TouchableOpacity
                                onPress={
                                    this.TakePhoto
                                }>
                                <View style={{ alignItems: 'center', top: ScreenHeight * 10 / 100 }}>
                                    <Text style={{ color: 'white' }}>
                                        + Add Photo
                                    </Text>
                                </View>
                                <Image
                                    source={this.state.foto}
                                    foto={this.foto}

                                    style={{
                                        height: ScreenHeight * 20 / 100, width: ScreenWidth * 30 / 100,
                                        top: ScreenHeight * 0 / 100,
                                        left: ScreenWidth * 1 / 100,
                                        borderWidth: 2,
                                        borderColor: 'white',
                                        borderRadius: 30,

                                    }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', top: ScreenHeight * 9 / 100 }}>
                            <Text style={{ fontSize: 17, borderBottomColor: 'white', color: 'white', fontWeight: 'bold' }}>{this.state.name}</Text>

                        </View>
                    </View>
                    <View>

                        <View style={{ top: ScreenHeight * -0.2 / 100, backgroundColor: 'rgb(153, 214, 255)', height: ScreenHeight * 8.4 / 100 }}>
                            <Text style={{ left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>Job Position</Text>
                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>{this.state.jobposition}</Text>
                        </View>

                        <View style={{ top: ScreenHeight * -0.2 / 100, backgroundColor: 'white', height: ScreenHeight * 8.4 / 100 }}>
                            <Text style={{ left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>Department</Text>
                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>{this.state.description}</Text>
                        </View>

                        <View style={{ top: ScreenHeight * -0.2 / 100, backgroundColor: 'rgb(153, 214, 255)', height: ScreenHeight * 8.4 / 100 }}>
                            <Text style={{ left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>Office Location</Text>
                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>{this.state.officelocation}</Text>
                        </View>
                        <View style={{ top: ScreenHeight * -0.2 / 100, backgroundColor: 'white', height: ScreenHeight * 8.4 / 100 }}>
                            <Text style={{ left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>Telepon</Text>
                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>{this.state.telepon}</Text>
                        </View>
                        <View style={{ top: ScreenHeight * -0.2 / 100, backgroundColor: 'white', height: ScreenHeight * 8.4 / 100 }}>
                            <Text style={{ left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>Telepon</Text>
                            <Text style={{ fontSize: 12, left: ScreenWidth * 2 / 100, top: ScreenHeight * 0.5 / 100 }}>{this.state.telepon}</Text>
                        </View>
                        <TouchableOpacity  onPress={this.logOut}>
                            <Text>ghesdad</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        top: ScreenHeight * 5 / 100,

        backgroundColor: 'transparent',

    },
})
function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password,
        subsystemid: state.subsystemid,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)