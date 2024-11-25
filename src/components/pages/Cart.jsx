import React ,{useRef}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { CALCULATE_TOTAL, REMOVE_FROM_CART, SAVED_PRICE, UPDATE_CART_QUANTITY } from '../redux/action/Actiontypes';
import Header from '../Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import prodstyles from '../../constants/stylesheet/Productdetails';
import cartfy from '../../constants/stylesheet/cartfy';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  console.log("Cart Items:", cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);
  
  const quickPicks = [
    {
      id: 1,
      title: 'Necklace',
      price: 299,
      imageUrl:  require('../../assests/images/neckless.png'),
    },
    {
      id: 2,
      title: 'Necklace1',
      price: 399,
      imageUrl: require('../../assests/images/necklace1.png'),
    },
    {
      id: 3,
      title: 'Earrings',
      price: 499,
      imageUrl: require('../../assests/images/neck6.png'),
    },
    {
      id: 4,
      title: 'Earrings1',
      price: 499,
      imageUrl: require('../../assests/images/neck3.png'),
    },
    {
      id: 5,
      title: 'Earrings2',
      price: 499,
      imageUrl: require('../../assests/images/neck4.png'),
    },
  ];

  const handleRemove = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
    dispatch({ type: CALCULATE_TOTAL });
    dispatch({ type: SAVED_PRICE })

  };

  const confirmRemove = (id, selectedSize) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', onPress: () => handleRemove({ id, selectedSize }) },
    ]);
  };

  const handleUpdateQuantity = (id, selectedSize, quantity) => {
    if (quantity > 0) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        payload: { id, selectedSize, quantity },
      });
      dispatch({ type: CALCULATE_TOTAL });
      dispatch({ type: SAVED_PRICE })
    }
  };

  return (
    <>
      <Header 
       backgroundColor="white" 
       statusBarVisible={true}
       onIconPress={() => console.log('Icon pressed')} 
       selectedIcon="search" 
       backgroundColorstatus="#fff" 
       showBackIcon={true} 
       showSearchIcon={false}
       headertxt='Cart'
      />
    <View style={cartfy.container}>
    <ScrollView ref={scrollViewRef} contentContainerStyle={prodstyles.container}>
    <View style={cartfy.couponSection}>
  <TouchableOpacity style={cartfy.couponButton}>
      <AntDesign name="info" size={20} color="white"/>
  </TouchableOpacity>
  <Text style={cartfy.couponText}>Flat discount on UPI payment (once per month)</Text>
</View>

      <FlatList
        data={cart}
        keyExtractor={(item, index) =>
          `${item.id}-${item.selectedSize || 'default'}-${index}`
        }
        renderItem={({ item }) => {
          console.log('Image URL:', item.imageUrl); 
          return (
            <View style={cartfy.cartItem}>
              <View style={cartfy.imageSection}>

              <Image
  source={
    item.imageUrl
      ? (typeof item.imageUrl === 'string' ? { uri: item.imageUrl } : item.imageUrl)
      : require('../../assests/images/minion.png') // Fallback image
  }
  style={cartfy.cartImage}
/>


              </View>

              <View style={cartfy.detailsSection}>
                <Text style={cartfy.title}>{item.title}</Text>
                <Text style={cartfy.detailText}>Size: {item.selectedSize}</Text>
                {/* <Text style={cartfy.discountText}>Discounted Price: {item.originalPrice}</Text> */}
                <View style={cartfy.button}>
                {/* <Text style={cartfy.detailText}>Qty: {item.quantity}</Text> */}
                <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}>
                {/* <Text style={cartfy.icon}>+</Text> */}
                <AntDesign name="plus" size={16} color='black'/>
              </TouchableOpacity>
              <Text style={cartfy.carttext}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() =>
                  item.quantity > 1
                    ? handleUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)
                    : Alert.alert(
                        'Remove Item',
                        'Quantity is 1. Do you want to remove this item?',
                        [
                          { text: 'Cancel', style: 'cancel' },
                          { text: 'Remove', onPress: () => confirmRemove(item.id, item.selectedSize) },
                        ]
                      )
                }
              >
                       <AntDesign name="minus" size={16} color='black'/>
              </TouchableOpacity>
          
       </View>
       <Text style={[prodstyles.productPrice,cartfy.price]}>
            ₹{item.discountedPrice} 
        <Text style={[prodstyles.originalPrice,cartfy.price,{color:'gray'}]}>₹{item.originalPrice}</Text>
      </Text>

                {/* <Text style={cartfy.price}>₹{item.discountedPrice}</Text> */}
                <Text style={cartfy.deliveryText}>Delivery by: Sat, 23 Nov</Text>
                <Text style={cartfy.deliveryText}>7 days Return</Text>
              </View>

              <TouchableOpacity
                style={cartfy.removeButton}
                onPress={() => confirmRemove(item.id, item.selectedSize)}
              >
                {/* <Text style={cartfy.removeButtonText}>Remove</Text> */}
                <Entypo name="circle-with-cross" size={20} color='black'/>
              </TouchableOpacity>
            </View>
          );
        }}
      />


      <TouchableOpacity style={[cartfy.couponSection,{backgroundColor:'#fff', borderWidth:1,borderColor:'#ccc'}]}>
          <Text style={cartfy.carttext}>Apply Coupon</Text>
          <Ionicons name='chevron-forward' size={16} color='black' />

      </TouchableOpacity>


      <View style={cartfy.quickPicksSection}>
       <Text style={cartfy.sectionTitle}>Quick picks for your cart</Text>
    <FlatList
    horizontal
    data={quickPicks}
    renderItem={({ item }) => (
      <View style={cartfy.quickPickItem}>
        <Image source={item.imageUrl} style={cartfy.quickPickImage} />
        <Text style={cartfy.quickPickTitle}>{item.title}</Text>
        <Text style={cartfy.quickPickPrice}>₹{item.price}</Text>
        <TouchableOpacity style={cartfy.addToBagButton}>
          <Text style={cartfy.addToBagButtonText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    )}
    keyExtractor={(item, index) => `quick-pick-${index}`}
  />
</View>
</ScrollView>

      <View style={cartfy.footer}>
        <Text style={cartfy.totalText}> BagTotal: ₹{totalPrice}</Text>
        <TouchableOpacity style={cartfy.checkoutButton}>
        <Text style={cartfy.priceRow}>Convenience Charges: ₹49</Text>
          <Text style={cartfy.checkoutButtonText}>Proceed to Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default Cart;