import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './src/components/Bottomtabnav.jsx'; // Importing your bottom tab navigator
import ProductPage from './src/components/pages/Finalproduct.jsx';
import Filter from './src/components/pages/Filter.jsx';
import ProductDetails from './src/components/pages/ProductDetails.jsx';
import { Provider } from 'react-redux'; 
import Wishlist from './src/components/pages/Wishlist.jsx';
import Cart from './src/components/pages/Cart.jsx';
import createAppStore from './src/components/redux/store/Store.jsx'; // Import the async store creator

const Stack = createStackNavigator();

function App() {
  const [store, setStore] = useState(null); // State to hold the store once it's created

  useEffect(() => {
    const initializeStore = async () => {
      const appStore = await createAppStore(); // Wait for the store to be created
      setStore(appStore); // Set the created store in the state
    };

    initializeStore();
  }, []);

  // Only render the Provider if the store is ready
  if (!store) {
    return null; // Or show a loading spinner while the store is being created
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTab">
          <Stack.Screen
            name="MainTab"
            component={MainTabNavigator} // Correctly passing BottomTabNavigator as a component
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="ProductPage"
            component={ProductPage} // Product Page component
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="filter"
            component={Filter} // Filter component
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="pd"
            component={ProductDetails} // Product Details component
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="wishlist"
            component={Wishlist} // Wishlist component
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="cart"
            component={Cart} // Cart component
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
