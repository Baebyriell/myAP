import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NotificationPermissionScreen = () => (
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

    <View style={styles.content}>
      <View style={styles.permissionMap}>
        <View style={styles.mapInner}>
          <View style={styles.locationIcon}>📍</View>
        </View>
      </View>

      <Text style={styles.permissionTitle}>Allow "AutoPadi" to use your location?</Text>
      <Text style={styles.permissionText}>
        Your location is used for time to leave alerts, to improve location searches, and to suggest recent locations.
      </Text>

      <View style={styles.permissionButtons}>
        <TouchableOpacity style={styles.permissionBtnSecondary}>
          <Text style={styles.permissionBtnSecondaryText}>✓ Precise: On</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.permissionOptions}>
        <TouchableOpacity 
          style={styles.permissionOption}
          onPress={() => router.push('/search/book-mechanic')}
        >
          <Text style={styles.permissionOptionText}>Allow Once</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.permissionOption}
          onPress={() => router.push('/search/book-mechanic')}
        >
          <Text style={styles.permissionOptionText}>Allow While Using App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.permissionOption}>
          <Text style={styles.permissionOptionText}>Don't Allow</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionMap: {
    width: 200,
    height: 200,
    marginBottom: 32,
    backgroundColor: '#81C784',
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  mapInner: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  permissionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  permissionText: {
    fontSize: 16,
    color: '#8E8E93',
    lineHeight: 22,
    marginBottom: 32,
    textAlign: 'center',
  },
  permissionButtons: {
    marginBottom: 16,
  },
  permissionBtnSecondary: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    alignItems: 'center',
  },
  permissionBtnSecondaryText: {
    color: '#007AFF',
    fontSize: 17,
    fontWeight: '600',
  },
  permissionOptions: {
    width: '100%',
  },
  permissionOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  permissionOptionText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default NotificationPermissionScreen; 