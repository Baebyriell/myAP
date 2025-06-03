import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { ProfileData, authService } from '../../services/auth';

interface PendingProfile extends ProfileData {
  _id: string;
  createdAt: string;
}

export default function VerifyProfiles() {
  const [pendingProfiles, setPendingProfiles] = useState<PendingProfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPendingProfiles = async () => {
    try {
      setIsLoading(true);
      const response = await authService.getPendingProfiles();
      setPendingProfiles(response.profiles);
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to fetch pending profiles. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingProfiles();
  }, []);

  const handleApprove = async (profileId: string) => {
    try {
      setIsLoading(true);
      await authService.approveProfile(profileId);
      Alert.alert(
        'Success',
        'Profile has been approved successfully.',
        [{ text: 'OK' }]
      );
      // Refresh the list
      fetchPendingProfiles();
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to approve profile. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReject = async (profileId: string) => {
    try {
      setIsLoading(true);
      await authService.rejectProfile(profileId);
      Alert.alert(
        'Success',
        'Profile has been rejected.',
        [{ text: 'OK' }]
      );
      // Refresh the list
      fetchPendingProfiles();
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to reject profile. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const renderProfileItem = ({ item }: { item: PendingProfile }) => (
    <View style={styles.profileCard}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.profileDate}>
          {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Address: </Text>
          {item.address}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>City: </Text>
          {item.city}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>State: </Text>
          {item.state}
        </Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.button, styles.approveButton]}
          onPress={() => handleApprove(item._id)}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={() => handleReject(item._id)}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: 'Verify Profiles',
          headerStyle: {
            backgroundColor: Colors.primary.blue,
          },
          headerTintColor: Colors.neutral.white,
        }} 
      />

      {pendingProfiles.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            No pending profiles to verify
          </Text>
        </View>
      ) : (
        <FlatList
          data={pendingProfiles}
          renderItem={renderProfileItem}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.list}
          refreshing={refreshing}
          onRefresh={fetchPendingProfiles}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.lightGray,
  },
  list: {
    padding: 16,
  },
  profileCard: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.neutral.black,
  },
  profileDate: {
    fontSize: 14,
    color: Colors.neutral.gray,
  },
  profileDetails: {
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    color: Colors.neutral.black,
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: Colors.success.green,
  },
  rejectButton: {
    backgroundColor: Colors.error.red,
  },
  buttonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 18,
    color: Colors.neutral.gray,
    textAlign: 'center',
  },
}); 