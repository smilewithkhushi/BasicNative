import React from 'react'
import { Text,StyleSheet,View } from "react-native"
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import HomePage from './HomePage'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();


const CallPage=(props,{navigation})=>{
    console.log(props.route.params)
    const name=props.route.params.data
    const id=props.route.params.id
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={618790259}
                appSign={'5fae635116eb3b1ae60fa10ca0ef773cf286b0f62ffc79dab42546f18e17b6b2'}
                userID={name} // userID can be something like a phone number or the user id on your own user system. 
                userName={name}
                callID={id} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { 
                        props.navigation.navigate('HomePage',{}) 
                    },
                    onHangUp: () => { 
                        props.navigation.navigate('HomePage',{}) 
                    },
                }}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})

export default CallPage