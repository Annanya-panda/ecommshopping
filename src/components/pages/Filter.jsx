import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated, Easing } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import Slider from '@react-native-community/slider'; // For price range slider
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';

const categories = [
  {
    id: '1',
    name: 'Sort By',
    subProducts: [
      { name: 'Boy' },
      { name: 'Girl' },
      { name: 'Male' },
      { name: 'Female' },
      { name: 'All' }
    ]
  },
  {
    id: '2',
    name: 'Size',
    subProducts: [
      { name: '31', count: '3' },
      { name: '32', count: '4' },
      { name: '33', count: '5' },
      { name: '34', count: '7' },
      { name: '35', count: '8' },
      { name: '36', count: '9' },
      { name: '37', count: '10' },
      { name: '38', count: '12' },
    ]
  },
  {
    id: '3',
    name: 'Price Range',
  },
  {
    id: '4',
    name: 'Discount',
    subProducts: [
      { name: '10% and above' },
      { name: '20% and above' },
      { name: '30% and above' },
      { name: '40% and above' },
      { name: '50% and above' },
      { name: '60% and above' },
      { name: '70% and above' },
      { name: '80% and above' },
    ]
  }
];

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [scaleAnim] = useState(new Animated.Value(1)); // For animation
  const [indicatorPosition] = useState(new Animated.Value(0));
  const [selectedSizes, setSelectedSizes] = useState([]); // Track selected sizes
  const [selectedGenders, setSelectedGenders] = useState([]); // Track selected genders
  const [priceRange, setPriceRange] = useState([500, 10000]); // Track price range
  const [discount, setDiscount] = useState([]); // Track price range
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const navigation = useNavigation();
  

  // Handle category press with animation
  const handlePress = (category) => {
    setSelectedCategory(category);
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

  

  const handleSizeSelection = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };
  const handleDiscount = (size) => {
    setDiscount((prev) =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleGenderSelection = (gender) => {
    setSelectedGenders((prev) =>
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };


  return (
    <>
      <Header
       backgroundColor='#white'
       onIconPress={() => console.log('Icon pressed')} 
       selectedIcon="search" 
       backgroundColorstatus="#fff" 
       showBackIcon={true} 
       headertxt='Filter'
       iconVisible={true}
       />
      <View style={styles.container}>
        {/* Left Pane */}
        <ScrollView style={styles.leftPane} ref={scrollView}>
         
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryItem,
                selectedCategory.id === category.id && styles.selectedCategory
              ]}
              onPress={() => handlePress(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory.id === category.id && styles.selectedCategoryText
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Right Pane */}
        <ScrollView style={styles.rightPane}>
          {selectedCategory.id === '1' && (
            <View>
              {categories[0].subProducts.map((gender, index) => (
                <CheckBox
                  key={index}
                  title={gender.name}
                  checked={selectedGenders.includes(gender.name)}
                  onPress={() => handleGenderSelection(gender.name)}
                  checkedColor='#f25ea8'  
                   iconType="material-community"
                    checkedIcon="checkbox-marked"
                      uncheckedIcon="checkbox-blank-outline"
                  // checkedIcon='dot-circle-o' 
                />
              ))}
            </View>
          )}

          {selectedCategory.id === '2' && (
            <View>
              {categories[1].subProducts.map((size, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.sizeItem}
                  onPress={() => handleSizeSelection(size.name)}
                >
                  <Icon
                    name={selectedSizes.includes(size.name) ? "check" : "check"}
                    size={16}
                    color={selectedSizes.includes(size.name) ? "#f25ea8" : "#666"} // Change to pink when selected
                  />
                  <Text style={styles.sizeText}>{size.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {selectedCategory.id === '3' && (
            <View style={styles.priceSliderContainer}>
              <Text style={styles.priceText}> ₹{priceRange[0]} - ₹{priceRange[1]}</Text>
              
              {/* Slider for minimum price */}
              <Slider
                minimumValue={500}
                maximumValue={priceRange[1]} // Max should be the upper limit of priceRange
                step={500}
                value={priceRange[0]}
                onValueChange={(value) => setPriceRange([value, priceRange[1]])} // Update only the minimum value
                minimumTrackTintColor="#f25ea8"
                maximumTrackTintColor="#f25ea8"
                thumbTintColor="#f25ea8"  // Change thumb color to pink
              />
              <Text style={styles.tag}>Min Price: ₹{priceRange[0]}</Text>

              {/* Slider for maximum price */}
              <Slider
                minimumValue={priceRange[0]} // Min should be the lower limit of priceRange
                maximumValue={10000}
                step={500}
                value={priceRange[1]}
                onValueChange={(value) => setPriceRange([priceRange[0], value])} // Update only the maximum value
                minimumTrackTintColor="#f25ea8"
                maximumTrackTintColor="#f25ea8"
                thumbTintColor="#f25ea8"  // Change thumb color to pink
              />
              <Text style={styles.tag}>Max Price: ₹{priceRange[1]}</Text>
            </View>
          )}


{selectedCategory.id === '4' && (
  <View>
    



{categories[3].subProducts && categories[3].subProducts.map((discount, index) => (
  <TouchableOpacity
    key={index}
    style={styles.sizeItem}
    onPress={() => {
      handleDiscount(discount.name);
      setSelectedDiscount(discount.name);
    }}
  >
    <Text
      style={[
        styles.sizeText,
        selectedDiscount === discount.name && styles.selectedText,
      ]}
    >
      {discount.name}
    </Text>
  </TouchableOpacity>
))}
  </View>
)}

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
    position: 'relative',
  },
  categoryItem: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  selectedCategory: {
    backgroundColor: 'white',
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500'
  },
  selectedCategoryText: {
    color: '#f25ea8',
    fontWeight: '600'
  },
  rightPane: {
    width: '73%',
    padding: 10,
    backgroundColor: 'white',
  },
  sizeItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  sizeText: {
    marginLeft: 20,
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedText:{
    marginLeft: 20,
    color: '#f25ea8',
    fontSize: 14,
    fontWeight: '600',
  },
  priceSliderContainer: {
    marginVertical: 20,
  },
  priceText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  tag: {
    color: '#666',
    fontSize: 12,
    // textAlign: 'right',
  }
});

export default Filter;
