import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FileBrowserScreen = () => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity><Text style={styles.headerBtn}>Cancel</Text></TouchableOpacity>
      <Text style={styles.headerTitle}>Browse</Text>
      <TouchableOpacity><Text style={styles.headerBtn}>⚙️</Text></TouchableOpacity>
    </View>
    <ScrollView>
      {/* Recently Used */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently Used &gt;</Text>
        <View style={styles.rowItem}>
          <Text style={styles.icon}>📁</Text>
          <Text style={styles.rowText}>Downloads</Text>
          <Text style={styles.rowArrow}>&gt;</Text>
        </View>
      </View>
      {/* Locations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Locations &gt;</Text>
        <View style={styles.rowItem}><Text style={styles.icon}>☁️</Text><Text style={styles.rowText}>iCloud Drive</Text><Text style={styles.rowArrow}>&gt;</Text></View>
        <View style={styles.rowItem}><Text style={styles.icon}>📱</Text><Text style={styles.rowText}>On My iPhone</Text><Text style={styles.rowArrow}>&gt;</Text></View>
        <View style={styles.rowItem}><Text style={styles.icon}>📁</Text><Text style={styles.rowText}>Drive</Text><Text style={styles.rowArrow}>&gt;</Text></View>
        <View style={styles.rowItem}><Text style={styles.icon}>🗑️</Text><Text style={styles.rowText}>Recently Deleted</Text><Text style={styles.rowArrow}>&gt;</Text></View>
      </View>
      {/* Favorites */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorites &gt;</Text>
        <View style={styles.rowItem}><Text style={styles.icon}>📁</Text><Text style={styles.rowText}>Downloads</Text><Text style={styles.rowArrow}>&gt;</Text></View>
      </View>
      {/* Tags */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tags &gt;</Text>
        <View style={styles.rowItem}><View style={[styles.tagDot, { backgroundColor: 'red' }]} /><Text style={styles.rowText}>Red</Text><Text style={styles.rowArrow}>&gt;</Text></View>
        <View style={styles.rowItem}><View style={[styles.tagDot, { backgroundColor: 'yellow' }]} /><Text style={styles.rowText}>Yellow</Text><Text style={styles.rowArrow}>&gt;</Text></View>
        <View style={styles.rowItem}><View style={[styles.tagDot, { backgroundColor: 'green' }]} /><Text style={styles.rowText}>Green</Text><Text style={styles.rowArrow}>&gt;</Text></View>
        <View style={styles.rowItem}><Text style={styles.icon}>📋</Text><Text style={styles.rowText}>Portfolio Assets | josedevin.xyz</Text><Text style={styles.rowArrow}>&gt;</Text></View>
      </View>
    </ScrollView>
    {/* Bottom Nav */}
    <View style={[styles.bottomNav, { backgroundColor: '#333' }] }>
      <View style={styles.navItem}><View style={[styles.navIcon, { backgroundColor: '#666' }]} /><Text style={{ color: '#666' }}>Recents</Text></View>
      <View style={[styles.navItem, styles.activeNav]}><View style={[styles.navIcon, { backgroundColor: '#007AFF' }]} /><Text style={{ color: '#007AFF' }}>Browse</Text></View>
      <View style={styles.navItem}><View style={[styles.navIcon, { backgroundColor: '#666' }]} /><Text style={{ color: '#666' }}>Search</Text></View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerBtn: { color: '#007AFF', fontSize: 16 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  section: { backgroundColor: '#222', borderRadius: 8, margin: 12, padding: 12 },
  sectionTitle: { color: '#fff', marginBottom: 8, fontSize: 16 },
  rowItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon: { fontSize: 20, marginRight: 8 },
  rowText: { color: '#fff', fontSize: 15, flex: 1 },
  rowArrow: { color: '#fff', fontSize: 18 },
  tagDot: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 12, borderTopWidth: 1, borderTopColor: '#444' },
  navItem: { alignItems: 'center' },
  navIcon: { width: 24, height: 24, borderRadius: 4, marginBottom: 4 },
  activeNav: {},
});

export default FileBrowserScreen; 