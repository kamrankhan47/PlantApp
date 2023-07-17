import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AddButton, Group157} from '../elements/icons';
import axios from 'axios';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SvgHeart from '../elements/icons/Heart';
import {useDispatch, useSelector} from 'react-redux';
import {makeHeartRed} from '../Redux/Slice/plantSlice';

const PlantsScreen = ({navigation}: any) => {
  const [plant, setPlant] = useState([]);
  const dispatch = useDispatch<any>();
  const {favorite} = useSelector((state: any) => state.plant || []);

  const addtoFavorites = (item: any) => {
    dispatch(makeHeartRed({item}));
  };

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/categories').then(res => {
      setPlant(res.data);
    });
  }, []);

  const renderItem = ({item}: any) => {
    const isFavorite = favorite.find((q: any) => q.id === item.id);

    const heartFill = isFavorite ? 'red' : 'white';

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details',{item})}>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 300,
            width: 250,
            marginHorizontal: 20,
            gap: 20,
            backgroundColor: '#6db665',
          }}>
          <View style={{marginLeft: 220, top: 10}}>
            <TouchableOpacity onPress={() => addtoFavorites(item)}>
              <SvgHeart fill={heartFill} />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image
              style={{
                width: 80,
                height: 200,
              }}
              source={require('../assets/images/cactus1.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              position: 'absolute',
              marginTop: 300,
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 30,
            }}>
            <Text>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#e7e8e3'}}>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Group157 />
          <Text style={{fontSize: 20, fontWeight: '600', color: '#0c9265'}}>
            Plantopia
          </Text>
        </View>
      </View>

      <View style={{width: 160, marginLeft: 20, marginTop: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#0c9265'}}>
          Let's find Your Plants
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#d9d9d9',
          height: 50,
          width: 320,
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 10,
        }}>
        <TextInput placeholder="Search plants..." />
        <View style={{position: 'absolute', marginLeft: 270, marginTop: 5}}>
          <Image
            style={{
              width: 50,
              height: 70,
            }}
            source={require('../assets/images/searchIcon.png')}
          />
        </View>
      </View>

      <View style={{height: 400, marginTop: 10}}>
        <FlatList
          data={plant}
          renderItem={renderItem}
          contentContainerStyle={{rowGap: 10}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default PlantsScreen;
