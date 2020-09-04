import React , { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text,Dimensions } from 'react-native';
import { View, Badge } from 'native-base';
import IconBadge from 'react-native-icon-badge';
import { connect } from 'react-redux';
import {setemail} from '../Redux/Action';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const link = 'https://wsdl.maybankfinance.co.id/uat/MAC/BindDataEmailui'

class TabIcon1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            total:0
        }
    }

    componentDidMount () {
        alert(this.props.username)
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
                this.setState({
                    total:JSON.parse(res.BindDataEmailuiResult).length
                })
                this.props.setemail(JSON.parse(res.BindDataEmailuiResult).length)
            })
    }
    render() {
        return (
            
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                <IconBadge
                MainElement={
                <Icon name = "vcard-o" style={{color:'rgb(0, 102, 75)'}} size={25}/>
            }
            BadgeElement={
                <Text style={{ color: 'white' }}>{this.props.totalemail}</Text>
             }
             IconBadgeStyle={
                {
                    left:16,
                    top:ScreenHeight*-2/100,
                    
                   width: 30,
                   height: 30,
                   backgroundColor: 'red'
                }
             }
             Hidden={this.props.totalemail == 0}
             />    
                </View>
        )
    }
}

function mapStateToProps ( state ) {
    return {
        username : state.username,
        totalemail : state.totalemail
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        setemail : ( totalemail ) => {
            dispatch ( setemail ( totalemail ) )
        }
    }
}

export default connect ( mapStateToProps , mapDispatchToProps ) (TabIcon1)