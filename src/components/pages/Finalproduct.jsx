import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet,View } from 'react-native';
import FilterOptions from './FilterOptions';
import ProductList from './ProductList';
import Header from '../Header';
import Coupon from './Coupon';


const ProductPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        backgroundColor='white' 
        statusBarVisible={true}
        backgroundColorstatus='white'
        onIconPress={() => console.log('Icon pressed')} 
        selectedIcon="search" 
        showBackIcon={true}
        iconVisible={true} 
        headertxt='Product'
      />

      <ScrollView stickyHeaderIndices={[1]}>
        <View>
      <Coupon />
        </View>
          <FilterOptions />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};
3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProductPage;
