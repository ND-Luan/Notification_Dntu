
import ButtonInfo from "@components/ButtonInfo";
import start from "@crawl/start";

import React from "react";
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    start()
    return (
        <View style={styles.container}>
            <View style={styles.gap}>
                <ButtonInfo title = "Thong bao" subTitle="Sub thong bap" />
                <ButtonInfo title = "Thong bao" subTitle="Sub thong bap" />
                <ButtonInfo title = "Thong bao" subTitle="Sub thong bap" />
                <ButtonInfo title = "Thong bao" subTitle="Sub thong bap" />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gap:{
        padding:10,
        margin:5
    },

})
export default HomeScreen