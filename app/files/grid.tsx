import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const files = [
  { name: 'Arc Search', items: '9 items', color: '#007AFF' },
  { name: 'Blackmagic Cam', items: '1 item', color: '#007AFF' },
  { name: 'Delta', items: '15 items', color: '#007AFF' },
  { name: 'Darkroom', items: '9 items', color: '#f0f0f0', textColor: '#666' },
  { name: 'scan_299403_02...', items: '1.5 MB', color: '#f0f0f0', textColor: '#666' },
  { name: 'zip', items: 'Certified Mechanic', color: '#007AFF', isZip: true },
];

const FileGridScreen = () => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity><Text style={styles.headerBtn}>← Browse</Text></TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.headerTitle}>Folder</Text>
        <Text style={{ marginLeft: 8 }}>⌄</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity><Text style={styles.headerBtn}>☰</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.headerBtn}>Cancel</Text></TouchableOpacity>
      </View>
    </View>
    {/* Search Bar */}
    <View style={styles.searchBarRow}>
      <TextInput style={styles.searchInput} placeholder="🔍 Search" placeholderTextColor="#888" />
      <Text style={{ position: 'absolute', right: 16, top: 16, color: '#666' }}>🎤</Text>
    </View>
    {/* File Grid */}
    <ScrollView contentContainerStyle={styles.fileGrid}>
      {files.map((file, i) => (
        <View key={i} style={[styles.fileCard, { backgroundColor: file.color || '#007AFF' }] }>
          {file.isZip ? (
            <Text style={{ fontSize: 24, marginBottom: 8 }}>📦</Text>
          ) : (
            <View style={[styles.fileCardIcon, file.textColor ? { backgroundColor: '#ddd' } : {}]} />
          )}
          <Text style={[styles.fileName, file.textColor ? { color: file.textColor } : {}]}>{file.name}</Text>
          <Text style={[styles.fileItems, file.textColor ? { color: file.textColor, opacity: 0.7 } : { opacity: 0.7 }]}>{file.items}</Text>
        </View>
      ))}
    </ScrollView>
    {/* Bottom Nav */}
    <View style={styles.bottomNav}>
      <View style={styles.navItem}><View style={[styles.navIcon, { backgroundColor: '#666' }]} /><Text style={{ color: '#666' }}>Recents</Text></View>
      <View style={[styles.navItem, styles.activeNav]}><View style={[styles.navIcon, { backgroundColor: '#007AFF' }]} /><Text style={{ color: '#007AFF' }}>Browse</Text></View>
      <View style={styles.navItem}><View style={[styles.navIcon, { backgroundColor: '#666' }]} /><Text style={{ color: '#666' }}>Search</Text></View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  headerBtn: { color: '#007AFF', fontSize: 16 },
  headerTitle: { fontWeight: '600', fontSize: 16 },
  searchBarRow: { padding: 12, backgroundColor: '#f8f8f8', borderRadius: 8, margin: 20, marginTop: 0, marginBottom: 20 },
  searchInput: { width: '100%', borderWidth: 0, backgroundColor: 'transparent', fontSize: 16, color: '#222' },
  fileGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, padding: 20 },
  fileCard: { width: '30%', minWidth: 90, backgroundColor: '#007AFF', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 12 },
  fileCardIcon: { width: 40, height: 40, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 8, marginBottom: 8 },
  fileName: { fontSize: 12, color: '#fff', marginBottom: 2 },
  fileItems: { fontSize: 10, color: '#fff', opacity: 0.7 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderTopWidth: 1, borderTopColor: '#e0e0e0' },
  navItem: { alignItems: 'center' },
  navIcon: { width: 24, height: 24, borderRadius: 4, marginBottom: 4 },
  activeNav: {},
});

export default FileGridScreen; 