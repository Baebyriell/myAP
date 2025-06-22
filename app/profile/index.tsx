import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Profile</Text>
    {/* Add profile info here */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});

export default ProfileScreen; 