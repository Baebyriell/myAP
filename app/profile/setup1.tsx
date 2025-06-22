import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProfileSetup1 = () => {
  const [userType, setUserType] = useState<'vehicle' | 'service'>('vehicle');

  return (
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
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>×</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Setup</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* User Type Selector */}
        <View style={styles.userTypeSelector}>
          <TouchableOpacity 
            style={[styles.userType, userType === 'vehicle' && styles.userTypeActive]}
            onPress={() => setUserType('vehicle')}
          >
            <Text style={[styles.userTypeText, userType === 'vehicle' && styles.userTypeTextActive]}>
              Vehicle User
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.userType, userType === 'service' && styles.userTypeActive]}
            onPress={() => setUserType('service')}
          >
            <Text style={[styles.userTypeText, userType === 'service' && styles.userTypeTextActive]}>
              Auto Service Provider
            </Text>
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage} />
        </View>

        {/* Form Fields */}
        <View style={styles.formField}>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput 
            style={styles.formInput} 
            value="Asamoah Joel" 
            editable={false}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Vehicle Name</Text>
          <TextInput 
            style={styles.formInput} 
            value="Toyota" 
            editable={false}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Vehicle Model</Text>
          <TextInput 
            style={styles.formInput} 
            value="Corolla" 
            editable={false}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.formLabel}>Vehicle Year</Text>
          <TextInput 
            style={styles.formInput} 
            value="2019" 
            editable={false}
          />
        </View>

        <TouchableOpacity 
          style={styles.completeBtn}
          onPress={() => router.push('/map')}
        >
          <Text style={styles.completeBtnText}>Complete Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  backArrow: {
    fontSize: 22,
    color: '#555',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  userTypeSelector: {
    flexDirection: 'row',
    marginBottom: 32,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    padding: 4,
  },
  userType: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 21,
  },
  userTypeActive: {
    backgroundColor: '#000',
  },
  userTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  userTypeTextActive: {
    color: '#fff',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  formField: {
    marginBottom: 24,
  },
  formLabel: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  formInput: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    fontSize: 16,
    color: '#333',
  },
  completeBtn: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  completeBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default ProfileSetup1; 