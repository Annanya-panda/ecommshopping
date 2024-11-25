import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PopularStores = () => {
  const stores = [
    { name: 'Big Billion Days', label: '27th Sep' },
    { name: 'Small Things Sale', label: 'Now Live' },
    { name: 'Express Store', label: '' },
    { name: 'Pocket Bazaar', label: '' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Store</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {stores.map((store, index) => (
          <View key={index} style={styles.storeContainer}>
            <View style={styles.iconContainer}>
              <Text>{store.name}</Text>
            </View>
            <Text>{store.label}</Text>
          </View>
        ))}
      </ScrollView>
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
  scrollContainer: {
    marginTop: 10,
  },
  storeContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PopularStores;
