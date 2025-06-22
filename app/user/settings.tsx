import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function UserSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>User account settings and notification preferences will be here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#666' },
}); 