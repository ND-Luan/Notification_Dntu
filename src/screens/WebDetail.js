import React from "react";

import {View,Text,StyleSheet} from 'react-native';
import WebView from "react-native-webview";
function WebDetail({routes}){
    const href = routes.parms.href
    return(
        <View style={styles.container}>
            <WebView source={{uri:href}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex:1
    }
})
