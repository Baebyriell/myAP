import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MechanicDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mechanic Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/mechanic/jobs')}>
        <Text style={styles.buttonText}>View Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/mechanic/profile')}>
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/mechanic/settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 32 },
  button: { backgroundColor: '#4A90E2', padding: 20, borderRadius: 12, marginVertical: 12, width: 250, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
}); 