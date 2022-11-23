import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import WebView from "react-native-webview";

function NotificationScreen (){
    const url = 'https://crawl.lunnh.repl.co/';
    return (
        <View style = {styles.container}>
           <WebView source={{uri:url }}/>
        </View>
    );

}   

const styles = StyleSheet.create({
    container:{
        flex:1,
       

    }
})
export default NotificationScreen;