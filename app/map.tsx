import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MapScreen = () => (
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

    {/* Map Container */}
    <View style={styles.mapContainer}>
      {/* Map Header */}
      <View style={styles.mapHeader}>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
    </View>

      {/* Location Indicator */}
      <View style={styles.locationIndicator}>
        <View style={styles.locationDot} />
      </View>

      {/* Map Pins */}
      <View style={styles.mapPins}>
        <TouchableOpacity style={[styles.mapPin, styles.pin1]} onPress={() => router.push('/search/book-mechanic')}>
          <Text style={styles.pinText}>🔧</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mapPin, styles.pin2]} onPress={() => router.push('/search/book-mechanic')}>
          <Text style={styles.pinText}>🔧</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mapPin, styles.pin3]} onPress={() => router.push('/search/book-mechanic')}>
          <Text style={styles.pinText}>🔧</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mapPin, styles.pin4]} onPress={() => router.push('/search/book-mechanic')}>
          <Text style={styles.pinText}>🔧</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mapPin, styles.pin5]} onPress={() => router.push('/search/book-mechanic')}>
          <Text style={styles.pinText}>🔧</Text>
      </TouchableOpacity>
      </View>

      {/* Map Bottom */}
      <View style={styles.mapBottom}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchInput}>Search Mechanic</Text>
        </View>

        <TouchableOpacity 
          style={styles.quickRequestBtn}
          onPress={() => router.push('/home/quick-request')}
        >
          <Text style={styles.quickRequestText}>Quick Request</Text>
      </TouchableOpacity>

        <Text style={styles.nearbyMechanics}>4.5 Brothers Auto Shop</Text>
        
        <ScrollView style={styles.mechanicsList} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.mechanicItem} onPress={() => router.push('/search/book-mechanic')}>
            <View style={styles.mechanicIcon} />
            <View style={styles.mechanicInfo}>
              <Text style={styles.mechanicName}>Shop N Mechanics</Text>
              <Text style={styles.mechanicDistance}>1KM Away</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mechanicItem} onPress={() => router.push('/search/book-mechanic')}>
            <View style={styles.mechanicIcon} />
            <View style={styles.mechanicInfo}>
              <Text style={styles.mechanicName}>Samuel Mechanics Shop</Text>
              <Text style={styles.mechanicDistance}>3KM Away</Text>
          </View>
          </TouchableOpacity>
      </ScrollView>
      </View>
    </View>

    {/* Bottom Navigation */}
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navLabel}>My Vehicle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>🔧</Text>
        <Text style={styles.navLabel}>Service Plans</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>📊</Text>
        <Text style={styles.navLabel}>History</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDots: {
    flexDirection: 'row',
    marginRight: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#222',
    marginHorizontal: 1,
  },
  statusIcon: {
    fontSize: 12,
    marginHorizontal: 1,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#e8f4f8',
    position: 'relative',
  },
  mapHeader: {
    position: 'absolute',
    top: 60,
    left: 24,
    right: 24,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuBtn: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  menuIcon: {
    fontSize: 18,
    color: '#333',
  },
  locationIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -75 }],
    width: 150,
    height: 150,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationDot: {
    width: 20,
    height: 20,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  mapPins: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  mapPin: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  pin1: { top: '20%', left: '15%' },
  pin2: { top: '25%', right: '20%' },
  pin3: { top: '65%', left: '25%' },
  pin4: { top: '70%', right: '15%' },
  pin5: { top: '40%', left: '60%' },
  pinText: {
    fontSize: 16,
    color: '#fff',
  },
  mapBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 100,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 12,
    color: '#666',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  quickRequestBtn: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  quickRequestText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  nearbyMechanics: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 12,
  },
  mechanicsList: {
    maxHeight: 120,
  },
  mechanicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  mechanicIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    marginRight: 12,
  },
  mechanicInfo: {
    flex: 1,
  },
  mechanicName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
    color: '#333',
  },
  mechanicDistance: {
    fontSize: 12,
    color: '#8E8E93',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: '#8E8E93',
  },
  navLabel: {
    fontSize: 10,
    color: '#8E8E93',
  },
});

export default MapScreen;