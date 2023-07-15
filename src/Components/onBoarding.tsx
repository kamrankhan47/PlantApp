import {
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity
  } from 'react-native';
  import { useState, useRef } from 'react';
  import React from 'react';
  import slides from './slides';
  import OnboardingItem from './onBoardingItem';

  import Paginator from './Paginator';
  
  const { width, height } = Dimensions.get('screen');
  const COLORS = { primary: 'FFFFFF', white: '#fff' };
  
  const Onboarding = ({navigation}:any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef<FlatList<any>>(null); 
    const viewableItemsChanged = useRef(({ viewableItems }:any) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  
    const handleSkip = () => {
      if (slideRef.current) {
   
        slideRef.current.scrollToIndex({ index: 2 });
      }
    };
    const handleNext = () => {
      if (slideRef.current) {
        if (currentIndex < slides.length - 1) {
          const nextIndex = currentIndex + 1;
          slideRef.current.scrollToIndex({ index: nextIndex });
          setCurrentIndex(nextIndex);
        }
      }
    };
    const handleBack = () => {
      if (slideRef.current) {
        if (currentIndex > 0) {
          const previousIndex = currentIndex - 1;
          slideRef.current.scrollToIndex({ index: previousIndex });
          setCurrentIndex(previousIndex);
        }
      }
    };
   
  
   
  
    
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{ flex: 3 }}>
          <FlatList
            data={slides}
            contentContainerStyle={{ height: height * 0.8 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item }) => <OnboardingItem item={item} />}
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={slideRef}
          />
        </View>
        <View style={{ alignItems: 'center', flex: 0.9 }}>
          <Paginator data={slides} scrollX={scrollX} />
        </View>
        <View style={{ flexDirection: 'row', gap: 20, flex: 0.3, justifyContent: 'center', marginBottom: 10 }}>
          {currentIndex === 0 && (
            <>
              <TouchableOpacity onPress={handleSkip}>
                <Text style={[styles.button,{backgroundColor:"#e5e5e5"}]}>
                  Skip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={handleNext}>
                <Text style={[styles.button,{backgroundColor:"#5f8464",color:"white"}]}>
                  Next
                </Text>
              </TouchableOpacity>
            </>
          )}
          {currentIndex === 1 && (
            <>
              <TouchableOpacity onPress={handleBack}>
                <Text style={[styles.button,{backgroundColor:"#e5e5e5"}]}>
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext}>
                <Text style={[styles.button,{backgroundColor:"#5f8464",color:"white"}]}>
                  Next
                </Text>
              </TouchableOpacity>
            </>
          )}
          {currentIndex === 2 && (
            <>
              <TouchableOpacity onPress={()=>navigation.navigate("Tabs")}>
                <Text style={[styles.button,{backgroundColor:"#e5e5e5"}]}>
                  Start
                </Text>
              </TouchableOpacity>
              
            </>
          )}
        </View>
      </View>
    );
  };
  
  export default Onboarding;
  
  const styles = StyleSheet.create({
    button: {
      width: 150,
      height: 50,
      borderRadius: 14,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontFamily: 'Poppins-Medium',
    },
  });