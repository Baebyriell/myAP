import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const BookMechanicScreen = () => (
  <View style={styles.container}>
    {/* Status Bar */}
    <View style={styles.statusBar}>
      <Text style={styles.statusText}>9:41</Text>
      <View style={styles.statusIcons}>
        <View style={styles.statusDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <Text style={styles.statusIcon}>📶</Text>
        <Text style={styles.statusIcon}>📶</Text>
        <Text style={styles.statusIcon}>🔋</Text>
      </View>
    </View>
    {/* Header */}
    <View style={styles.header}>
      <Text style={styles.headerBack}>×</Text>
      <Text style={styles.headerTitle}>Book a mechanic</Text>
      <View style={{ width: 24 }} />
    </View>
    {/* Search Bar */}
    <View style={styles.searchBarRow}>
      <TextInput style={styles.searchInput} placeholder="Mechanic name or shop" placeholderTextColor="#94a3b8" />
    </View>
    {/* Suggested Section */}
    <ScrollView style={styles.suggestedScroll} contentContainerStyle={{ paddingBottom: 16 }}>
      <Text style={styles.suggestedTitle}>Suggested</Text>
      {[
        { name: 'Fred & sons Auto Repair Shop', location: 'Madina behind Jocky oil' },
        { name: 'Nyame Aye Repair Shop', location: 'Opposite Anumle stop' },
        { name: 'Uncle T. Mechanics', location: 'Accra central just opposite BoG' },
        { name: 'Goodwill Auto Repair Shop', location: 'Adjacent heavens gate hostel' },
        { name: 'Abokobi Repairs', location: 'Abokobi First stop' },
        { name: 'Everything Some Repairs', location: 'UPSA bus stop' },
        { name: 'Ligon Auto Garage', location: 'Accra Opposite Traderfair' },
        { name: 'AA Mechanic Shop', location: 'Tema Comm 2' },
        { name: 'Poco General Auto', location: 'Tema Comm 2' },
        { name: 'Goodwill Auto Repair Shop', location: 'Adjacent heavens gate hostel' },
        { name: 'Ligon Auto Garage', location: 'Accra Opposite Traderfair' },
        { name: 'Nyame Aye Repair Shop', location: 'Opposite Anumle bus stop' }
      ].map((shop, index) => (
        <View key={index} style={styles.suggestedItem}>
          <Text style={styles.suggestedName}>{shop.name}</Text>
          <Text style={styles.suggestedLoc}>{shop.location}</Text>
        </View>
      ))}
    </ScrollView>
    {/* Bottom Navigation */}
    <View style={styles.bottomNav}>
      <Text style={styles.navItemActive}>Home</Text>
      <Text style={styles.navItem}>My mechanics</Text>
      <Text style={styles.navItem}>My Booking</Text>
      <Text style={styles.navItem}>Message</Text>
      <Text style={styles.navItem}>Profile</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  statusBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 8 },
  statusText: { fontSize: 14, fontWeight: '500' },
  statusIcons: { flexDirection: 'row', alignItems: 'center' },
  statusDots: { flexDirection: 'row', marginRight: 4 },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#222', marginHorizontal: 1 },
  statusIcon: { fontSize: 12, marginHorizontal: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#e5e7eb', marginBottom: 8 },
  headerBack: { fontSize: 22, color: '#555' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  searchBarRow: { marginVertical: 12 },
  searchInput: { backgroundColor: '#f1f5f9', borderRadius: 8, paddingVertical: 12, paddingHorizontal: 16, fontSize: 16, color: '#222', borderWidth: 1, borderColor: '#e5e7eb' },
  suggestedScroll: { flex: 1 },
  suggestedTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  suggestedItem: { marginBottom: 10 },
  suggestedName: { fontSize: 15, fontWeight: '500', color: '#222' },
  suggestedLoc: { fontSize: 13, color: '#64748b' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#e5e7eb', paddingVertical: 10, backgroundColor: '#fff' },
  navItem: { color: '#64748b', fontSize: 13 },
  navItemActive: { color: '#2563eb', fontWeight: 'bold', fontSize: 13 },
});

export default BookMechanicScreen; 