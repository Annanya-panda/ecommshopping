import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const imageData = [
  { id: '1', uri: require('../assests/images/review1.png') },
];

const ImageReview = () => {
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <Image source={item.uri} style={styles.image} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 120,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default ImageReview;
