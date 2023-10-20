import React from 'react';
import { View, StyleSheet } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: '100%', 
    height: 150, 
    borderRadius: 10, 
    backgroundColor: '#F2F2F2', 
    marginBottom: 28
  },
});

export default Rectangle;
