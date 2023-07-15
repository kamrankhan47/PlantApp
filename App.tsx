import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from 'react-native-screens'
import Screen1 from './src/screens/Plants'
import TabNavigator from './src/navigation/TabNavigator'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './src/Components/onBoarding'
import Details from './src/screens/Details'
import { Provider } from 'react-redux'
import store from './src/Redux/Store/store'


const Stack=createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>    
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Tabs" component={TabNavigator}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  )
}

export default App



