// App.js

import React from 'react'

import Search from './Components/Search'
import TabNav from './Components/TabNav'
import Favorites from './Components/Favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
export default class App extends React.Component {

  
  
  render() {
    let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}></PersistGate>
        <NavigationContainer>
          <Tab.Navigator options={{
            animationEnabled: true
          }} >
            <Tab.Screen name="Recherche" component={TabNav} />
            <Tab.Screen  name="Favorites" component={Favorites} />
          </Tab.Navigator>
        </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}

