import React, { Component } from 'react';
import { KeyboardAvoidingView, AsyncStorage, View,ScrollView, ProgressBarAndroid, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, borderColor, borderWidth, screens, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setUsername, setPassword, setSubSystemID, setPasswordDecrypt } from '../Redux/Action';
import Spinner from 'react-native-loading-spinner-overlay'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
class BasketballRules extends Component {

    render(){
        return(
            <View>
                       <ScrollView>
                 <View style={{alignSelf:'center'}}>
                  <ImageBackground  source={require('../image/bolabasket.png')} 
                     style={{
                       width: ScreenWidth * 14.5 / 100,
                       height: ScreenHeight * 10 / 100,
                     }}
                  ></ImageBackground>
                  </View>
                  <Text style={styles.asd}>Basketball Rules</Text>
        <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>1. Bola dapat dilemparkan ke segala arah dengan menggunakan salah satu atau kedua tangan.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>2. Bola dapat dipukul ke segala arah dengan menggunakan salah satu tangan, tetapi tidak boleh dipukul menggunakan kepalan tangan (meninju).</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>3. Pemain tidak diperbolehkan berlari sambil memegang bola. Pemain harus melemparkan bola tersebut dari titik tempat menerima bola, tetapi diperbolehkan apabila pemain tersebut berlari pada kecepatan biasa.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>4. Bola harus dipegang di dalam atau di antara telapak tangan. Lengan atau anggota tubuh lainnya tidak diperbolehkan memegang bola.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>5. Pemain tidak diperbolehkan menyeruduk, menahan, mendorong, memukul, atau menjegal pemain lawan dengan cara bagaimanapun. Pelanggaran pertama terhadap peraturan ini akan dihitung sebagai kesalahan, pelanggaran kedua akan diberi sanksi berupa diskualifikasi pemain pelanggar hingga keranjang timnya dimasuki oleh bola lawan, dan apabila pelanggaran tersebut dilakukan dengan tujuan untuk mencederai lawan, maka pemain pelanggar akan dikenai hukuman tidak boleh ikut bermain sepanjang pertandingan. Pada masa ini, pergantian pemain tidak diperbolehkan.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>6. Sebuah kesalahan dibuat pemain apabila memukul bola dengan kepalan tangan (meninju), melakukan pelanggaran terhadap aturan 3 dan 4, serta melanggar hal-hal yang disebutkan pada aturan 5.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>7. Apabila salah satu pihak melakukan tiga kesalahan berturut-turut, maka kesalahan itu akan dihitung sebagai gol untuk lawannya (berturut-turut berarti tanpa adanya pelanggaran balik oleh lawan).</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>8. Gol terjadi apabila bola yang dilemparkan atau dipukul dari lapangan masuk ke dalam keranjang, dalam hal ini pemain yang menjaga keranjang tidak menyentuh atau mengganggu gol tersebut. Apabila bola terhenti di pinggir keranjang atau pemain lawan menggerakkan keranjang, maka hal tersebut tidak akan dihitung sebagai sebuah gol.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>9. Apabila bola keluar lapangan pertandingan, bola akan dilemparkan kembali ke dalam dan dimainkan oleh pemain pertama yang menyentuhnya. Apabila terjadi perbedaan pendapat tentang kepemilikan bola, maka wasitlah yang akan melemparkannya ke dalam lapangan. Pelempar bola diberi waktu 5 detik untuk melemparkan bola dalam genggamannya. Apabila ia memegang lebih lama dari waktu tersebut, maka kepemilikan bola akan berpindah. Apabila salah satu pihak melakukan hal yang dapat menunda pertandingan, maka wasit dapat memberi mereka sebuah peringatan pelanggaran.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>10. Wasit berhak untuk memperhatikan permainan para pemain dan mencatat jumlah pelanggaran dan memberi tahu wasit pembantu apabila terjadi pelanggaran berturut-turut. Wasit memiliki hak penuh untuk memberikan diskualifikasi pemain yang melakukan pelanggaran sesuai dengan yang tercantum dalam aturan 5.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>11. Wasit pembantu memperhatikan bola dan mengambil keputusan apabila bola dianggap telah keluar lapangan, pergantian kepemilikan bola, serta menghitung waktu. Wasit pembantu berhak menentukan sah tidaknya suatu gol dan menghitung jumlah gol yang terjadi.</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>12. Waktu pertandingan adalah 4 quarter masing-masing 10 menit</Text>
         </View>
         <View style={{borderTopWidth:2}}>
          <Text style={styles.abc}>13. Pihak yang berhasil memasukkan bola ke ring terbanyak akan dinyatakan sebagai pemenang</Text>
         </View>
         </ScrollView>
         </View>)
    }
}
const styles = StyleSheet.create({
    InputBox: {
        borderWidth: 1,
        borderColor: 'black',
        width: ScreenWidth * 70 / 100,
        height: ScreenHeight * 7 / 100,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 0.5,
        marginTop: 2,
        justifyContent: 'center',



    },
    abc: {
        fontSize: 17,
        fontWeight:'400',
        color:'black',
        left:ScreenWidth*3/100, 
        width:ScreenWidth*97/100
    },
    asd: {
        textAlign:'center',
        fontSize: 40,
        fontWeight:'500',
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
        borderRadius: 15,
    },
    container: {
        flex: 1
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
        borderWidth: 3,
        marginBottom: 10,
    },
    submitButtonText: {
        color: 'white'
    }
});
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
export default connect(mapStateToProps, mapDispatchToProps)(BasketballRules)