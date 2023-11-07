import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import ListJson from './ListJson.json'

export default function Profile() {

    function RenderList(item){
        return(
            <View style={[style.listcard]}>
                <Image source={require('../Assets/listicon.png')} style={style.listicon}/>

                <View style={{marginLeft:20}}>
                    <Text style={style.rowHead}>
                        {item.item.Head}
                    </Text>

                    <Text style={style.listDesc}>
                        {item.item.Desc}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.headerrow}>
                <View>
                    <Image source={require('../Assets/warrior.png')} style={style.logo} />
                </View>

                <Text style={style.profiletxt}>
                    Profile
                </Text>

                <View>
                    <Image source={require('../Assets/message.png')} style={style.logo} />
                </View>
            </View>

            <View style={{backgroundColor: "#fff" }}>
                <View style={{ justifyContent: "center" }}>
                    <Image source={require('../Assets/userprofile.png')} style={style.profilelogo} />
                    <TouchableOpacity style={style.editbtn}>
                        <Image source={require('../Assets/edit.png')} style={style.editicon} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={style.userName}>
                        Jina Simons
                    </Text>
                </View>

                <View>
                    <Text style={style.description}>
                        I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!
                    </Text>
                </View>

                <View style={{ justifyContent: "center" }}>
                    <TouchableOpacity style={style.logoutbtn}>
                        <Image source={require('../Assets/logout.png')} style={style.logoutimg} />
                        <Text style={style.logouttxt}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={[style.row, style.boxpadding]}>
                    <View>
                        <Text style={style.headbox}>
                            Under or Over
                        </Text>

                        <View style={style.row}>
                            <Image source={require('../Assets/growth.png')} style={style.growthicon} />

                            <Text style={style.percentagetxt}>
                                81 %
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={style.headbox}>
                            Top 5
                        </Text>

                        <View style={style.row}>
                            <Image source={require('../Assets/low.png')} style={style.growthicon} />

                            <Text style={style.percentagetxt}>
                                -51 %
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[style.row,style.tabRow]}>
                <TouchableOpacity style={[style.tabbtn]}>
                    <Text style={style.tabbtntxt}>
                        Games played
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.tabbtn,style.ActiveTab]}>
                    <Text style={style.tabbtntxt}>
                        Badges
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={ListJson}
                renderItem={(item)=>RenderList(item)}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get("window").height,
        flex: 1,
        backgroundColor: "#EFEAF6"
    },
    logo: {
        width: 30,
        height: 30
    },
    headerrow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#fff"
    },
    profiletxt: {
        fontWeight: '500',
        fontSize: 14,
        color: '#727682'
    },
    profilelogo: {
        width: '100%',
        height: 100,
        resizeMode: "contain",
        marginTop: 20
    },
    editicon: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    editbtn: {
        backgroundColor: "#fff",
        position: "absolute",
        top: 90,
        right: 160,
        padding: 6,
        borderRadius: 20
    },
    userName: {
        textAlign: "center",
        fontWeight: '500',
        fontSize: 14,
        color: '#333333'
    },
    description: {
        padding: 20,
        fontWeight: "500",
        fontSize: 14,
        color: '#727682'
    },
    logoutimg: {
        width: 20,
        height: 20
    },
    logoutbtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    logouttxt: {
        fontWeight: "500",
        fontSize: 14,
        marginHorizontal: 7
    },
    growthicon: {
        width: 50,
        height: 50,
    },
    percentagetxt: {
        fontWeight: "700",
        fontSize: 24,
        marginLeft: 10
    },
    boxpadding: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#EEEAF3',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10
    },
    headbox: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 20
    },
    tabbtn: {
        backgroundColor: "#fff",
        width:'50%',
        paddingVertical:20
    },
    tabRow:{
        marginTop:5
    },
    tabbtntxt:{
        textAlign:"center"
    },
    ActiveTab:{
        borderBottomWidth:2,
        borderBottomColor:'#6231AD'
    },
    listicon:{
        width:60,
        height:60,
    },
    listcard:{
        backgroundColor:"#fff",
        marginVertical:10,
        padding:20,
        flexDirection:"row",
        alignItems:"center"
    },
    rowHead:{
        fontWeight:'600',
        fontSize:14,
        color:'#333333'
    },
    listDesc:{
        fontWeight:'500',
        fontSize:14,
        color:'#727682',
        width:"90%"
    }
})