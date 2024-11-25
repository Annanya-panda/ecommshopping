import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ProductCard from './Product';
import Header from '../Header';

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.products.wishlist);

  return (
    <>
      <Header
        backgroundColor='white'
        statusBarVisible={true}
        backgroundColorstatus='white'
        onIconPress={() => console.log('Icon pressed')}
        selectedIcon="search"
        showBackIcon={true}
        iconVisible={false}
        headertxt='Wishlist'
      />

      <ScrollView contentContainerStyle={styles.container}>
        {wishlist.map((product, index) => (
          <View key={product.title} style={styles.productContainer}>
            <ProductCard product={product} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10, // Optional padding for the ScrollView
  },
  productContainer: {
    width: '48%', // Adjust width to fit two products in a row
    marginBottom: 10, // Space between rows
  },
});

export default WishlistScreen;