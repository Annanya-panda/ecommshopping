import React, { useState } from 'react';
import { View } from 'react-native';
import Filter from './Filter';
import ProductList from './ProductList';


const ProductFilterScreen = () => {
  const [priceRange, setPriceRange] = useState([500, 10000]); // State lifted up

  return (
    <View style={{ flex: 1 }}>

      <Filter priceRange={priceRange} setPriceRange={setPriceRange} />
      <ProductList priceRange={priceRange} />
    </View>
  );
};





export default ProductFilterScreen;
