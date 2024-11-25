import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  const categories = [
    { name: 'Beauty', icon: 'face' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Home', icon: 'home' },
    { name: 'Travel', icon: 'flight' },
    { name: 'Gifts', icon: 'card-giftcard' },
  ];

  const offers = [
    { title: 'Smoothy Skin Care', discount: 'Up to 50% OFF' },
    { title: 'Earthy Living', discount: 'Up to 30% OFF' },
  ];

  const stories = [
    { title: 'Minify: Story of sustainable skincare', readMore: true },
    { title: 'Andy Dom: How to travel with minimal...', readMore: true },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Categories */}
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Hi EktaDCDCVR!</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Icon name={item.icon} size={30} color="#000" />
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Promo Banner */}
      <View style={styles.promoBanner}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x150' }} // replace with your image url
          style={styles.promoImage}
        />
        <Text style={styles.promoText}>Natural Skin Care - Back to Firm Skin</Text>
      </View>

      {/* Offers Section */}
      <View style={styles.offersContainer}>
        {offers.map((offer, index) => (
          <TouchableOpacity key={index} style={styles.offerCard}>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerDiscount}>{offer.discount}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Stories Section */}
      <View style={styles.storiesContainer}>
        <Text style={styles.sectionTitle}>Stories & More</Text>
        {stories.map((story, index) => (
          <View key={index} style={styles.storyItem}>
            <Text style={styles.storyTitle}>{story.title}</Text>
            {story.readMore && <Text style={styles.readMore}>Read More</Text>}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  promoBanner: {
    marginVertical: 20,
    alignItems: 'center',
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  promoText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  offersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  offerCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerDiscount: {
    marginTop: 5,
    color: '#ff6347',
  },
  storiesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  readMore: {
    marginTop: 5,
    color: '#ff6347',
  },
});

export default Profile;
