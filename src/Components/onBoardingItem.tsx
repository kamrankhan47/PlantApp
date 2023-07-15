import { StyleSheet, Text, View,Image,useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const OnboardingItem = ({item}:any) => {
    const {width}=useWindowDimensions()
  return (
    <View style={[styles.container,{width}]}>
        <Image source={item.image} style={[styles.image,{width:"60%",resizeMode:"contain"}]}/>
        <View style={{flex:0.4}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.subtitle}</Text>
        </View>
        
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        flex:0.5,
        justifyContent:"center"
    },
    title:{
        fontWeight:"800",
        fontSize:28,
        marginBottom:10,
        color:"black",
        textAlign:"center",
        paddingHorizontal:64,
        fontFamily:"Poppins-Medium"
    
    },
    description:{
        fontWeight:"300",
        color:"#62656b",
        textAlign:"center",
        paddingHorizontal:85,
        fontFamily:"Poppins-Medium"

        
    }
})