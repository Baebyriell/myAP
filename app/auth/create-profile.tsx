import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { ProfileData, authService } from '../../services/auth';

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
}

export default function CreateProfile() {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ValidationErrors, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleCreateProfile = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      const response = await authService.createProfile(formData);

      // Store the profile ID
      if (response.profile._id) {
        await AsyncStorage.setItem('profile_id', response.profile._id);
      }

      Alert.alert(
        'Profile Created',
        'Your profile has been created successfully!',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/(tabs)')
          }
        ]
      );
    } catch (error) {
      let errorMessage = 'Failed to create profile. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      Alert.alert(
        'Error',
        errorMessage,
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Stack.Screen options={{ title: 'Create Profile' }} />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.header}>Complete Your Profile</Text>
          <Text style={styles.subheader}>Tell us a bit about yourself</Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <TextInput
                style={[
                  styles.input,
                  errors.firstName && styles.inputError
                ]}
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={(value) => handleInputChange('firstName', value)}
                placeholderTextColor={Colors.neutral.gray}
              />
              {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={[
                  styles.input,
                  errors.lastName && styles.inputError
                ]}
                placeholder="Last Name"
                value={formData.lastName}
                onChangeText={(value) => handleInputChange('lastName', value)}
                placeholderTextColor={Colors.neutral.gray}
              />
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={[
                  styles.input,
                  errors.address && styles.inputError
                ]}
                placeholder="Address"
                value={formData.address}
                onChangeText={(value) => handleInputChange('address', value)}
                placeholderTextColor={Colors.neutral.gray}
              />
              {errors.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={[
                  styles.input,
                  errors.city && styles.inputError
                ]}
                placeholder="City"
                value={formData.city}
                onChangeText={(value) => handleInputChange('city', value)}
                placeholderTextColor={Colors.neutral.gray}
              />
              {errors.city && (
                <Text style={styles.errorText}>{errors.city}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={[
                  styles.input,
                  errors.state && styles.inputError
                ]}
                placeholder="State"
                value={formData.state}
                onChangeText={(value) => handleInputChange('state', value)}
                placeholderTextColor={Colors.neutral.gray}
              />
              {errors.state && (
                <Text style={styles.errorText}>{errors.state}</Text>
              )}
            </View>

            <TouchableOpacity 
              style={[
                styles.createButton,
                Object.values(formData).every(value => value.trim()) && styles.createButtonActive
              ]}
              onPress={handleCreateProfile}
              disabled={isLoading}
            >
              <Text style={styles.createButtonText}>
                {isLoading ? 'CREATING PROFILE...' : 'CREATE PROFILE'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.blue,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    color: Colors.neutral.white,
    marginBottom: 40,
    textAlign: 'center',
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    color: Colors.neutral.black,
  },
  createButton: {
    backgroundColor: Colors.neutral.gray,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonActive: {
    backgroundColor: Colors.accent.yellow,
  },
  createButtonText: {
    color: Colors.neutral.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputError: {
    borderWidth: 1,
    borderColor: Colors.error.red,
  },
  errorText: {
    color: Colors.error.red,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
}); 