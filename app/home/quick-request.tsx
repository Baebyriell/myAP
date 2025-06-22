import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const mechanics = [
  { name: 'K.S Brothers Auto Shop', location: 'Accra' },
  { name: 'Uncle Fil Mechanics', location: 'Medina' },
  { name: 'Samuel Mechanic Shop', location: 'Legon' },
];

const QuickRequestScreen = () => (
  <View style={styles.container}>
    {/* Status Bar */}
    <View style={styles.statusBar}>
      <Text style={styles.statusText}>9:41</Text>
      <View style={styles.statusIcons}>
        <Text style={styles.statusIcon}>📶</Text>
        <Text style={styles.statusIcon}>📶</Text>
        <Text style={styles.statusIcon}>🔋</Text>
      </View>
    </View>
    {/* Map Area */}
    <View style={styles.mapContainer}>
      <View style={[styles.mapPin, { top: '20%', left: '60%' }]} />
      <View style={[styles.mapPin, { top: '35%', left: '45%' }]} />
      <View style={[styles.mapPin, { top: '25%', left: '75%' }]} />
      <View style={[styles.mapPin, { top: '65%', left: '25%' }]} />
      <View style={[styles.mapPin, { top: '55%', left: '70%' }]} />
      <View style={[styles.mapPin, { top: '40%', left: '85%' }]} />
      <View style={styles.radiusCircle} />
      <View style={styles.centerDot} />
      <TouchableOpacity style={styles.locationBtn}>
        <Text style={{ fontSize: 20 }}>🎯</Text>
      </TouchableOpacity>
    </View>
    {/* Search & Quick Request */}
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchBox} placeholder="🔍 Search Mechanic" placeholderTextColor="#888" />
      <TouchableOpacity style={styles.quickRequestBtn}>
        <Text style={styles.quickRequestText}>Quick Request</Text>
      </TouchableOpacity>
      <ScrollView>
        {mechanics.map((m, i) => (
          <View key={i} style={styles.mechanicItem}>
            <View style={styles.mechanicIcon}><Text>🔧</Text></View>
            <View>
              <Text>{m.name}</Text>
              <Text style={{ fontSize: 14, color: '#666' }}>{m.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    {/* Bottom Nav */}
    <View style={styles.bottomNav}>
      <View style={[styles.navItem, styles.activeNav]}><View style={styles.navIcon} /><Text>Home</Text></View>
      <View style={styles.navItem}><View style={styles.navIcon} /><Text>My Vehicles</Text></View>
      <View style={styles.navItem}><View style={styles.navIcon} /><Text>My Mechanics</Text></View>
      <View style={styles.navItem}><View style={styles.navIcon} /><Text>History</Text></View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  statusBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#fff' },
  statusText: { fontSize: 17, fontWeight: '600', color: '#000' },
  statusIcons: { flexDirection: 'row', gap: 5, alignItems: 'center' },
  statusIcon: { fontSize: 17, marginLeft: 5 },
  mapContainer: { flex: 1, backgroundColor: '#e8e8e8', borderRadius: 32, margin: 8, position: 'relative', overflow: 'hidden', minHeight: 200, justifyContent: 'center', alignItems: 'center' },
  mapPin: { position: 'absolute', width: 12, height: 12, backgroundColor: '#007AFF', borderWidth: 2, borderColor: '#fff', borderRadius: 6, zIndex: 2 },
  radiusCircle: { position: 'absolute', width: 280, height: 280, borderWidth: 2, borderColor: '#007AFF', borderRadius: 140, backgroundColor: 'rgba(0,122,255,0.1)', top: '50%', left: '50%', marginLeft: -140, marginTop: -140 },
  centerDot: { position: 'absolute', width: 12, height: 12, backgroundColor: '#007AFF', borderRadius: 6, top: '50%', left: '50%', marginLeft: -6, marginTop: -6 },
  locationBtn: { position: 'absolute', bottom: 20, right: 20, width: 44, height: 44, backgroundColor: '#fff', borderRadius: 22, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, elevation: 2 },
  searchContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 2 },
  searchBox: { width: '100%', padding: 12, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 12, fontSize: 16, backgroundColor: '#f8f8f8', marginBottom: 12 },
  quickRequestBtn: { width: '100%', padding: 16, backgroundColor: '#007AFF', borderRadius: 12, alignItems: 'center', marginBottom: 12 },
  quickRequestText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  mechanicItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  mechanicIcon: { width: 32, height: 32, backgroundColor: '#f0f0f0', borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderTopWidth: 1, borderTopColor: '#e0e0e0' },
  navItem: { alignItems: 'center', color: '#8e8e93', fontSize: 10 },
  navIcon: { width: 24, height: 24, backgroundColor: '#8e8e93', borderRadius: 4, marginBottom: 4 },
  activeNav: { color: '#007AFF' },
});

export default QuickRequestScreen; 