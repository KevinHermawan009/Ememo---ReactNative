<View style={{alignItems: 'center'}}>
<View style={{
    alignItems: 'center',
    width: ScreenWidth * 80 / 100,
    left: ScreenWidth * 0 / 100,
    top: ScreenHeight * 12.5 / 100,
    borderWidth: 0.5,
    borderRadius: 15,
    height: ScreenHeight * 27.5 / 100,
    backgroundColor: '#2E2E2E'

}
}>
    <View style={{ backgroundColor: '#2E2E2E', width: ScreenWidth * 70 / 100 }}>
        <Text style={{
            borderBottomColor: 'black',
            fontSize: 20, color: 'black',
            color: '#fee140'
        }}>
            Tanggal Mulai Cuti
    </Text>
    </View>
    <View style={
        styles.InputBox
    }>
        <DatePicker
            style={{ width: ScreenWidth * 40 / 100 }}
            date={this.state.TanggalCuti}
            mode="date"
          
            format="YYYY-MM-DD"
            minDate={this.minDateProp}
            maxDate={this.defaultDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            hideText={false}
            showIcon={true}
            customStyles={{
                dateIcon: {
                    resizeMode: 'stretch',
                    position: 'absolute',
                    left:ScreenWidth*57/100

                },
                placeholderText: {
                    color: '#957D00',
                    fontWeight: 'bold',
                    fontSize: 15,
                    left: ScreenHeight * 1.5 / 100
                },

                dateInput: {
                    width: ScreenWidth * 5 / 100,
                    borderWidth: 0,
                    right: ScreenHeight * 4.1 / 100,
                }
            }}
            onDateChange={(date) => { this.setState({ TanggalCuti: date }) }}
        />

    </View>
    <View style={{ backgroundColor: '#2E2E2E', width: ScreenWidth * 70 / 100 }}>
        <Text style={{ borderBottomColor: 'black', fontSize: 20, color: 'orange' }}>Tanggal Selesai Cuti</Text>
    </View>



    <View style={styles.InputBox}>
        <DatePicker
            style={{
                width: ScreenWidth * 40 / 100,
                height: ScreenHeight * -5 / 100
            }}
            date={this.state.TanggalAkhirCuti}
            mode="date"
          
            format="YYYY-MM-DD"
            minDate={this.minDateProp}
            maxDatemaxDate={this.defaultDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            hideText={false}
            showIcon={true}
            customStyles={{
                dateIcon: {
                    resizeMode: 'stretch',
                    position: 'absolute',
                    left:ScreenWidth*57/100
                },
                placeholderText: {
                    color: '#957D00',
                    fontWeight: 'bold',
                    fontSize: 15,
                    left: ScreenHeight * 1.5 / 100
                },
                dateInput: {
                    width: ScreenWidth * 5 / 100,
                    borderWidth: 0,
                    right: ScreenHeight * 4.1 / 100,

                }
            }}
            onDateChange={(date) => { this.setState({ TanggalAkhirCuti: date }) }}
        />
    </View>                    
</View>
<TouchableOpacity
            style={{
                marginTop: ScreenHeight * 13/100,
                height: ScreenHeight * 8 / 100,
                width: ScreenWidth * 45 / 100,
                backgroundColor: '#2E2E2E',
                borderColor: '#151515',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: ScreenWidth * 2 / 100,
                borderWidth: 1,
                borderRadius: 20,
            }}
            onPress={this.submitt}
        >
                <Text style={{ color: 'yellow' }}>
                    Submit
                </Text>
        </TouchableOpacity>
</View>