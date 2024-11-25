import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Modal, StyleSheet, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../redux/Reducerprod';
import { addToCart } from '../redux/ReducerAddtocart';

    
const { width,height } = Dimensions.get('window'); 

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.products.wishlist);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const isWishlisted = wishlist.find(item => item.title === product.title);

  const handleWishlistToggle = () => {
    dispatch(toggleWishlist(product));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const onScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    setCurrentIndex(slideIndex);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
  
    const validImageUrl = Array.isArray(product.imageUrl) && product.imageUrl.length > 0 ? product.imageUrl[0] : null;
  
    console.log("Adding to Cart:", { ...product, imageUrl: validImageUrl, size: selectedSize });
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.discountedPrice,
        size: selectedSize,
        imageUrl: validImageUrl, // Use the first image
      })
    );
    toggleModal(); // Close the modal after adding to the cart.
  };
  

  return (
    <TouchableOpacity style={styles.cardContainer}
      onPress={() => navigation.navigate('pd', { product })}
    >
      {/* Scrollable images with dots */}
      <View style={styles.imageContainer}>
        
      <FlatList
          data={product.imageUrl}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.id}-${item.size || 'default'}-${index}`}

          onScroll={onScroll}
          renderItem={({ item }) => (
            <Image source={typeof item === 'string' ? { uri: item } : item} style={styles.productImage} />
          )}
          
        />


        <View style={styles.dotContainer}>
          {product.imageUrl.map((_, index) => (
            <View key={index} style={[styles.dot, currentIndex === index ? styles.activeDot : {}]} />
          ))}
        </View>

        {/* Heart and View Similar Icons */}
        <View style={styles.iconContainer}>
          <View style={styles.roundedBackground}>
            <TouchableOpacity onPress={toggleModal}>
              <FontAwesome name="clone" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.iconify}>
        <Text style={styles.productTitle}>{product.title}</Text>
        {/* <Text>{JSON.stringify(cart, null, 2)}</Text> */}
        <TouchableOpacity onPress={handleWishlistToggle} style={styles.hearticon}>
          <AntDesign name={isWishlisted ? 'heart' : 'hearto'} size={20} color={isWishlisted ? '#f25ea8' : 'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.productPrice}>
        ₹{product.discountedPrice} <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
      </Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{product.rating} ★</Text>
        <Text style={styles.deliverytxt}>Free Delivery</Text>
      </View>

      <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>


      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Size</Text>
          <View style={styles.sizeOptions}>
            {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.selectedSize,
                ]}
                onPress={() => handleSizeSelect(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.selectedSizeText,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={handleAddToCart} style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Modal for showing similar products */}
      {/* <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Similar Products</Text>
          <FlatList
            data={product.similarProducts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.similarProductCard}>
                <Image source={item.imageUrl[0]} style={styles.similarProductImage} />
                <Text style={styles.similarProductTitle}>{item.title}</Text>
                <Text style={styles.similarProductPrice}>₹{item.discountedPrice}</Text>
              </TouchableOpacity>
            )}
            horizontal
          />
        </View>
      </Modal> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 165,
  },
  imageContainer: {
    position: 'relative',
  },
  
  deliverytxt:{
 color:'black'
  },
  productImage: {
    width: width * 0.42, // Responsive width for images
    height: height * 0.3,
    borderRadius: 4,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },

  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 4,
    width: 30,

  },

  roundedBackground: {
    backgroundColor: 'white',
    borderRadius: 20, 
    padding: 4,
    alignItems: 'center', 
    justifyContent: 'center', 
  },

  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: 'orange',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  similarProductCard: {
    marginRight: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 120,
  },
  similarProductImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  similarProductTitle: {
    fontSize: 14,
    marginVertical: 5,
    color: 'black',
  },
  similarProductPrice: {
    fontSize: 14,
    color: 'green',
  },
  iconify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton:{
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    marginTop:10,
    borderRadius:10,
    // width:90,
    // marginLeft:10
  },
  addButtonText:{
    color:'white',
  },
  sizeChartLink: {
    marginVertical: 10,
    alignItems: 'center',
  },
  sizeChartText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#f25ea8', // Match the pink color in the screenshot
    textDecorationLine: 'underline',
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    // borderRadius:20
  },
  sizeButton: {
    // paddingHorizontal: 10,
    paddingVertical:10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    width:43,
    justifyContent:'center',
    alignItems:'center'
  },
  selectedSize: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
  },
  selectedSizeText: {
    color: '#fff',
  },
  doneButton: {
    backgroundColor: '#f25ea8',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;