import React, { useRef,useState,useEffect} from 'react';
import { View, ScrollView, Animated, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';


const coupons = [
  {
    couimage: require('../../assests/images/coupon4.png'),
  },
  {
    couimage: require('../../assests/images/coupon1.png'),
  },
];

const screenWidth = Dimensions.get('window').width;

const { width} = Dimensions.get('window');

const Coupon = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);



  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === coupons.length - 1 ? 0 : prev + 1));
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: activeSlide * width, animated: true });
    }
  }, [activeSlide]);

  const renderDots = () => (
    <View style={styles.dotContainer}>
      {coupons.map((_, i) => (
        <View key={i} style={[styles.dot, activeSlide === i ? styles.activeDot : null]} />
      ))}
    </View>
  );

  return (
    <Animated.View
      style={[
        styles.headerContainer,
        // {
        //   transform: [{ translateY }], // Coupon will move out of view as you scroll
        // },
      ]}
    >
     <ScrollView
            horizontal
            pagingEnabled
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}
          >
            {coupons.map((coupon, index) => (
          <TouchableOpacity key={index}>
            <Image
              source={coupon.couimage}
              style={[styles.filterOptionsContainer, { width: screenWidth }]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {renderDots()}
    </Animated.View>
  );
};


   const styles = {
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 80, // Adjust based on how big the Coupon section should be
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterOptionsContainer: {
    height: 60, // Adjust based on FilterOptions component size
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
};

      


export default Coupon;