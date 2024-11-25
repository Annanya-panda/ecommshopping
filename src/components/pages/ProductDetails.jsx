import React, { useState,useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Modal, TextInput, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../Header';
import { Rating } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import CirclesGroup from '../Circular';
import ImageReview from '../ImageReview';
import prodstyles from '../../constants/stylesheet/Productdetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { addToCart, calculateTotal } from '../redux/action/Actionaddtocart';



const ProductDetails = ({ route }) => {
  const dispatch = useDispatch();
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  // const [modalVisible, setModalVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const scrollViewRef = useRef(null);
  const similarProductsRef = useRef(null);
  const [rating, setRating] = useState(3.4);
  const [totalReviews] = useState(2);
  const [totalRatings] = useState(10);
  const [barPercentages, setBarPercentages] = useState([4.1, 3.8, 3.8, 3.7]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pincode, setPincode] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [optionModal, setOptionModal] = useState(null);
  const [helpfulStatus, setHelpfulStatus] = useState({});
  const [showMore, setShowMore] = useState(false); // State to track if more reviews should be shown
  const [visibleComments, setVisibleComments] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  

  const screenWidth = Dimensions.get('window').width;

  const reviews = [
    { category: 'Perfect', rating: 4.1, description: "Liked it, must give it a try", user: 'Mandeep', id: 1, date:'21/12/2018'},
    { category: 'Nice', rating: 3, description: "Liked it, must give it a try", user: 'Anp', id: 2, date:'1/1/2015' },
    { category: 'OSM', rating: 3.6, description: "Liked it, must give it a try", user: 'Anp', id: 3, date:'10/6/2021' },
    { category: 'Liked it', rating: 4.5, description: "Liked it, must give it a try", user: 'pjjj', id: 4, date:'8/9/2011' },
  ];


  const handleViewMoreComments = () => {
    setVisibleComments(prev => prev + 2); 
  };

const toggleHelpful = (id) => {
  setHelpfulStatus(prev => ({
    ...prev,
    [id]: prev[id] === 'helpful' ? null : 'helpful',
  }));
};


  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const images = Array.isArray(product.imageUrl) ? product.imageUrl : [product.imageUrl];
  

  
  const toggleUnhelpful = (id) => {
    setHelpfulStatus(prev => ({
      ...prev,
      [id]: prev[id] === 'unhelpful' ? null : 'unhelpful',
    }));
  };

  const scrollToSimilarProducts = () => {
    similarProductsRef.current?.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      },
      () => {
        console.log('Failed to measure layout');
      }
    );
  };

  const savedAddresses = [
    { id: 1, name: 'Annanya Panda', pincode: '761008', address: 'NIST girls hostel, pallur... Berhampur' },
    { id: 2, name: 'Annanya Panda', pincode: '380054', address: 'titanium square Muktidha... Ahmedabad' },
  ];

  const handleAddressSelect = (id) => {
    setSelectedAddress(id);
    setModalVisible(true); 
  };


  const toggleOptionModal = (index) => {
    setOptionModal(optionModal === index ? null : index);
  };


  const handleAddToCart = () => {
    dispatch(calculateTotal());
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    dispatch(addToCart({ ...product, selectedSize }));
    
  };


  const sizes = ['S', 'M', 'L', 'XL', '2XL','3XL'];

  const similarProducts = [
    { id: '1', imageUrl: require('../../assests/images/smp.png'), title: 'H&M', price: 499 },
    { id: '2', imageUrl: require('../../assests/images/smp1.png'), title: 'Mango', price: 699 },
    { id: '3', imageUrl: require('../../assests/images/smp2.png'), title: 'Flying Machine', price: 899 },
    { id: '4', imageUrl: require('../../assests/images/men.png'), title: 'Crocodile', price: 1099 },
    { id: '5', imageUrl: require('../../assests/images/men.png'), title: 'Similar Product 3', price: 1299 },
    { id: '6', imageUrl: require('../../assests/images/men.png'), title: 'Similar Product 3', price: 2899 },
  ];




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
       headertxt={product.title}
      />

      <ScrollView ref={scrollViewRef} contentContainerStyle={prodstyles.container}>
      <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={prodstyles.carouselContainer}
        >
   {/* {images.map((image, index) => {
      console.log('Image URI:', image); // Check the value of image
   return (
    <Image 
      key={index}
      source={image} // No need to handle it as a URL, just use `image`
      style={prodstyles.cartImage} 
    />
  );
})} */}

    {images.map((image, index) => (
        <Image key={index} 
        source={image} 
        style={prodstyles.cartImage}  />
      ))}
       
        </ScrollView>
        
        <View style={prodstyles.scrollcontainer}>
        
        <TouchableOpacity style={prodstyles.icon} onPress={scrollToSimilarProducts}  >
        <Image source={require('../../assests/images/Carousel.png')} style={prodstyles.carasoule}/>
        </TouchableOpacity>
        
        <Text style={prodstyles.productTitle}>{product.title}</Text>
        <Text style={prodstyles.productPrice}>
            ₹{product.discountedPrice} 
        <Text style={prodstyles.originalPrice}>₹{product.originalPrice}</Text>
      </Text>
      


        <Text style={prodstyles.sectionTitle}>Select Size</Text>
         <View style={prodstyles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                prodstyles.sizeButton,
                selectedSize === size && prodstyles.sizeButtonSelected,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  prodstyles.sizeText,
                  selectedSize === size && prodstyles.sizeTextSelected,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        

        {/* Expected Delivery Section */}
        <View style={prodstyles.delivery}>
          <TouchableOpacity  style={prodstyles.deliverySection}>
             <Text style={prodstyles.deliveryText}>Delivery by Tue, 8 Oct</Text>
             <Text style={prodstyles.deliveryAddress}>To 751001, BHUBANESWAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={prodstyles.changebutton} onPress={() => setModalVisible(true)}>
             <Text style={prodstyles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

    <View style={prodstyles.border}>
       {/* Delivery Options */}
       {['Free delivery available', 'COD available', '7-day return and size exchange'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={prodstyles.optionItem}
          onPress={() => toggleOptionModal(index)}
        >
          <Ionicons name={['car-outline', 'cash-outline', 'swap-horizontal-outline'][index]} size={20} color="black" />
          <Text style={prodstyles.optionText}>{option}</Text>
          <Ionicons
            name={optionModal === index ? 'chevron-down-outline' : 'chevron-forward'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      ))}
      </View>
       <Modal
        visible={optionModal !== null}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity style={prodstyles.modalOverlay} onPress={() => setOptionModal(null)}>
          <View style={prodstyles.halfModalContainer}>
            <TouchableOpacity onPress={() => setOptionModal(null)} style={prodstyles.closeButton}>
              <Ionicons name="close-outline" size={30} color="black" />
            </TouchableOpacity>
            <Text style={prodstyles.modalText}>More details about {['Free delivery', 'COD', '7-day return'][optionModal]}</Text>
          </View>
        </TouchableOpacity>
      </Modal>

  


        {/* Product Information Section */}
        <Text style={prodstyles.sectionTitle}>Product information</Text>
        {['Product details', 'Know your product', 'Vendor details', 'Return and exchange policy'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={prodstyles.expandableItem}
            onPress={() => setExpandedSection(expandedSection === index ? null : index)}
          >
          <View style={prodstyles.iconigy}>
            <Text style={prodstyles.expandableTitle}>{item}</Text>
              <Ionicons
                name={expandedSection === index ? 'chevron-up-outline' : 'chevron-down-outline'}
                size={20}
                color="gray"
              />
          </View>

            {expandedSection === index && (
              <Text style={prodstyles.expandableContent}>
                This is the detailed information for {item}.
              </Text>
            )}
          </TouchableOpacity>
        ))}

      

      
        <View style={prodstyles.ratingSummaryContainer}>
       <View style={prodstyles.ratingsummary}>
          <Text style={prodstyles.sectionTitle}>Ratings & Reviews</Text>

        <View style={prodstyles.barfy}>
            <View style={prodstyles.overallRatingContainer}>
                <Text style={prodstyles.overallRatingText}>4.1</Text>
                  <Rating imageSize={20} readonly startingValue={4.1} style={prodstyles.rating}/>
                 <Text style={prodstyles.ratingCount}>1,342 ratings and 35 reviews</Text>
            </View>


       <View style={prodstyles.baring}>  
       {[5, 4, 3, 2, 1].map((star, index) => (
     <View key={index} style={prodstyles.starRow}>
   
       <Text style={prodstyles.text}>{`${star} ★`}</Text>
      <View style={prodstyles.bar}>
        <View style={[prodstyles.filledBar, { width: `${(star * 20)}%` }]} />
      </View>
          <Text style={prodstyles.text}>{(star * 100).toString()}</Text>
      </View>

))}
     </View>    
   </View>
 </View>




<CirclesGroup/>
<Text  style={[prodstyles.textreview,prodstyles.reviewcontformargin]}>Photos</Text>
<ImageReview/>


        {/* Category Ratings */}
       <View style={prodstyles.reviewcontformargin}>
         <Text  style={prodstyles.textreview}>Most helpful Reviews</Text>
    
       
      {reviews.slice(0, visibleComments).map((item) => (
        <View key={item.id} style={prodstyles.borderRating}>
          <View style={prodstyles.categoryRatingContainer}>
            <View style={prodstyles.categoryRating}>
              <View style={prodstyles.ratingSection}>
                <Rating imageSize={15} readonly startingValue={item.rating} style={{ backgroundColor: 'transparent' }} />
                <Text style={[prodstyles.textfy,{color:'green'}]}>{item.rating}</Text>
                <Entypo name='dot-single' color='black' size={20}/>
              <Text style={prodstyles.textfy}>{item.category}</Text>
              </View>
            </View>
            <Text style={prodstyles.textfy}>{item.description}</Text>
            <Text style={[prodstyles.user, prodstyles.textfy]}>{item.user}</Text>
        

            {/* Helpful/Unhelpful Buttons */}
            <View style={prodstyles.buttonContainer}>
              <TouchableOpacity
                style={[
                  prodstyles.roundedButton,
                  helpfulStatus[item.id] === 'helpful' ? prodstyles.helpfulButtonSelected : {},
                ]}
                onPress={() => toggleHelpful(item.id)}
              >
                <Feather
                  name="thumbs-up"
                  size={18}
                  color={helpfulStatus[item.id] === 'helpful' ? "#f25ea8" : "grey"}
                />
                <Text style={prodstyles.buttonText}>Helpful</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={[
                  prodstyles.roundedButton,
                  helpfulStatus[item.id] === 'unhelpful' ? prodstyles.unhelpfulButtonSelected : {},
                ]}
                onPress={() => toggleUnhelpful(item.id)}
              >
                <Feather
                  name="thumbs-down"
                  size={18}
                  color={helpfulStatus[item.id] === 'unhelpful' ? "#f25ea8" : "grey"}
                />
                <Text style={prodstyles.buttonText}>Not Helpful</Text>
              </TouchableOpacity> */}
            </View> 
          </View>
        
          <View style={prodstyles.verifieduser}>
            <View style={{flexDirection:'row'}}>
              <AntDesign name="checkcircle" size={17} color='black' style={{marginRight:5}}/>
              <Text>Verified user</Text>
              </View>
            <Text>{item.date}</Text>
          </View>
        </View>
      ))}
  

  {visibleComments < reviews.length && (
        <TouchableOpacity onPress={handleViewMoreComments} style={prodstyles.viewMoreButton}>
          <Text style={prodstyles.viewMoreText}>View More Comments</Text>
          <AntDesign name='right' size={18}/>
        </TouchableOpacity>
      )}
         </View>
    </View>
 

<View style={prodstyles.similarproduct}>
        <Text ref={similarProductsRef} style={prodstyles.sectionTitle}>
          View Similar Products
        </Text>
        <FlatList
          horizontal
          data={similarProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={prodstyles.similarProductContainer}>
              <Image source={item.imageUrl} style={prodstyles.similarProductImage} />
              <Text style={prodstyles.similarProductTitle}>{item.title}</Text>
              <Text style={prodstyles.similarProductPrice}>₹{item.price}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      </View>
      </ScrollView>

    {/* Sticky Bottom Navigation Bar */}
    <View style={prodstyles.bottomNavBar}>
      <TouchableOpacity style={prodstyles.addToCartButton}  onPress={handleAddToCart}>
        <Text style={prodstyles.Roundedbuttontext}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={prodstyles.checkoutButton}>
        <Text style={prodstyles.Roundedbuttontext}>Checkout</Text>
      </TouchableOpacity>
    </View>
    
    </>
  );
};

export default ProductDetails;