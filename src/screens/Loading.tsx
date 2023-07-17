import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Lottie source={require('../assets/images/animation_lk5fbp6e.json')} autoPlay loop />
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})