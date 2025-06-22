import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UserMap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Mechanics Near You</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/user/search')}>
        <Text style={styles.buttonText}>Search Mechanics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/user/bookings')}>
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/user/profile')}>
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/user/settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 32 },
  button: { backgroundColor: '#007AFF', padding: 20, borderRadius: 12, marginVertical: 12, width: 250, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
}); 