import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import Lottie from 'lottie-react-native';

const MyPlantsScreen = () => {
  const [image, setImage] = React.useState<string | null>(null);
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [plants, setPlants] = React.useState<any>([]);

  const addPlant = () => {
    let newPlant={
      id:Math.random(),
      name:name,
      description:description,
      image:image
    }
    setPlants([...plants,newPlant])
    setDescription('')
    setName('')
    setImage(null)

  }
  const ImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      console.log(response);
      if (!response.didCancel && response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri!);
      }
    });
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={()=>{
        addPlant()
      }}>
        <View style={styles.buttonContent}>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.plantContainer}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Lottie source={require('../assets/images/animation_lk62j6w3.json')} autoPlay loop />
            </View>
          )}
        </View>
        <TouchableOpacity onPress={ImagePicker}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        <TextInput placeholder="Name" style={styles.input} onChangeText={setName} value={name}/>
        <TextInput placeholder="Description" style={styles.input} onChangeText={setDescription} value={description}/>
      </View>

      {/* FlatList */}
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <View style={styles.flatListItem}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100 }}
            
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 50, // Increase paddingBottom to leave space for FlatList
  },
  addButton: {
    alignItems: 'center',
  },
  buttonContent: {
    borderWidth: 1,
    width: 200,
    height: 50,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantContainer: {
    marginTop: 20, 
    alignItems: 'center',
    gap: 20,
  },
  imageContainer: {
    height: 220,
    width: 220,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 320,
    height: 200,
  },
  placeholderImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
  },
  flatListItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MyPlantsScreen;
