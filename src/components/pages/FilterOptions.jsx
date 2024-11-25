import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const FilterOptions = () => {
  const [selectedOption, setSelectedOption] = useState('sort');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigation = useNavigation();
 

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (option === 'sort') {
      setIsDropdownVisible(!isDropdownVisible);
    } else {
      setIsDropdownVisible(false); 
    }
    if(option==='filter'){
      navigation.navigate('filter')
    }
  };
  
  const handleSortOption = (sortOption) => {
  
    console.log('Sorting by:', sortOption);
    setIsDropdownVisible(false);
  };

  const handlenavigation=()=>{
    navigation.navigate('filter')
  }

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        
        <TouchableOpacity
          style={[
            styles.filterButton, styles.flex,
            selectedOption === 'sort' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('sort')}
        >
          <Text style={styles.text}>Sort By</Text>
          <FontAwesome5 style={styles.icony} name='percent' size={12} color='green'/>
          {/* <AntDesign style={styles.icony} name='down' size={12} color='#666' /> */}
        </TouchableOpacity>

        {/* Filter Button */}
        <TouchableOpacity
          style={[
            styles.filterButton, styles.flex,
            selectedOption === 'filter' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('filter')}
        >
          <Text style={styles.text}>Filter</Text>
          <AntDesign name='filter' style={styles.icony} size={12} color='red' />
        </TouchableOpacity>

        {/* Other Filter Options */}
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedOption === 'popular' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('popular')}
        >
          <Text style={styles.text}>Popular Brands</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedOption === '50percent' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('50percent')}
        >
          <Text style={styles.text}>50% or more</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedOption === '500below' && styles.selectedButton,
          ]}
          onPress={() => handleSelect('500below')}
        >
          <Text style={styles.text}>₹500 and Below</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Sort Dropdown */}
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => handleSortOption('priceLowToHigh')}>
            <Text style={styles.dropdownItem}>Price: Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSortOption('priceHighToLow')}>
            <Text style={styles.dropdownItem}>Price: High to Low</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSortOption('newest')}>
            <Text style={styles.dropdownItem}>Newest Arrivals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSortOption('bestSelling')}>
            <Text style={styles.dropdownItem}>Best Selling</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  
  filterButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderColor:'#a9a9a7'
  },
  text: {
    color: '#666',
  },
  selectedButton: {
    borderColor: '#f25ea8',
    borderWidth: 1.5,
  },
  flex: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  icony: {
    paddingLeft: 6,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    position: 'absolute',
    top: 60, // Adjust based on placement
    left: 10,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default FilterOptions;
