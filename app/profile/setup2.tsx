import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileSetup2 = () => (
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
      <Text style={styles.headerBack}>{'<'}</Text>
      <Text style={styles.headerTitle}>Profile Setup</Text>
      <View style={{ width: 24 }} />
    </View>
    {/* Nav Pills */}
    <View style={styles.pillsRow}>
      <View style={styles.pillInactive}><Text style={styles.pillInactiveText}>Vehicle User</Text></View>
      <View style={styles.pillActive}><Text style={styles.pillActiveText}>Auto Service Provider</Text></View>
    </View>
    {/* Profile Image */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Profile Picture</Text>
      <Text style={styles.sectionDesc}>Upload a professional profile picture of your business logo. This helps customers recognise you.</Text>
      <Image source={{ uri: 'https://placehold.co/96x96' }} style={styles.profilePic} />
      <View style={styles.rowGap}>
        <TouchableOpacity style={styles.primaryBtn}><Text style={styles.primaryBtnText}>Retake</Text></TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn}><Text style={styles.secondaryBtnText}>Change</Text></TouchableOpacity>
      </View>
    </View>
    {/* Experience */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experience</Text>
      <TouchableOpacity style={styles.dropdownBtn}>
        <Text style={styles.dropdownText}>Years of Experience</Text>
        <Text style={styles.dropdownArrow}>⌄</Text>
      </TouchableOpacity>
    </View>
    {/* Brands Serviced */}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Brands Serviced (Optional)</Text>
      <View style={styles.brandsGrid}>
        {['Benz', 'Toyota', 'Lexus', 'Hyundai', 'Nissan', 'Ford', 'Jeep', 'Mazda', 'Kia'].map(brand => (
          <View key={brand} style={styles.brandBox}><Text style={styles.brandText}>{brand}</Text></View>
        ))}
      </View>
    </View>
    {/* Complete Profile Button */}
    <TouchableOpacity style={styles.completeBtn}><Text style={styles.completeBtnText}>Complete Profile</Text></TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusText: { fontSize: 14, fontWeight: '500' },
  statusIcons: { flexDirection: 'row', alignItems: 'center' },
  statusDots: { flexDirection: 'row', marginRight: 4 },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#222', marginHorizontal: 1 },
  statusIcon: { fontSize: 12, marginHorizontal: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 8,
  },
  headerBack: { fontSize: 22, color: '#555' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  pillsRow: { flexDirection: 'row', marginVertical: 8 },
  pillInactive: { backgroundColor: '#e5e7eb', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 4, marginRight: 8 },
  pillInactiveText: { color: '#64748b', fontSize: 13 },
  pillActive: { backgroundColor: '#2563eb', borderRadius: 16, paddingHorizontal: 12, paddingVertical: 4 },
  pillActiveText: { color: '#fff', fontSize: 13 },
  section: { marginVertical: 8 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#222' },
  sectionDesc: { fontSize: 13, color: '#64748b', marginBottom: 8 },
  profilePic: { width: 96, height: 96, borderRadius: 48, alignSelf: 'center', marginBottom: 8 },
  rowGap: { flexDirection: 'row', justifyContent: 'center', marginBottom: 8 },
  primaryBtn: { backgroundColor: '#2563eb', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 20, marginRight: 8 },
  primaryBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  secondaryBtn: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 20 },
  secondaryBtnText: { color: '#222', fontWeight: 'bold', fontSize: 14 },
  dropdownBtn: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#2563eb', borderRadius: 8, padding: 12, backgroundColor: '#eff6ff', marginTop: 4 },
  dropdownText: { color: '#2563eb', flex: 1, fontSize: 15 },
  dropdownArrow: { color: '#2563eb', fontSize: 18 },
  brandsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  brandBox: { backgroundColor: '#e5e7eb', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6, margin: 2 },
  brandText: { color: '#222', fontSize: 13 },
  completeBtn: { backgroundColor: '#2563eb', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 16 },
  completeBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default ProfileSetup2; 