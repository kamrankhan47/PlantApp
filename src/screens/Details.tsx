import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Details = ({ navigation, route }: any) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#e8edeb", width: 400, height: 300 }}>
        <View style={{ position: "absolute", alignSelf: "center", top: 50 }}>
          <Image
            style={{
              width: 150,
              height: 400,
            }}
            source={require('../assets/images/cactus1.png')}
          />
        </View>
        <View style={{ width: 150, height: 30, backgroundColor: 'white', borderRadius: 50, alignItems: "center", justifyContent: "space-evenly", position: "absolute", top: 100, left: 12,flexDirection:"row" }}>
          <Image
            style={{
              width: 15,
              height: 15,
            }}
            source={require('../assets/images/Sun.png')}
          
          />

          <Text>
            Medium light
          </Text>
        </View>
        <View style={{width: 100, height: 30, backgroundColor: 'white', borderRadius: 50, alignItems: "center", justifyContent: "space-evenly", position: "absolute", top: 120, left: 270,flexDirection:"row"}} >
          <Image
          style={{
            width: 15,
            height: 15,
          }}
            source={require('../assets/images/Ruler.png')}
          />

          <Text>
            10-15 cm
          </Text>
        </View>
        <View style={{borderRadius:50,width:120,height:30,backgroundColor:"white",alignItems:"center",justifyContent:"space-evenly",position:"absolute",top:200,left:20,flexDirection:"row"}}>
        <Image
            style={{
              width: 15,
              height: 15,
            }}
            source={require('../assets/images/Smiley.png')}
          
          />
          <Text>
            Easy to care
          </Text>
        </View>
        <View style={{borderRadius:50,width:100,height:30,backgroundColor:"white",position:"absolute",alignItems:"center",justifyContent:"space-evenly",left:280,top:250,flexDirection:"row"}}>
          <Image
           style={{
            width: 15,
            height: 20,
           }}
            source={require('../assets/images/Vector.png')}
          />
          <Text>
            10-24 C

          </Text>
        </View>
      </View>
      <View style={{height:300,width:"100%",backgroundColor:"white",marginTop:200,borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <View style={{left:20,top:20}}>
          <Text style={{fontSize:30,fontWeight:"bold",color:"black"}}>
            {item.name}
          </Text>
          <Text>
            ulduzlar
          </Text>
        </View>
        <View>
          <Text style={{fontSize:20,fontWeight:"bold",color:"black",top:30,left:20}}>
            Description
          </Text>
          <Text style={{fontSize:20}}>
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
