import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const notifications = [
  {
    id: 1,
    title: 'Service Reminder',
    message: 'Your vehicle is due for an oil change',
    time: '2 hours ago',
    type: 'reminder' as const
  },
  {
    id: 2,
    title: 'Booking Confirmed',
    message: 'Your appointment with Uncle Fii Mechanics has been confirmed',
    time: '1 day ago',
    type: 'booking' as const
  },
  {
    id: 3,
    title: 'New Mechanic Available',
    message: 'A new mechanic is now available in your area',
    time: '2 days ago',
    type: 'info' as const
  }
];

const NotificationListScreen = () => (
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
      <Text style={styles.headerTitle}>Notifications</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Clear All</Text>
      </TouchableOpacity>
    </View>

    <ScrollView style={styles.notificationsList} showsVerticalScrollIndicator={false}>
      {notifications.map((notification) => (
        <TouchableOpacity 
          key={notification.id} 
          style={styles.notificationItem}
          onPress={() => router.push('/map')}
        >
          <View style={[
            styles.notificationIcon, 
            notification.type === 'reminder' ? styles.iconreminder :
            notification.type === 'booking' ? styles.iconbooking :
            styles.iconinfo
          ]}>
            <Text style={styles.iconText}>
              {notification.type === 'reminder' ? '⏰' : 
               notification.type === 'booking' ? '✅' : 'ℹ️'}
            </Text>
          </View>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationMessage}>{notification.message}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
          <View style={styles.notificationArrow}>
            <Text style={styles.arrowText}>›</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerBtn: {
    color: '#007AFF',
    fontSize: 16,
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconreminder: {
    backgroundColor: '#FF9500',
  },
  iconbooking: {
    backgroundColor: '#34C759',
  },
  iconinfo: {
    backgroundColor: '#007AFF',
  },
  iconText: {
    fontSize: 18,
    color: '#fff',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    lineHeight: 20,
  },
  notificationTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  notificationArrow: {
    marginLeft: 12,
  },
  arrowText: {
    fontSize: 18,
    color: '#8E8E93',
  },
});

export default NotificationListScreen; 