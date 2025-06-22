import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MechanicProfileScreen = () => (
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
      <View style={styles.headerControls}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => router.back()}>
          <Text style={styles.headerBtnText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn}>
          <Text style={styles.headerBtnText}>📞</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mechanicProfile}>
        <View style={styles.mechanicAvatar} />
        <View style={styles.mechanicDetails}>
          <Text style={styles.mechanicName}>Uncle Fii Mechanics</Text>
          <Text style={styles.mechanicSubtitle}>Coming soon...</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnPrimary}>
          <Text style={styles.actionBtnPrimaryText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>

    <ScrollView style={styles.servicesSection} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Services</Text>
      
      <TouchableOpacity style={styles.serviceItem}>
        <Text style={styles.serviceName}>Oil Change</Text>
        <Text style={styles.serviceArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceItem}>
        <Text style={styles.serviceName}>Brake Repair</Text>
        <Text style={styles.serviceArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceItem}>
        <Text style={styles.serviceName}>Tire Rotation</Text>
        <Text style={styles.serviceArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.serviceItem}>
        <Text style={styles.serviceName}>Engine Diagnostics</Text>
        <Text style={styles.serviceArrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Subscription Packages</Text>
      
      <View style={styles.serviceItem}>
        <View>
          <Text style={styles.serviceName}>Free vehicle diagnostic check</Text>
          <Text style={styles.serviceSubtitle}>Every 6 months</Text>
        </View>
        <Text style={styles.servicePrice}>Click Subscribe</Text>
      </View>

      <View style={styles.serviceItem}>
        <View>
          <Text style={styles.serviceName}>Basic Package</Text>
          <Text style={styles.serviceSubtitle}>Every 3 months</Text>
        </View>
        <Text style={styles.servicePrice}>₵300/6 months</Text>
      </View>

      <View style={styles.serviceItem}>
        <View>
          <Text style={styles.serviceName}>Premium Package</Text>
          <Text style={styles.serviceSubtitle}>Every month</Text>
        </View>
        <Text style={styles.servicePrice}>₵500/6 months</Text>
      </View>

      <Text style={styles.sectionTitle}>Actions</Text>
      
      <TouchableOpacity style={styles.serviceItem}>
        <Text style={styles.serviceName}>View Full Profile</Text>
        <Text style={styles.serviceArrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>We are specialised in</Text>
      
      <View style={styles.brandLogos}>
        <View style={styles.brandLogo}>
          <Text style={styles.brandText}>VW</Text>
        </View>
        <View style={styles.brandLogo}>
          <Text style={styles.brandText}>HYUNDAI</Text>
        </View>
        <View style={styles.brandLogo}>
          <Text style={styles.brandText}>TOYOTA</Text>
        </View>
        <View style={styles.brandLogo}>
          <Text style={styles.brandText}>BMW</Text>
        </View>
        <View style={styles.brandLogo}>
          <Text style={styles.brandText}>NISSAN</Text>
        </View>
        <View style={styles.brandLogo}>
          <Text style={styles.brandText}>FORD</Text>
        </View>
      </View>
    </ScrollView>
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
    color: '#fff',
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
    backgroundColor: '#fff',
    marginHorizontal: 1,
  },
  statusIcon: {
    fontSize: 12,
    marginHorizontal: 1,
    color: '#fff',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  headerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  mechanicProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  mechanicAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  mechanicDetails: {
    flex: 1,
  },
  mechanicName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  mechanicSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  actionBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  actionBtnPrimary: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  actionBtnPrimaryText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  servicesSection: {
    flex: 1,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  serviceSubtitle: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  serviceArrow: {
    fontSize: 20,
    color: '#8E8E93',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  brandLogos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 16,
  },
  brandLogo: {
    width: 60,
    height: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
});

export default MechanicProfileScreen; 