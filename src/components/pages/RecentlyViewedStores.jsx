import React from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const RecentlyViewedStores = () => {
  const stores = [
    { name: 'Ink Bottles' },
    { name: 'Computer Parts' },
    { name: 'Casual Shirts' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recently Viewed Stores</Text>
      <FlatList
        data={stores}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemContainer: {
    marginRight: 10,
  },
  itemBox: {
    width: width * 0.4,
    height: 150,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecentlyViewedStores;
