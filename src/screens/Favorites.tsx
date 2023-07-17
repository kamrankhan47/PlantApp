import React from 'react';
import {View, FlatList, StyleSheet, Text, ScrollView} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import SvgHeart from '../elements/icons/Heart';
import { removeFavorite } from '../Redux/Slice/plantSlice';
import Lottie from 'lottie-react-native';

const FavoritesScreen = ({navigation}:any) => {
  const favorite = useSelector((state: any) => state.plant.favorite || []);
  const dispatch = useDispatch();

  const removeItemFromFavorites = (item: any) => {
    dispatch(removeFavorite({item}))
  }


  const renderListItem = ({item,}: any) => {
    const isFavorite = favorite.find((q: any) => q.id === item.id);
    const heartFill = isFavorite ? 'red' : 'white';
 
    return (
      <View style={styles.itemContainer}>
        <View style={styles.item}>

          <TouchableOpacity style={{alignItems:'flex-end',right:10,top:10}} onPress={()=>removeItemFromFavorites(item)}>
            <SvgHeart
              fill={heartFill}
            />
          </TouchableOpacity>
          <Image
            style={{
              width: 40,
              height: 100,
              position: 'absolute',
              top: 20,
              left: 60,
            }}
            source={require('../assets/images/cactus1.png')}
          />

          <Text style={{fontSize: 15, marginTop: 110, marginHorizontal: 10}}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  if(favorite.length===0){
    return(
      <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
        <Lottie source={require('../assets/images/animation_lk5giw5w.json')} autoPlay loop />

      </View>
    )
  }

  return (
  
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 60,
          flexDirection: 'row',
          gap: 40,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={()=>navigation.navigate("Plants")}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../assets/images/goBack.png')}
        />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
          MyWishList
        </Text>
      </View>
      <View style={{marginTop: 40, flex: 1}}>
        <FlatList
          data={favorite}
          renderItem={renderListItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          disableIntervalMomentum={true}
          showsVerticalScrollIndicator={false}
       
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
  },
  item: {
    width: 160,
    height: 160,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
  },
});

export default FavoritesScreen;
