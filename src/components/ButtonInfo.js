

import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
function ButtonInfo({ title, subTitle }) {
    const url = "https://sv.dntu.edu.vn/images/dntu-logo.png"
    return (
        <View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { console.log("Pressed!") }}
            >
                <View style={styles.row}>
                    <View style={styles}>
                        <Text style={styles.textTitle }> {title}</Text>
                        <Text style={styles.textSubTitle}> {subTitle}</Text>
                    </View>

                    <FastImage
                        style={styles.image}
                        source={{
                            uri: url,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    btn: {
        width: "100%",
        height: 100,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 8,
        marginBottom:10,
        borderRadius: 10,
    },

    row: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    textTitle: {
        fontSize: 20,
        textAlign:"left"
    },
    textSubTitle: {
        fontSize: 14
    },
    image: {
        width: 60,
        height: 60
    }
})
export default ButtonInfo;