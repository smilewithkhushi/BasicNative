import React,{useState,useEffect} from 'react'
import { Button, StyleSheet, Text, TextInput,Touchable,TouchableOpacity,View } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const HomePage=({navigation})=>{
    
    const[name,setName]=useState('')
    const[callid,setCallid]=useState(0)
    return(
        <View style={styles.container}>
            <Text style={{fontSize:40,marginBottom:50,color:'white',fontWeight:'bold'}}>Video Calling App</Text>
            <TextInput 
            style={styles.input} 
            placeholder='Enter your name '
            onChangeText={e=>setName(e)}
            >
            </TextInput>
            <TextInput 
            style={styles.input} 
            placeholder='Enter call id '
            onChangeText={x=>setCallid(x)}
            >
            </TextInput>
            <TouchableOpacity style={styles.joinbtn} onPress={()=>{navigation.navigate('CallPage',{data:name,id:callid})}}>
                <Text style={{textAlign:'center',marginTop:14,color:'black'}}>Join Call</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ddd5f3',
    },
    input:{
        height:40,
        margin:8,
        width:'90%',
        color:'black',
        borderColor:'black',
        borderWidth:1.6,
        borderRadius:10,
    },
    joinbtn:{
        height:50,
        width:'25%',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#cec2eb',
        margin:10,
        elevation:10,
        shadowColor:'black',
    },
})


export default HomePage