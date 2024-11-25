import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import HomeScreen from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import CategoryPage from './pages/Category';

 
const Tab = createBottomTabNavigator();
const { width,height} = Dimensions.get('window');

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;
          let iconStyle = focused ? styles.iconFocused : styles.icon;

          if (route.name === 'home') {
            IconComponent = AntDesign;
            iconName = 'home';
          } else if (route.name === 'categories') {
            IconComponent = MaterialCommunityIcons;
            iconName = 'view-grid-outline';
          } else if (route.name === 'explore') {
            IconComponent = Feather;
            iconName = 'sun';
          } else if (route.name === 'Profile') {
            IconComponent = AntDesign;
            iconName = 'user';
          }

          const scaleValue = focused ? 1.2 : 1;  // Scale up when focused

          return (
            <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
              <IconComponent name={iconName} size={size} style={iconStyle} />
            </Animated.View>
          );
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="categories" component={CategoryPage} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
    footerContainer: {
      flex: 1,
      justifyContent: 'flex-end', // Align to bottom
      paddingBottom: height * 0.001, // Responsive padding at the bottom
     
    },
    // tabBar: {
    //   height: height * 0.08, // Responsive height
    //   borderTopWidth: 0,
    //    borderTopWidth:1,
    //   borderColor:'#ddd',
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 10,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.5,
    //   elevation: 5,
    //   backgroundColor: '#fff', // Background color for the tab bar
    // },
    tabBar: {
      height: height * 0.08, 
      borderTopWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
      backgroundColor: '#fff',
    },
    icon: {
      width: width * 0.07, 
      height: width * 0.07, 
      color: "#666",
    },
    iconFocused: {
      width: width * 0.07,
      height: width * 0.07,
      color: "#ec006c", // Change color when focused
    },
    customButton: {
      top: -30, // Adjust this to position the button
      justifyContent: 'center',
      alignItems: 'center',
    },
    customButtonInner: {
      width: width * 0.15, // Responsive width
      height: width * 0.15, // Responsive height
      borderRadius: (width * 0.15) / 2, // Circular button
      backgroundColor: '#5F33E1',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    // icon: {
    //   width: width * 0.07, 
    //   height: width * 0.07, 
    //   color:"#666"
    // },
  });

export default MainTabNavigator;