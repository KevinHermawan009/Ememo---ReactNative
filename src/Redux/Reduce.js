const initialState = {
    username: '',
    password: '',
    subsystemid: '',
    finalid: '',
    PasswordDecrypt: '',
    memoId_Choosen: '',
    memoidchoosen: '',
    totalemail: '',
    sportid: '',
    customerId: '',
    companyidchoosen: '',
    provinsiChoosen: '',
    kotaChoosen: '',
    kecamatanChoosen: '',
    ruangGanti: '',
    shower: '',
    ac: '',
    cafe: '',
    wifi: '',
    car: '',
    motor: '',
    spotChoosen: '',
    priceChoosen: '',
    namaLengkap: '',
    emailCust: '',
    bookDate: '',
    startHour: '',
    endHour: '',
    BookId: '',
    paymentId: '',
    matchSportId: '',
    matchIdChoosen: '',
    companyidRatingChoosen: '',
    matchPaymentCode: '',
    companyId: '',
    KecamatanCompany: '',
    KelurahanCompany: '',
    CompanyDetailAddress: '',
    KotaCompany: '',
    ProvinsiCompany: '',
    CompanyName: ''
    // ratingCompanyId: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'setUsername':
            return {
                ...state,
                username: action.payload,
            }

        case 'setPassword':
            return {
                ...state,
                password: action.payload,
            }

        case 'setSubSystemID':
            return {
                ...state,
                subsystemid: action.payload,
            }
        case 'PasswordDecrypt':
            return {
                ...state,
                PasswordDecrypt: action.payload,
            }
        case 'setFinalID':
            return {
                ...state,
                finalid: action.payload,
            }
        case 'setCustomerId':
            return {
                ...state,
                customerId: action.payload,
            }
        case 'setCompanyIdChoosen':
            return {
                ...state,
                companyidchoosen: action.payload,
            }
        case 'setMemoID':
            return {
                ...state,
                memoidchoosen: action.payload
            }
        case 'setemail':
            return {
                ...state,
                totalemail: action.payload
            }
        case 'setSportId':
            return {
                ...state,
                sportid: action.payload
            }
        case 'setProvinsiChoosen':
            return {
                ...state,
                provinsiChoosen: action.payload
            }
        case 'setKotaChoosen':
            return {
                ...state,
                kotaChoosen: action.payload
            }
        case 'setKecamatanChoosen':
            return {
                ...state,
                kecamatanChoosen: action.payload
            }
        case 'setRuangGanti':
            return {
                ...state,
                ruangGanti: action.payload
            }
        case 'setShower':
            return {
                ...state,
                shower: action.payload
            }
        case 'setAc':
            return {
                ...state,
                ac: action.payload
            }
        case 'setCafe':
            return {
                ...state,
                cafe: action.payload
            }
        case 'setWifi':
            return {
                ...state,
                wifi: action.payload
            }
        case 'setCar':
            return {
                ...state,
                car: action.payload
            }
        case 'setMotor':
            return {
                ...state,
                motor: action.payload
            }
        case 'setPriceChoosen':
            return {
                ...state,
                priceChoosen: action.payload
            }
        case 'setSpotChoosen':
            return {
                ...state,
                spotChoosen: action.payload
            }
        case 'setNamaLengkap':
            return {
                ...state,
                namaLengkap: action.payload
            }
        case 'setNamaLapangan':
            return {
                ...state,
                namaLapangan: action.payload
            }
        case 'setEmailCust':
            return {
                ...state,
                emailCust: action.payload
            }
        case 'setBookDateChoosen':
            return {
                ...state,
                bookDate: action.payload
            }
        case 'setStartHourChoosen':
            return {
                ...state,
                startHour: action.payload
            }
        case 'setEndHourChoosen':
            return {
                ...state,
                endHour: action.payload
            }
        case 'setBookId':
            return {
                ...state,
                BookId: action.payload
            }
        case 'setPaymentId':
            return {
                ...state,
                paymentId: action.payload
            }
        case 'setMatchSportId':
            return {
                ...state,
                matchSportId: action.payload
            }
        case 'setMatchIdChoosen':
            return {
                ...state,
                matchIdChoosen: action.payload
            }
        // case 'setRatingCompanyId':
        //     return {
        //         ...state,
        //         ratingCompanyId: action.payload
        //     }
        case 'setcompanyidRatingChoosen':
            return {
                ...state,
                companyidRatingChoosen: action.payload
            }

        case 'setMatchCompanyIdChoosen':
            return {
                ...state,
                matchCompanyIdChoosen: action.payload
            }
        case 'setMatchPaymentCode':
            return {
                ...state,
                matchPaymentCode: action.payload
            }
        case 'setCompanyId':
            return {
                ...state,
                companyId: action.payload
            }
        case 'setKecamatanCompany':
            return {
                ...state,
                KecamatanCompany: action.payload
            }
        case 'setKelurahanCompany':
            return {
                ...state,
                KelurahanCompany: action.payload
            }
        case 'setKotaCompany':
            return {
                ...state,
                KotaCompany: action.payload
            }
        case 'setProvinsiCompany':
            return {
                ...state,
                ProvinsiCompany: action.payload
            }
        case 'setCompanyDetailAddress':
            return {
                ...state,
                CompanyDetailAddress: action.payload
            }
        case 'setCompanyName':
            return {
                ...state,
                CompanyName: action.payload
            }

    }
}