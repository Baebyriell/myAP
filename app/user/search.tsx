import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function UserSearch() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Mechanics</Text>
      <Text style={styles.text}>Search for mechanics by name, location, or service.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#666' },
}); 