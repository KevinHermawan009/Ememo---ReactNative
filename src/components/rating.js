import React, { Component } from 'react';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { View, Text, Dimensions, ImageBackground, Alert, Image, TouchableOpacity, ScrollView, StyleSheet, Picker, AppRegistry, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { setUsername } from '../Redux/Action';
import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import { Container, Header, Content, Body, Title, Tab, Tabs, TabHeading, DatePicker, Button, Right, Item, Input } from 'native-base';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link1 = 'https://fitaccessproject.herokuapp.com/api/FitAccess/SaveRating'

class rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            closeModal: false,
            chosenDate: new Date(),
            lblSalesHariini: '',
            lblSalesbulanini: '',
            name: '',
            jobposition: '',
            officelocation: '',
            description: '',
            email: '',
            telepon: '',
            foto: '',
            toggle: true,
            visible1: false,
            visible2: false,
            nilaiRating: '',
            bintang1: '1',
            bintang2: '2',
            bintang3: '3',
            bintang4: '4',
            bintang5: '5',
            Deskripsi:''
        }
        this.setDate = this.setDate.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({
            showModal: false,
            closeModal: false,
        })
    }
    changeColor() {
        this.setState({ black: !this.state.black })
    }
    abcde = () => {
        Actions.TabsUser()
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    toggleModal = () => {
        this.setState({
            nilaiRating: this.state.bintang1,
            showModal: !this.state.showModal
        })
    }
    toggleModal2 = () => {
        this.setState({
            nilaiRating: this.state.bintang2,
            showModal: !this.state.showModal
        })
    }
    toggleModal3 = () => {
        this.setState({
            nilaiRating: this.state.bintang3,
            showModal: !this.state.showModal
        })
    }
    toggleModal4 = () => {
        this.setState({
            nilaiRating: this.state.bintang4,
            showModal: !this.state.showModal
        })
    }
    toggleModal5 = () => {
        this.setState({
            nilaiRating: this.state.bintang5,
            showModal: !this.state.showModal
        })
    }
    getRating = () =>{
        fetch(link1, {
            method: 'POST',
            headers: {
            
                'Content-Type': 'application/json',
           
            },
            body: JSON.stringify({
                "CompanyId": this.props.companyidRatingChoosen,
                "CustomerId":this.props.customerId,
                "Bintang": this.state.nilaiRating,
                "Deskripsi": this.state.Deskripsi
            })
        })
            .then(response => response.json())
            .then(res => {
                if(res.Message == 'Sukses'){
                    this.abcde();
                    this.closeModal();
                }else{
                    alert("ERROR")
                }


            })
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" enabled>

                <Modal isVisible={this.state.showModal} onBackdropPress={this.closeModal} >
                    <View style={{ width: ScreenWidth * 90 / 100, height: ScreenWidth * 90 / 100, backgroundColor: 'white' }}>
               
                            <Item style={{ width: ScreenWidth * 70 / 100, alignSelf: 'center', marginTop: ScreenHeight * 20 / 100 }}>
                                <Input style={{ fontSize: 12, marginBottom: ScreenHeight * -2 / 100, width: ScreenWidth * 10 / 100 }} onChangeText={(text) => { this.setState({ Deskripsi: text }) }} placeholder="Masukan Komentar Anda" />
                            </Item>
                            {/* <Text>HALLO{this.state.Deskripsi}</Text> */}
                  
                        <TouchableOpacity
                           onPress={this.getRating}
                            style={{
                                marginTop: ScreenHeight * 8 / 100,
                                width: ScreenWidth * 30 / 100,
                                backgroundColor: '#0064c2',
                                height: ScreenHeight * 6 / 100,
                                alignItems: 'center',
                                alignSelf: 'center',
                                elevation: 10,
                                borderRadius: 10

                            }}>
                            <Text style={{ color: 'white', marginTop: ScreenHeight * 1.5 / 100, fontSize: 12 }}>Submitt</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={this.closeModal}
                            style={{
                                marginTop: ScreenHeight * 1 / 100,
                                width: ScreenWidth * 30 / 100,
                                backgroundColor: '#0064c2',
                                height: ScreenHeight * 6 / 100,
                                alignItems: 'center',
                                alignSelf: 'center',
                                elevation: 10,
                                borderRadius: 10

                            }}>
                            <Text style={{ color: 'white', marginTop: ScreenHeight * 1.5 / 100, fontSize: 12 }}>Close</Text>
                        </TouchableOpacity> */}
                    </View>
                    {/* <TouchableOpacity onPress={this.closeModal} style={{ top: ScreenHeight * 10 / 100, left: ScreenWidth * 40 / 100 }}>
                        <Text style={{ color: 'yellow' }}>BACK</Text>
                    </TouchableOpacity> */}
                </Modal>

                <View style={{
                    backgroundColor: 'white',
                    width: ScreenWidth,
                    height: ScreenHeight,
                }}>
                    <View style={styles.topkonten}>
                        <View style={{ marginTop: ScreenHeight * 2 / 100 }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>Rate Your Experience!</Text>
                            {/* <Text>{this.props.companyidRatingChoosen}</Text> */}
                        </View>
                        <View style={{ marginTop: ScreenHeight * 10 / 100, flexDirection: 'row' }}>
                            <TouchableOpacity

                                onPress={() => { this.toggleModal() }}
                                style={styles.strbtn}
                            >
                                <View style={{ alignSelf: 'center', width: ScreenWidth * 20 / 100 }}>
                                    <Icon name="star" style={{ color: 'white', alignSelf: 'center' }} size={11}></Icon>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={() => { this.toggleModal2() }}
                                style={styles.strbtn}>
                                <View style={{ width: ScreenWidth * 20 / 100, flexDirection: 'row', marginLeft: ScreenWidth * 7 / 100 }}>

                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={() => { this.toggleModal3() }}
                                style={styles.strbtn}>
                                <View style={{ marginLeft: ScreenWidth * 5 / 100, flexDirection: 'row' }}>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: ScreenHeight * 5 / 100, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity 
                             onPress={() => { this.toggleModal4() }}
                            style={styles.strbtn}>
                                <View style={{ marginLeft: ScreenWidth * 4 / 100, flexDirection: 'row' }}>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                             onPress={() => { this.toggleModal5() }}
                            style={styles.strbtn}>
                                <View style={{ marginLeft: ScreenWidth * 2.5 / 100, flexDirection: 'row' }}>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                    <Icon name="star" style={{ color: 'white' }} size={11}></Icon>
                                </View>
                            </TouchableOpacity>



                        </View>

                    </View>

                </View>

            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    topkonten: {
        height: ScreenHeight * 50 / 100,
        width: ScreenWidth * 96 / 100,
        marginTop: ScreenHeight * 5 / 100,
        backgroundColor: '#FF7314',
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    txt1: {
        top: ScreenHeight * 0 / 100,
        fontSize: 16,
        color: 'white',

    },
    strbtn: {
        height: ScreenHeight * 5 / 100,
        backgroundColor: '#0064c2',
        marginLeft: ScreenWidth * 5 / 100,
        flexDirection: 'row',
        width: ScreenWidth * 20 / 100,
        alignItems: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#0064c2'
    },
    strbtn1: {
        height: ScreenHeight * 5 / 100,
        backgroundColor: '#18b0b0',
        marginLeft: ScreenWidth * 1 / 100,
        flexDirection: 'row',
        width: ScreenWidth * 18 / 100,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,
        borderColor: '#0064c2'
    },
    textdata1: {
        color: 'black',
        fontSize: 14,
        textAlign: 'right'
    },
    txt133: {
        marginTop: ScreenHeight * 1 / 100,
        fontSize: 16,
        color: 'black'
    },
    txt12: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        left: ScreenWidth * 3 / 100
    },
    bt1: {
        backgroundColor: '#fb7813',
        height: ScreenHeight * 7.5 / 100,
        width: ScreenWidth * 17.56 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenWidth * 3 / 100,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 5
    },
    bc2: {
        width: ScreenWidth,
        height: ScreenHeight
    },
    bc21: {
        top: ScreenHeight * 3 / 100,
        flexDirection: 'row',
        width: ScreenWidth * 96 / 100,
        marginLeft: ScreenWidth * 2 / 100
    },
    bc22: {
        top: ScreenHeight * 6 / 100,
        flexDirection: 'row',

    },
    barjudul: {
        fontSize: 16,
        textAlign: "center",
        color: 'white',
        fontWeight: '400'
    },
    bc23: {
        top: ScreenHeight * 8 / 100,
        flexDirection: 'row',

    },
    gambarlp: {
        width: ScreenWidth * 100 / 100,
        height: ScreenHeight * 40 / 100,
    },
    iconst: {
        backgroundColor: '#0064c2',
        width: ScreenWidth * 15.5 / 100,
        marginLeft: ScreenWidth * 7.5 / 100,
        height: ScreenHeight * 8.2 / 100,
        top: ScreenHeight * 2 / 100,
        borderRadius: 100,
        flexDirection: 'column'


    },
    bc1: {
        backgroundColor: 'white',

    },
    picker1: {
        width: ScreenWidth * 30 / 100,
        borderBottomWidth: 1,
        alignContent: 'flex-end'

    },
    isidc: {
        marginTop: ScreenHeight * 1 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        color: 'black',
        flex: 1,
        flexDirection: 'row',
        marginBottom: ScreenHeight * 1 / 100
    },
    isiop: {
        marginTop: ScreenHeight * 1 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        marginBottom: ScreenHeight * 1 / 100,


        flex: 1,
        flexDirection: 'row'
    },
    isilc: {
        marginTop: ScreenHeight * 2 / 100,
        left: ScreenWidth * 1.5 / 100,
        width: ScreenWidth * 97 / 100,
        height: ScreenHeight * 10 / 100,
        flex: 1,
        flexDirection: 'row'
    },
    dc1: {
        backgroundColor: '#0064c2',
        elevation: 3
    },
    Layar1: {
        height: ScreenHeight * 100 / 100,
        width: ScreenWidth * 100 / 100,
        backgroundColor: 'transparent',
    },
    Foto: {
        height: ScreenHeight * 20 / 100,
        width: ScreenWidth * 30 / 100,
        top: ScreenHeight * 5 / 100,
        backgroundColor: 'transparent',
    },
    b1: {
        backgroundColor: 'white',
        width: ScreenWidth * 70 / 100,
    },
    buttontime: {
        height: ScreenHeight * 7.5 / 100,
        width: ScreenWidth * 17.56 / 100,
        marginLeft: ScreenWidth * 2 / 100,
        marginTop: ScreenWidth * 3 / 100,
        borderRadius: 15,
        alignItems: 'center',
    },
    price: {
        backgroundColor: '#fb7813',
        height: ScreenHeight * 5 / 100,
        width: ScreenWidth * 20 / 100,
        borderRadius: 7,
        alignSelf: 'flex-end',
        marginTop: ScreenHeight * 33 / 100
    },
    pricetext: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: ScreenHeight * 1 / 100

    }

})
function mapStateToProps(state) {
    return {
        // username: state.username,
        // password: state.password,
        companyidRatingChoosen: state.companyidRatingChoosen,
        customerId: state.customerId
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rating)