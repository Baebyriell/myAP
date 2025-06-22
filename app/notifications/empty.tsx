import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotificationEmptyScreen = () => (
  <View style={styles.container}>
    <Text style={styles.bellIcon}>🔔</Text>
    <Text style={styles.title}>No Notifications</Text>
    <Text style={styles.desc}>You have no notifications at this time.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  bellIcon: { fontSize: 48, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#222', marginBottom: 8 },
  desc: { color: '#666', fontSize: 15, textAlign: 'center' },
});

export default NotificationEmptyScreen; 