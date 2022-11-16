import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import { start } from "../start";
function HomeScreen (){
    start()
    return (
        <View style = {styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }
})
export default HomeScreen