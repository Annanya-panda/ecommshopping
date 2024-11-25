import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Animated, Easing } from 'react-native';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';

const categories = [
    { 
      id: '1', 
      name: 'Fashion', 
      image: require('../../assests/images/fashion.png'),
      subProducts: [
        { 
          name: 'Men', 
          image: require('../../assests/images/men.png'),
          subCategories: [
            { name: 'T-Shirts', image: require('../../assests/images/shirt.png'),
              // products: [
              //   { name: 'US.POLO ASSN', image: require('../../assests/images/shirt1.png') },
              //   { name: 'CRIMSON CLUB', image: require('../../assests/images/shirt2.png') },
              //   { name: 'UNITED COLORS', image: require('../../assests/images/shirt3.png') },
              //   { name: 'WRONG', image: require('../../assests/images/tsgirt.png') },
              // ]
             },
            { name: 'Jacket', image: require('../../assests/images/jacket.png') },
            { name: 'Trouser', image: require('../../assests/images/trouser.png') },
            { name: 'Shirt', image: require('../../assests/images/menproduct.png') },
          ]
        },

        { 
          name: 'Women', 
          image: require('../../assests/images/women.png'),
          subCategories: [
            { name: 'Dresses', image: require('../../assests/images/dresses.png') },
            { name: 'Shirt', image: require('../../assests/images/womenshirt.png')},
            { name: 'Lehenga', image: require('../../assests/images/lehenga.png') },
            { name: 'Saree', image: require('../../assests/images/saree.png'),
              // products: [
              //   { name: 'Manyavar', image: require('../../assests/images/Kurti1.png') },
              //   { name: 'Kalki', image: require('../../assests/images/Kurti2.png') },
              //   { name: 'Manyavar', image: require('../../assests/images/Kurti3.png') },
              // ]
             },
            { name: 'T-shirt', image: require('../../assests/images/tshirtwomen.png') },
          ]
        },

        { 
          name: 'Kids', 
          image: require('../../assests/images/kids.png'),
          subCategories: [
            { name: 'T-Shirts', image: require('../../assests/images/kids.png'),
              // products: [
              //   { name: 'US.POLO ASSN', image: require('../../assests/images/kids3.png') },
            
              // ]

             },
            
            { name: 'Traditional', image: require('../../assests/images/kurtiskids.png') },
            { name: 'Frocks', image: require('../../assests/images/kidfrocks.png'),
            // products: [
            //   { name: 'H&M', image: require('../../assests/images/kids1.png') },
            //   { name: 'zara', image: require('../../assests/images/kids2.png') },
            // ]
          },
            { name: 'Casuals', image: require('../../assests/images/kidshomewear.png') },
            { name: 'Cardigan', image: require('../../assests/images/cardy.png') },
            { name: 'Shirt & Polo', image: require('../../assests/images/shirt&polo.png') },
          ]
        }, 

        { 
          name: 'Footwear', 
          image: require('../../assests/images/footwear.png'),
          subCategories: [
            { name: 'Casual Shoes', image: require('../../assests/images/casualshoes.png')
             },
            { name: 'Formal Shoes', image: require('../../assests/images/formalshoes.png') },
            { name: 'Platform Heels', image: require('../../assests/images/platforheels.png') },
            { name: 'Flats', image: require('../../assests/images/flats.png') },
          ]
        }
      ] 
    },

  { 
    id: '2', 
    name: 'Beauty and Personal Care', 
    image: require('../../assests/images/skincare.png'),
    subProducts: [
      { name: 'Smartphones', image: 'https://via.placeholder.com/100' }, 
      { name: 'Tablets', image: 'https://via.placeholder.com/100' }, 
      { name: 'Accessories', image: 'https://via.placeholder.com/100' }
    ] 
  },

  { 
    id: '3', 
    name: 'Electronics', 
    image: require('../../assests/images/tech.png'),
    subProducts: [
      { name: 'Refrigerator', image: 'https://via.placeholder.com/100' }, 
      { name: 'Washing Machine', image: 'https://via.placeholder.com/100' }, 
      { name: 'Microwave', image: 'https://via.placeholder.com/100' }
    ] 
  },

  { 
    id: '4', 
    name: 'Mobiles', 
    image: require('../../assests/images/mobile.png'),
    subProducts: [
      { name: 'Smartphones', image: 'https://via.placeholder.com/100' }, 
      { name: 'Tablets', image: 'https://via.placeholder.com/100' }, 
      { name: 'Accessories', image: 'https://via.placeholder.com/100' }
    ] 
  },

{ 
    id: '5', 
    name: 'Home', 
    image: require('../../assests/images/homeappliances.png'),
    subProducts: [
      { name: 'Smartphones', image: 'https://via.placeholder.com/100' }, 
      { name: 'Tablets', image: 'https://via.placeholder.com/100' }, 
      { name: 'Accessories', image: 'https://via.placeholder.com/100' }
    ] 
  },

  { 
    id: '6', 
    name: 'Food and healthcare', 
    image: require('../../assests/images/foodcat.png'),
    subProducts: [
      { name: 'Smartphones', image: 'https://via.placeholder.com/100' }, 
      { name: 'Tablets', image: 'https://via.placeholder.com/100' }, 
      { name: 'Accessories', image: 'https://via.placeholder.com/100' }
    ] 
  },

  { 
    id: '7', 
    name: 'Home', 
    image: require('../../assests/images/Cooker.png'),
    subProducts: [
      { name: 'Smartphones', image: 'https://via.placeholder.com/100' }, 
      { name: 'Tablets', image: 'https://via.placeholder.com/100' }, 
      { name: 'Accessories', image: 'https://via.placeholder.com/100' }
    ] 
  },
  
  { 
    id: '8', 
    name: 'sports', 
    image: require('../../assests/images/sports.png'),
    subProducts: [
      { name: 'Smartphones', image: 'https://via.placeholder.com/100' }, 
      { name: 'Tablets', image: 'https://via.placeholder.com/100' }, 
      { name: 'Accessories', image: 'https://via.placeholder.com/100' }
    ] 
  },

];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [scaleAnim] = useState(new Animated.Value(1)); // For animation
  const [indicatorPosition] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  // Handle category press with animation
  const handlePress = (category) => {
    setSelectedCategory(category);

    // Trigger scale animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const scrollView = useRef(null);

  useEffect(() => {
    // Animate indicator to the current selected category's position
    const index = categories.findIndex(cat => cat.id === selectedCategory.id);
    
    // Adjust the indicator's top position by centering it within the category item
    const topPosition = (index * 100) + (100 / 2) - (80 / 2); // Adjusted calculation
    
    Animated.timing(indicatorPosition, {
      toValue: topPosition, // Centered indicator
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();
    if (scrollView.current) {
      const offset = index * 100 - 200; // Adjust this value to make the options above the selected tab visible
      scrollView.current.scrollTo({ x: 0, y: offset, animated: true });
    }
  }, [selectedCategory]);
  
  const handlenavigation = (subCategory) => {
    navigation.navigate('ProductPage', { subCategory });
  };
  
  return (
    <>
  <Header 
  backgroundColor="#fff" 
  statusBarVisible={true} 
  onIconPress={() => console.log('Icon pressed')} 
  selectedIcon="search" 
  backgroundColorstatus="#fff" 
  showBackIcon={true} // Pass true to show the back icon
  headertxt='Category'
  iconVisible={true}
  
 
/>
    <View style={styles.container}>
      {/* Left Side - Main Categories */}
      <ScrollView style={styles.leftPane}  ref={scrollView}>
      <Animated.View 
          style={[
            styles.blueIndicator, 
            { top: indicatorPosition }
          ]}
        />
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              selectedCategory.id === category.id && styles.selectedCategory
            ]}
            onPress={() => handlePress(category)}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={[
              styles.categoryText, 
              selectedCategory.id === category.id && styles.selectedCategoryText
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Right Side - Sub Products Divided into Sections */}
      <ScrollView style={styles.rightPane} indicatorStyle="white">
        {selectedCategory.subProducts.map((subProduct, index) => (
          <View key={index}>
            <Text style={styles.sectionTitle}>{subProduct.name}</Text>
            <View style={styles.productRow}>
              {subProduct.subCategories?.map((subCategory, subIndex) => (
                <Animated.View key={subIndex} style={{ transform: [{ scale: scaleAnim }] }}>
                  {/* Navigate to ProductPage when a subcategory is clicked */}
                  <TouchableOpacity onPress={() => handlenavigation(subCategory)}>
                    <View style={styles.subProductItem}>
                      <Image source={subCategory.image} style={styles.subProductImage} />
                      <Text style={styles.subProductText}>{subCategory.name}</Text>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </>
  );  
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
 leftPane: {
    width: 100,
    backgroundColor: '#f8f8f8',
    // paddingVertical: 10,
    position: 'relative',
  },
  // categoryItem: {
  //   alignItems: 'center',
  //   padding: 15,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ddd',
  // },

  categoryItem: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  selectedCategory: {
        backgroundColor: 'white',
      },
  blueIndicator: {
    position: 'absolute',
    width: 5,
    height: 80, // Adjust this height to match the categoryItem height or your preference
    backgroundColor: '#f25ea8',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    left: 0,
     zIndex: 1,
  },
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: 'black',
    fontWeight:'500'
  },
  selectedCategoryText: {
    color: '#f25ea8',
    fontWeight:'600'
  },
  rightPane: {
    width: '73%',
    padding: 10,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
  productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  subProductItem: {
    alignItems: 'center',
    width: '100',
    marginBottom: 20,
    marginHorizontal:3
  },
  subProductImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 10,
  },
  subProductText: {
    fontSize: 13,
    color: 'black',
  },
});

export default CategoryPage;
