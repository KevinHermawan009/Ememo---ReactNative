import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, Drawer } from 'react-native-router-flux';
import { Image, AsyncStorage, TouchableOpacity, renderTitle, ImageBackground, Text, View, Dimensions } from 'react-native';
import Login from '../pages/login';
import LoginType from '../pages/LoginType';
import Loadingpage from '../pages/loadingpage';

import TabIcon1 from '../components/TabIcon1';
import Tabicon2 from '../components/Tabicon2';
import Tabicon3 from '../components/Tabicon3';
import Tabicon4 from '../components/Tabicon4';
import Tabicon5 from '../components/Tabicon5';
import History from '../components/History';
import RegisterUser from '../pages/RegisterUser';
import Dashboard from '../components/Dashboard';
import Memo from '../components/Memo';
import Profile from '../components/Profile';
import MemberLocation from '../components/MemberLocation';
import BasketballRules from '../components/BasketballRules'
import Criteria from '../components/Criteria';
import MemberFac from '../components/MemberFac';
import SportLocation from '../components/SportLocation';
import MatchRules from '../components/MatchRules';
import Match from '../components/Match';
import DetailLapangan from '../components/DetailLapangan';
import Booking from '../components/Booking';
import MemberSportList from '../components/MemberSportList';
import DetailLapanganAdm from '../AdminWorks/DetailLapanganAdm';
import RegisterCompany from '../AdminWorks/RegisterCompany';
import LoginAdmin from '../AdminWorks/LoginAdmin';
import RegisterAdmin from '../AdminWorks/RegisterAdmin';
import RegisterSport from '../AdminWorks/RegisterSport';
import DataPesertaLomba from '../AdminWorks/DataPesertaLomba';
import DashboardAdmin from '../AdminWorks/DashboardAdmin';
import KontakKami from '../AdminWorks/KontakKami';
import RegisterType from '../AdminWorks/RegisterType';
import RegisterData from '../AdminWorks/RegisterData';
import MatchType from '../AdminWorks/MatchType';
import PilihOlahragaLomba from '../AdminWorks/PilihOlahragaLomba';
import RegisterMatchData from '../AdminWorks/RegisterMatchData';
import Pendapatan from '../AdminWorks/Pendapatan';
import BusinessCareType from '../AdminWorks/BusinessCareType';
import DataSewa from '../AdminWorks/DataSewa';
import MatchSaya from '../AdminWorks/MatchSaya';
import IsiMatchSaya from '../AdminWorks/IsiMatchSaya';
import ProfileAdmin from '../AdminWorks/ProfileAdmin';
import RegisterCriteria from '../AdminWorks/RegisterCriteria';
import EditProfileAdmin from '../AdminWorks/EditProfileAdmin';
import EditProfileUser from '../components/EditProfileUser';
import PilihLokasiLomba from '../AdminWorks/PilihLokasiLomba';
import DataPendapatan from '../AdminWorks/DataPendapatan';
import rating from '../components/rating';
import TimeSelection from '../components/TimeSelection';
import OTPUser from '../components/OTPUser';
import OTPMatch from '../components/OTPMatch';
import OTPLoginUser from '../components/OTPLoginUser';
import OTPAdmin from '../AdminWorks/OTPAdmin';
import IncomeSportType from '../AdminWorks/IncomeSportType';
import OperationalTime from '../AdminWorks/OperationalTime';
import TimeSelectionAdm from '../AdminWorks/TimeSelectionAdm';
import MatchSportType from '../components/MatchSportType';



const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export default class Root extends Component {

    loginPressed = () => {
        Actions.login()
    }

    burgerPressed() {
        Actions.drawerOpen()
    }
    logOut = async () => {
        try {
            const remove = await AsyncStorage.removeItem('key1');
            const remove1 = await AsyncStorage.removeItem('key2');
            const remove2 = await AsyncStorage.removeItem('key3');
            const value = await AsyncStorage.getItem('key1');
            const value1 = await AsyncStorage.getItem('key2');
            const value2 = await AsyncStorage.getItem('key3');
            Actions.login()
        } catch (error) {
            alert("Error resettting data" + error);
        }
    }
    render() {
        return (
            <Router>
                <Stack
                    key="root"
                    hideNavBar={true}
                    navigationBarStyle={{ backgroundColor: '#0064c2', height: ScreenHeight * 8 / 100}}
                    titleStyle={{
                        color:'white',
                        fontSize: 16
                    
                    }}
                    >
           
                    <Scene component={Loadingpage} key='loadingpage' />
                    <Scene initial={true} component={Login} key='login'/>
                    <Scene initial={true} component={LoginType} key='LoginType'/>
     
              
                    <Scene
                        tabs
                        key="TabsUser"
                        hideNavBar={true}
                        type='reset'
                        // inactiveTintColor='red '
                        activeTintColor='white'
                        inactiveBackgroundColor='#0064c2'
                        tabBarStyle={{  backgroundColor: 'dodgerblue', height: ScreenHeight * 7.5 / 100}}
                    >
                        <Scene
                            key='Tab2'
                            iconName='Calendar'
                            title='Booking'
                            icon={Tabicon2}
                            hideNavBar={false}
                            barColor='dodgerblue'
                            pressColor='rgba(255, 255, 255, 0.16)'
                            component={Dashboard} 
                            hideNavBar={true}
                            />
                        <Scene
                            key='Tab4'
                            title='Activity'
                            iconName='history'
                            icon={Tabicon4}
                            hideNavBar={true}
                            barColor='tomatoe'
                            pressColor='rgba(255, 255, 255, 0.16)'
                            component={History} />
                        <Scene
                            key='Tab5'
                            title='Profile'
                            iconName='user-o'
                            icon={Tabicon5}
                            hideNavBar={false}
                            barColor='tomatoe'
                            pressColor='rgba(255, 255, 255, 0.16)'
                            component={Profile} />
                    </Scene>
                    
                    <Scene
                        tabs
                        key="TabssAdmin"
                        hideNavBar={true}
                        type='reset'
                        inactiveTintColor='#116979 '
                        activeTintColor='white'
                        inactiveBackgroundColor='#0064c2'
                        tabBarStyle={{  backgroundColor: 'dodgerblue', height: ScreenHeight * 7.5 / 100}}
                        // renderTitle={
                        //     <View style={{flexDirection:'row'}}>
                        //         <ImageBackground
                        //         source={require('../image/FA1.png')}
                        //         style={{
                        //             width:ScreenWidth*35/100,
                        //             height:ScreenHeight*7.5/100
                        //         }}> 
                        //         </ImageBackground>
                              
                        //     </View>
                        // }
                        titleStyle={{
                            color:'white',
                            fontSize: 16
                        
                        }}
                    >
                        <Scene
                            key='Tab3'
                            iconName='Home'
                            title='Dashboard'
                            icon={Tabicon3}
                            hideNavBar={false}
                            barColor='dodgerblue'
                            pressColor='rgba(255, 255, 255, 0.16)'
                            component={DashboardAdmin} 
                            />
                             <Scene
                            key='Tab5'
                            title='Company Profile'
                            iconName='user-o'
                            icon={Tabicon5}
                            hideNavBar={false}
                            barColor='tomatoe'
                            pressColor='rgba(255, 255, 255, 0.16)'
                            component={ProfileAdmin} />
                    </Scene>
                    {/* <Scene component={Register} key='register' /> */}
                    <Scene component={Dashboard}            key='Dashboard' />
                    <Scene component={LoginType}            key='LoginType' />
                    <Scene component={Memo}                 key='Memo' />
                    <Scene component={Profile}              key='Profile' />
                    <Scene component={BasketballRules}      key='BasketballRules' />
                    <Scene component={Criteria}             key='Criteria'              title="Find Location and Facility"                        hideNavBar ={false} />
                    <Scene component={MemberLocation}       key='MemberLocation'        title="Member List Location"             hideNavBar ={false} />
                    <Scene component={DataPendapatan}       key='DataPendapatan'        title="My Income"        hideNavBar ={false} />
                    <Scene component={MemberFac}            key='MemberFac'             title="Member Facility"                  hideNavBar ={false}  />
                    <Scene component={SportLocation}        key='SportLocation'         title="Sport Field"    hideNavBar ={false}/>
                    <Scene component={DetailLapangan}       key='DetailLapangan'        hideNavBar ={true} />
                    <Scene component={OperationalTime}              key='OperationalTime'               title="OperationalTime"              hideNavBar ={false} />
                    <Scene component={Booking}              key='Booking'               title="Detail Payment"              hideNavBar ={false} />
                    <Scene component={Match}                key='Match'                 title="Match Avaible"         hideNavBar ={false} />
                    <Scene component={MatchSaya}            key='MatchSaya'             title="My Match"                  hideNavBar ={false} />
                    <Scene component={IsiMatchSaya}         key='IsiMatchSaya'          title="Match Detail Data"               hideNavBar ={false} />
                    <Scene component={MatchRules}           key='MatchRules'            title="Match Rules & Registry"      hideNavBar ={false} />
                    <Scene component={MemberSportList}      key='MemberSportList'       title="Sport List"                  hideNavBar ={false} />
                    <Scene component={RegisterAdmin}        key='RegisterAdmin'         title="Register New Admin"               hideNavBar ={false} />
                    <Scene component={RegisterUser}         key='RegisterUser'          title="Register New User"                hideNavBar ={false} />
                    <Scene component={RegisterCompany}      key='RegisterCompany'       title="RegisterCompany"             hideNavBar ={false} />
                    <Scene component={RegisterSport}        key='RegisterSport'         title="RegisterSport"               hideNavBar ={false} />
                    <Scene component={DetailLapanganAdm}    key='DetailLapanganAdm'     title="My Field Data"           hideNavBar ={false} />
                    <Scene component={DashboardAdmin}       key='DashboardAdmin'        title="Dashboard" hideNavBar ={false} type = 'reset' />
                    <Scene component={RegisterType}         key='RegisterType'          title="Choose Field Type"                hideNavBar ={false} />
                    <Scene component={DataSewa}             key='DataSewa'              title="My Sport Field"                    hideNavBar ={false} />
                    <Scene component={PilihOlahragaLomba}   key='PilihOlahragaLomba'    title="Match Sport Type"           hideNavBar ={false} />
                    <Scene component={BusinessCareType}     key='BusinessCareType'      title="Choose Sport Type"       hideNavBar ={false} />
                    <Scene component={RegisterMatchData}    key='RegisterMatchData'     title="Match Registration"           hideNavBar ={false} />
                    <Scene component={RegisterData}         key='RegisterData'          title="Register Data"                hideNavBar ={false} />
                    <Scene component={EditProfileAdmin}     key='EditProfileAdmin'      title="Edit Profile Admin"            hideNavBar ={false} />
                    <Scene component={EditProfileUser}      key='EditProfileUser'       title="Edit Profile User"             hideNavBar ={false} />
                    <Scene component={MatchType}            key='MatchType'             title="Match Care"                   hideNavBar ={false} />
                    <Scene component={LoginAdmin}           key='LoginAdmin'     />
                    <Scene component={rating}               key='rating'                title="Rating"                   hideNavBar ={false} />
                    <Scene component={RegisterCriteria}     key='RegisterCriteria'      title="My Facility"                   hideNavBar ={false} />
                    <Scene component={PilihLokasiLomba}     key='PilihLokasiLomba'      title="Pilih Lokasi Lomba"                   hideNavBar ={false} />
                    <Scene component={Pendapatan}           key='Pendapatan'            title="My Income"                   hideNavBar ={false} />
                    <Scene component={OTPMatch}             key='OTPMatch'                                                  hideNavBar ={true} />
                    <Scene component={OTPAdmin}             key='OTPAdmin'              title="OTPAdmin"                   hideNavBar ={true} />
                    <Scene component={DataPesertaLomba}     key='DataPesertaLomba'      title="Match Participant"                   hideNavBar ={false} />
                    <Scene component={KontakKami}           key='KontakKami'            title="Help Center"                   hideNavBar ={false} />
                    <Scene component={MatchSportType}       key='MatchSportType'        title="MatchSportType"                   hideNavBar ={false} />
                    <Scene component={TimeSelectionAdm}       key='TimeSelectionAdm'        title="Time Selection"                   hideNavBar ={false} />
                    <Scene component={IncomeSportType}       key='IncomeSportType'        title="Choose Sport"                   hideNavBar ={false} />
                    <Scene component={TimeSelection}        key='TimeSelection'                   hideNavBar ={true} />
                    <Scene component={ProfileAdmin}         key='ProfileAdmin'           title="Company Profile"            hideNavBar ={false} />
                    <Scene component={OTPUser}              key='OTPUser'          />
                    <Scene component={OTPLoginUser}              key='OTPLoginUser'          />
                </Stack>
            </Router >
        );
    }

}
