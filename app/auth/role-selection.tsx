import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RoleSelection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/mechanic/dashboard')}>
        <Text style={styles.buttonText}>I am a Mechanic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/user/map')}>
        <Text style={styles.buttonText}>I am a Vehicle Owner</Text>
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
