import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Picker } from 'react-native-wheel-pick';

export default function Home({navigation}) {

    const [ModalShow,setModalView]=useState(false);
    
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text style={style.screenName}>
                    Today’s Games
                </Text>
            </View>

            <View style={{ flex: 1 }}>
                <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={style.cardBg} source={require('../Assets/card_bg.png')}>
                    <View style={style.cardLineone}>
                        <Text style={style.undertxt}>
                            Under or Over
                        </Text>

                        <View
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <Text style={style.startingtxt}>
                                Staring In:
                            </Text>

                            <View style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
                                <Image source={require('../Assets/clock.png')} />
                                <Text style={style.timer}>
                                    03:23:12
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={style.priceHeader}>
                            Bitcoin price will be under
                        </Text>

                        <Text style={style.priceNdate}>
                            $24,524 at 7 a ET on 22nd Jan’21
                        </Text>
                    </View>
                </ImageBackground>

                <View style={style.gameDetail_section}>
                    <View style={style.FeeTable}>
                        <View>
                            <Text style={style.tableHeader}>
                                Prize Pool
                            </Text>

                            <Text style={style.tableCell}>
                                $12,000
                            </Text>
                        </View>

                        <View>
                            <Text style={style.tableHeader}>
                                Under
                            </Text>

                            <Text style={style.tableCell}>
                                3.25X
                            </Text>
                        </View>

                        <View>
                            <Text style={style.tableHeader}>
                                Over
                            </Text>

                            <Text style={style.tableCell}>
                                1.25X
                            </Text>
                        </View>

                        <View>
                            <Text style={style.tableHeader}>
                                Entry Fee
                            </Text>

                            <Text style={style.tableCell}>
                                5
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={style.predicttxt}>
                            What’s your prediction?
                        </Text>

                        <View style={style.predictionbtn_section}>
                            <TouchableOpacity style={style.underbtn} onPress={()=>setModalView(true)}>
                                <Text style={style.btntxt}>
                                    Under
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.overbtn} onPress={()=>setModalView(true)}>
                                <Text style={style.btntxt}>
                                    Over
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.cardFooter}>
                        <View style={style.row}>

                            <View style={style.row}>
                                <Image source={require('../Assets/user.png')} style={{ width: 15, height: 15, resizeMode: 'contain', marginHorizontal: 10 }} />

                                <Text>
                                    355 Players
                                </Text>
                            </View>

                            <View style={style.row}>
                                <Image source={require('../Assets/graph.png')} style={{ width: 15, height: 15, resizeMode: 'contain', marginHorizontal: 10 }} />
                                <Text>
                                    View Chart
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Image source={require('../Assets/progess_bar.png')} style={{ width: "100%", resizeMode: 'contain' }} />
                        </View>

                        <View style={style.row}>
                            <Text style={style.preductionundertxt}>
                                232 predicted under
                            </Text>

                            <Text style={style.preductionundertxt}>
                                123 predicted over
                            </Text>
                        </View>
                    </View>

                </View>

            </View>

            <Modal
                visible={ModalShow}
                transparent
                onRequestClose={()=>{setModalView(false)}}
                animationType='fade'
            >
                <>
                    <View style={style.overlay} />
                    <View style={style.ModalView}>
                        <Text style={style.modalHead}>
                            Your Prediction is Under
                        </Text>

                        <View>
                            <Text style={style.tickettxt}>
                                Entry tickets
                            </Text>
                        </View>

                        <View>
                            <Picker
                                style={{ backgroundColor: 'white', width: '100%', height: 215 }}
                                selectedValue='4'
                                pickerData={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                                onValueChange={value => { console.log(value) }}
                            />
                        </View>

                        <View style={style.row}>
                            <View>
                                <Text>
                                    You can win
                                </Text>

                                <Text style={style.amountbox}>
                                    $ 2000
                                </Text>
                            </View>

                            <View style={style.row}>
                                <Text style={style.totaltxt}>
                                    Total
                                </Text>

                                <View>
                                    <Image source={require('../Assets/coin.png')} style={{ width: 20, height: 20 }} />
                                </View>

                                <Text style={style.coinamounttxt}>
                                    5
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={style.submitbtn} onPress={()=>{navigation.navigate("Bottomnavigation")}}>
                            <Text style={style.btntxt}>
                                Submit my prediction
                            </Text>
                        </TouchableOpacity>

                    </View>
                </>
            </Modal>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        padding: 20
    },
    screenName: {
        fontWeight: '600',
        fontSize: 16,
        color: '#333333',
        marginBottom: 20
    },
    undertxt: {
        fontWeight: "600",
        fontSize: 12,
        color: '#D2BAF5'
    },
    cardLineone: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    startingtxt: {
        fontWeight: "500",
        fontSize: 12,
        color: "#B296DC"
    },
    cardBg: {
        padding: 20
    },
    timer: {
        color: "#D2BAF5",
        marginHorizontal: 5,
        fontWeight: "500",
        fontSize: 14
    },
    priceHeader: {
        fontWeight: '600',
        fontSize: 14,
        color: "#B296DC"
    },
    priceNdate: {
        fontWeight: '700',
        fontSize: 14,
        color: "#fff"
    },
    FeeTable: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    },
    tableHeader: {
        fontWeight: "500",
        fontSize: 12,
        color: "#B5C0C8",
        textAlign: "center"
    },
    tableCell: {
        fontWeight: "600",
        fontSize: 14,
        textAlign: "right",
    },
    gameDetail_section: {
        borderWidth: 1,
        borderColor: "#EEEAF3",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 2,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    predicttxt: {
        fontWeight: '600',
        fontSize: 14,
        color: '#727682'
    },
    predictionbtn_section: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 10
    },
    underbtn: {
        backgroundColor: '#452C55',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: "40%",
        marginHorizontal: 10
    },
    overbtn: {
        backgroundColor: '#6231AD',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        width: "40%",
        marginHorizontal: 10
    },
    btntxt: {
        fontWeight: "600",
        fontSize: 16,
        color: "#fff",
        textAlign: "center"
    },
    cardFooter: {
        backgroundColor: "#F6F3FA",
        marginVertical: 10,
        paddingVertical: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    preductionundertxt: {
        color: '#B5C0C8',
        fontWeight: '500',
        fontSize: 12
    },
    ModalView: {
        position: 'absolute',
        bottom: 0,
        height: '60%',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 40
    },
    modalHead: {
        fontWeight: '600',
        fontSize: 16,
        color: '#333333'
    },
    amountbox: {
        color: '#03A67F',
        fontWeight: '600',
        fontSize: 14
    },
    totaltxt: {
        fontWeight: '500',
        fontSize: 12,
        color: '#727682',
        marginHorizontal: 10
    },
    coinamounttxt: {
        fontWeight: '600',
        fontSize: 14,
        color: '#333333',
        marginHorizontal: 10
    },
    submitbtn: {
        width: '100%',
        backgroundColor: '#6231AD',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 40
    },
    tickettxt: {
        fontWeight: '600',
        fontSize: 12,
        color: '#727682',
        marginTop: 20
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})