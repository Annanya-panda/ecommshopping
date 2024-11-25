import React,{useState,useEffect, useRef }from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,Dimensions, FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';

const { width,height} = Dimensions.get('window');
const categories = [
  { id: '1', title: 'Beauty', icon: require('../../assests/images/skincare.png') }, // Replace with actual image
  { id: '3', title: 'women', icon: require('../../assests/images/womencloth.png') },
  { id: '4', title: 'men', icon: require('../../assests/images/men.png') },
  { id: '5', title: 'home', icon: require('../../assests/images/home.png') },
  { id: '6', title: 'baby', icon: require('../../assests/images/babyproducts.png') },
  { id: '2', title: 'food', icon: require('../../assests/images/food.png') },
];

const offers = [
  { id: '1', title: 'Kurtis', discount: '50% OFF', image: require('../../assests/images/toppicks.png') },
  { id: '2', title: 'T-Shirt', discount: '30% OFF', image: require('../../assests/images/westerntoppicks.png') },
  { id: '3', title: 'Pajamas', discount: '50% OFF', image: require('../../assests/images/menethn.png') },
  { id: '4', title: 'Jacket', discount: '30% OFF', image: require('../../assests/images/menproduct.png') },
  { id: '5', title: 'jutis', discount: '30% OFF', image: require('../../assests/images/jutis.png') },
  { id: '6', title: 'sandle', discount: '30% OFF', image: require('../../assests/images/heels.png') },
];

const stories = [
  { id: '1', title: 'Ganesh Chaturthi picks', image: require('../../assests/images/stories1.png') },
{ id: '2', title: 'Your Navratri closet', image: require('../../assests/images/stories5.png') },
{ id: '3', title: 'Rakhi: All you need', image: require('../../assests/images/stories6.png') },
];


const banners = [
  { id: '1', image: require('../../assests/images/banner2.png')},
  { id: '2', image: require('../../assests/images/banner4.png')},
  { id: '3', image: require('../../assests/images/banner9.png') },
  { id: '4', image: require('../../assests/images/banner7.png')},
  { id: '5', image: require('../../assests/images/banner8.png') },
  { id: '6', image: require('../../assests/images/banner1.png') },
];

const brands = [
  { id: '1', image: require('../../assests/images/brand1.png') },
{ id: '2', image: require('../../assests/images/brand2.png') },
{ id: '3', image: require('../../assests/images/brand3.png') },
{ id: '4', image: require('../../assests/images/brand4.png') },
];

export default function HomeScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);
  const [headerIconColor, setHeaderIconColor] = useState({ search: 'black', heart: 'black', bag: 'black' });
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 2000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: activeSlide * width, animated: true });
    }
  }, [activeSlide]);

  const onBannerPress = (id) => {
    console.log('Banner clicked', id);
    // Add your navigation logic here
  };

  const renderDots = () => (
    <View style={styles.dotContainer}>
      {banners.map((_, i) => (
        <View key={i} style={[styles.dot, activeSlide === i ? styles.activeDot : null]} />
      ))}
    </View>
  );

  const handleIconPress = (icon) => {
    setHeaderIconColor({
      search: icon === 'search' ?'#f9eee8': 'black',
      heart: icon === 'heart' ?'#f9eee8':'black',
      bag: icon === 'bag' ?'#f9eee8':'black',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f25ea8' barStyle="dark-content" />
      <Header
      backgroundColor='#f25ea8'
      statusBarVisible={true}
      onIconPress={(icon) => console.log(`Icon pressed: ${icon}`)}
      selectedIcon="search" 
      iconVisibility={true}
      // backgroundColorstatus='#f25ea8'
      headertxt='Selen'
      backgroundfieldcolor='transparent'
        
      />

      {/* Scrollable content */}
      <ScrollView>
        {/* Categories */}
        <View style={styles.categorySection}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.categoryItem}>
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text style={styles.categoryText}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        {/* Banner Section with Auto-Carousel */}
        <View style={styles.bannerSection}>
          <ScrollView
            horizontal
            pagingEnabled
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}
          >
            {banners.map((banner, index) => (
              <TouchableOpacity key={index} onPress={() => onBannerPress(banner.id)}>
                <Image source={banner.image} style={styles.bannerImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          {renderDots()}
        </View>

        {/* Offers Section */}
        <View style={styles.offersSection}>
          <Text style={styles.sectionTitle}>Top Picks For You</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={offers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.offerItem}>
                <Image source={item.image} style={styles.offerImage} />
                <Text style={styles.offerTitle}>{item.title}</Text>
                <Text style={styles.offerDiscount}>{item.discount}</Text>
              </View>
            )}
          />
        </View>

        {/* Stories Section */}
        <View style={styles.storiesSection}>
          <Text style={styles.sectionTitle}>Indian Festive Edits</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={stories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.storyItem}>
                <Image source={item.image} style={styles.storyImage} />
                <Text style={styles.storyTitle}>{item.title}</Text>
              </View>
            )}
          />
        </View>


        <View style={styles.luxeSection}>
          <Text style={styles.sectionTitle}>LUXE</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={brands}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.luxeitem}>
                <Image source={item.image} style={styles.luxeImage} />
                <Text style={styles.storyTitle}>{item.title}</Text>
              </View>
            )}
          />
        </View>



     
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#f25ea8'
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  categorySection: {
    paddingVertical: 10,
    paddingLeft: 16,
},
  sectionTitle:{
  marginLeft:19,
  fontWeight:'bold',
  marginBottom:7,
  color:'#666'

  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius:30,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color:'#666'
  },
  banner: {
    marginVertical: 16,
    alignItems: 'center',
    marginRight:10
  },
  offersSection: {
    paddingVertical: 15,
    paddingHorizontal:4,
    backgroundColor:'#f0f0ee',
     marginTop: 20,
  },
  offerItem: {
    marginRight: 13,
    alignItems: 'center',
  },
  offerImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  offerTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color:'#666'
  },
  offerDiscount: {
    fontSize: 12,
    color: 'green',
  },
  storiesSection: {
    paddingVertical: 20,
    backgroundColor:'#e7cf9f',
    marginTop:'6%'
  },
  storyItem: {
    marginLeft: 16,
    marginRight: 8,
    width: 200,
  },
  storyImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  storyTitle: {
    marginTop: 8,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  navItem: {
    fontSize: 16,
  },
  headicon:{
    marginRight:12
  },
  bannerSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  bannerImage: {
    width: width * 1,
    height: width * 0.62,
    borderRadius: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position:'absolute',
    marginTop: '54%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  luxeImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  luxeitem: {
    marginLeft: 16,
    marginRight: 8,
    width: 200,
  },
  luxeSection: {
    paddingVertical: 20,
    backgroundColor:'#f0f0ee',
    marginTop:'6%'
  },
});

