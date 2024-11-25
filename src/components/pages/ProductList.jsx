import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductCard from './Product';


const productList = [
  {
    imageUrl: [
        require('../../assests/images/shirt4.png'),
        require('../../assests/images/shirt6.png'),
        require('../../assests/images/shirt5.png'),
      ],
    title: 'shirt1',
    discountedPrice: 259,
    originalPrice: 599,
    rating: 4.5,
  },
  
  {
    imageUrl: [require ('../../assests/images/shirt1.png')],
    title: 'shirt2',
    discountedPrice: 649,
    originalPrice: 999,
    rating: 4.2,
  },

  {
    imageUrl:[ require ('../../assests/images/shirt2.png')],
    title: 'shirt3',
    discountedPrice: 449,
    originalPrice: 1099,
    rating: 3,
  },

  {
    imageUrl: [require ('../../assests/images/shirt3.png')],
    title: 'shirt4',
    discountedPrice: 249,
    originalPrice: 600,
    rating: 3.4,
  },

  {
    imageUrl: [require ('../../assests/images/shirt.png')],
    title: 'shirt5',
    discountedPrice: 400,
    originalPrice: 708,
    rating: 3.5,
  },

  {
    imageUrl: [require ('../../assests/images/shirt0.png')],
    title: 'shirt6',
    discountedPrice: 1050,
    originalPrice: 3999,
    rating: 3.7,
  },
  
];
const ProductList = () => {
  return (
    <ScrollView contentContainerStyle={styles.productListContainer}>
      {productList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ScrollView>
  );
}; 

const styles = StyleSheet.create({
  productListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
 
  
});


export default ProductList;
