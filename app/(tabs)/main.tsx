import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

const DecibelMeter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Decibel Meter</Text>
        <View style={styles.currentDecibels}>
          <Text style={styles.currentLabel}>Current Decibels</Text>
          <Text style={styles.currentValue}>70</Text>
        </View>
      </View>
      
      <View style={styles.noiseLevelContainer}>
        <Text style={styles.noiseLevelTitle}>Noise level</Text>
        <Text style={styles.noiseLevelValue}>70dB</Text>
        <Text style={styles.percentageChange}>last 5 minutes +10%</Text>

        <View style={styles.barContainer}>
          <View style={[styles.bar, styles.lowBar]} />
          <View style={[styles.bar, styles.mediumBar]} />
          <View style={[styles.bar, styles.highBar]} />
        </View>
        <View style={styles.labels}>
          <Text style={styles.label}>Low</Text>
          <Text style={styles.label}>Medium</Text>
          <Text style={styles.label}>High</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Average Decibels in Your Area</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfc',
    padding: 20,
  },
  card: {
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  currentDecibels: {
    alignItems: 'center',
  },
  currentLabel: {
    fontSize: 16,
    color: '#6b7280',
  },
  currentValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  noiseLevelContainer: {
    marginBottom: 30,
  },
  noiseLevelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  noiseLevelValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  percentageChange: {
    fontSize: 16,
    color: '#10b981',
    marginBottom: 20,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bar: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  lowBar: {
    flex: 1,
    backgroundColor: '#e5e7eb',
  },
  mediumBar: {
    flex: 2,
    backgroundColor: '#9ca3af',
  },
  highBar: {
    flex: 1,
    backgroundColor: '#e5e7eb',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DecibelMeter;
