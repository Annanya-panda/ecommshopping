import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircleWithPercentage = ({ percentage, label }) => {
    return (
      <View style={styles.circleContainer}>
        <CircularProgress
          value={percentage * 10} // Convert rating (e.g., 4.1) to percentage (e.g., 41%)
          radius={30} // Adjust this value to control the size of the circle
          inActiveStrokeColor={'grey'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'green'} // Set to black or any visible color
          valueSuffix={'%'}
          maxValue={50} // Assuming the scale is out of 5, this makes the max value 50 for percentages
        />
        <Text style={styles.circleLabel}>{label}</Text>
      </View>
    );
  };
  

const CirclesGroup = () => {
  return (
    <View style={styles.circleGroup}>
      <CircleWithPercentage percentage={4.1} label="Quality" />
      <CircleWithPercentage percentage={3} label="Effect on Hair" />
      <CircleWithPercentage percentage={2} label="Fragrance" />
      <CircleWithPercentage percentage={3.7} label="Composition" />
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  circleGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  circleLabel: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '500',
    color:'grey'
  },
  circlePercentage: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CirclesGroup;
