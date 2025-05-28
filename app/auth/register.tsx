import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { authService } from '../../services/auth';

interface ValidationErrors {
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [registerType, setRegisterType] = useState<'phone' | 'email'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    if (!email.includes('@')) return 'Invalid email format';
    if (!email.includes('.')) return 'Invalid email format';
    if (email.length > 254) return 'Email is too long';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return 'Phone number is required';
    if (phone.length < 10) return 'Phone number must be at least 10 digits';
    if (phone.length > 15) return 'Phone number is too long';
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) return 'Phone number must contain only digits';
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    if (password.length > 128) return 'Password is too long';
    return undefined;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string): string | undefined => {
    if (!confirmPassword) return 'Please confirm your password';
    if (password !== confirmPassword) return 'Passwords do not match';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (registerType === 'email') {
      const emailError = validateEmail(email);
      if (emailError) newErrors.email = emailError;
    } else {
      const phoneError = validatePhone(phoneNumber);
      if (phoneError) newErrors.phone = phoneError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      if (registerType === 'phone') {
        // Request phone verification
        const response = await authService.loginWithPhone(phoneNumber);
        // Store phone number and password for verification screen
        await AsyncStorage.setItem('temp_phone', phoneNumber);
        await AsyncStorage.setItem('temp_password', password);
        Alert.alert(
          'Verification Code Sent',
          response.message || 'Please check your phone for the verification code.',
          [{ text: 'OK' }]
        );
        router.push('/auth/verify');
      } else {
        // Email registration
        const response = await authService.register(email, password, phoneNumber);
        // Store the token
        await AsyncStorage.setItem('auth_token', response.token);
        // Redirect to profile creation
        router.push('/auth/create-profile');
      }
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      Alert.alert(
        'Registration Failed',
        errorMessage,
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (type: 'email' | 'phone' | 'password' | 'confirmPassword', value: string) => {
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [type]: undefined }));

    switch (type) {
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhoneNumber(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Stack.Screen options={{ title: 'Register' }} />
      <View style={styles.content}>
        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.subheader}>Sign up to get started</Text>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[
              styles.tab,
              registerType === 'phone' && styles.tabActive
            ]}
            onPress={() => setRegisterType('phone')}
          >
            <Text style={[
              styles.tabText,
              registerType === 'phone' && styles.tabTextActive
            ]}>Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.tab,
              registerType === 'email' && styles.tabActive
            ]}
            onPress={() => setRegisterType('email')}
          >
            <Text style={[
              styles.tabText,
              registerType === 'email' && styles.tabTextActive
            ]}>Email</Text>
          </TouchableOpacity>
        </View>

        {registerType === 'phone' ? (
          <View>
            <View style={[
              styles.inputContainer,
              errors.phone && styles.inputError
            ]}>
              <TouchableOpacity 
                style={styles.countryCode}
                onPress={() => {/* TODO: Implement country code picker */}}
              >
                <Text style={styles.countryCodeText}>+233</Text>
              </TouchableOpacity>
              
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(value) => handleInputChange('phone', value)}
                maxLength={15}
                placeholderTextColor={Colors.neutral.gray}
              />
            </View>
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </View>
        ) : (
          <View>
            <TextInput
              style={[
                styles.emailInput,
                errors.email && styles.inputError
              ]}
              placeholder="Email address"
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => handleInputChange('email', value)}
              autoCapitalize="none"
              autoComplete="email"
              placeholderTextColor={Colors.neutral.gray}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>
        )}

        <View>
          <TextInput
            style={[
              styles.passwordInput,
              errors.password && styles.inputError
            ]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(value) => handleInputChange('password', value)}
            autoCapitalize="none"
            autoComplete="password-new"
            placeholderTextColor={Colors.neutral.gray}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>

        <View>
          <TextInput
            style={[
              styles.passwordInput,
              errors.confirmPassword && styles.inputError
            ]}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            autoCapitalize="none"
            autoComplete="password-new"
            placeholderTextColor={Colors.neutral.gray}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
        </View>

        <TouchableOpacity 
          style={[
            styles.registerButton,
            ((registerType === 'phone' && phoneNumber.length >= 10) || 
             (registerType === 'email' && email.includes('@'))) && 
            password.length >= 6 && 
            confirmPassword === password && 
            styles.registerButtonActive
          ]}
          onPress={handleRegister}
          disabled={isLoading}
        >
          <Text style={styles.registerButtonText}>
            {isLoading ? 'REGISTERING...' : 'REGISTER'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginLink}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.blue,
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: Colors.neutral.gray,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: Colors.accent.yellow,
  },
  tabText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.neutral.black,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    overflow: 'hidden',
  },
  countryCode: {
    padding: 15,
    backgroundColor: Colors.neutral.gray,
    justifyContent: 'center',
  },
  countryCodeText: {
    fontSize: 18,
    color: Colors.neutral.white,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    color: Colors.neutral.black,
  },
  emailInput: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    color: Colors.neutral.black,
    marginBottom: 20,
  },
  passwordInput: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 18,
    color: Colors.neutral.black,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: Colors.neutral.gray,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonActive: {
    backgroundColor: Colors.accent.yellow,
  },
  registerButtonText: {
    color: Colors.neutral.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    alignItems: 'center',
  },
  loginText: {
    color: Colors.accent.yellow,
    fontSize: 16,
  },
  inputError: {
    borderWidth: 1,
    borderColor: Colors.error.red,
  },
  errorText: {
    color: Colors.error.red,
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
    marginLeft: 4,
  },
}); 