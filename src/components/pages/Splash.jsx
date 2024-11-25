import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({ navigation }) => {
  const [textIndex, setTextIndex] = useState(0);
  const fullText = 'SELEN';  // Text to animate

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');  // Navigate to login or desired screen
    }, 3000);
  }, [navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => {
        if (prevIndex < fullText.length) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={['#f4ecea','#fbc2eb', '#FF3E6C']}  // Define the gradient colors here (you can adjust them to your liking)
      style={styles.container}
    >
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={require('../../assests/images/LOGOwdBG.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {fullText.slice(0, textIndex)}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f9eee8',
  },
});

export default Splash;
