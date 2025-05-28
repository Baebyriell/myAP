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
}

export default function Login() {
  const [loginType, setLoginType] = useState<'phone' | 'email'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (loginType === 'email') {
      const emailError = validateEmail(email);
      if (emailError) newErrors.email = emailError;
    } else {
      const phoneError = validatePhone(phoneNumber);
      if (phoneError) newErrors.phone = phoneError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      if (loginType === 'phone') {
        // Request phone verification
        const response = await authService.loginWithPhone(phoneNumber);
        // Store phone number for verification screen
        await AsyncStorage.setItem('temp_phone', phoneNumber);
        Alert.alert(
          'Verification Code Sent',
          response.message || 'Please check your phone for the verification code.',
          [{ text: 'OK' }]
        );
        router.push('/auth/verify');
      } else {
        // Email login
        const response = await authService.loginWithEmail(email, password);
        // Check if profile exists
        try {
          await authService.getProfile(response.user.id);
          router.replace('/(tabs)');
        } catch (error) {
          // If profile doesn't exist, redirect to profile creation
          router.push('/auth/create-profile');
        }
      }
    } catch (error) {
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      Alert.alert(
        'Login Failed',
        errorMessage,
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (loginType === 'email') {
      const emailError = validateEmail(email);
      if (emailError) {
        Alert.alert(
          'Invalid Email',
          emailError,
          [{ text: 'OK' }]
        );
        return;
      }

      try {
        setIsLoading(true);
        const response = await authService.forgotPassword(email);
        Alert.alert(
          'Reset Password',
          response.message || 'A password reset link has been sent to your email.',
          [{ text: 'OK' }]
        );
      } catch (error) {
        let errorMessage = 'Failed to send reset link. Please try again.';
        
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }

        Alert.alert(
          'Error',
          errorMessage,
          [{ text: 'OK' }]
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert(
        'Phone Number Required',
        'Please switch to email login to reset your password.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleInputChange = (type: 'email' | 'phone' | 'password', value: string) => {
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
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.content}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subheader}>Sign in to continue</Text>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[
              styles.tab,
              loginType === 'phone' && styles.tabActive
            ]}
            onPress={() => setLoginType('phone')}
          >
            <Text style={[
              styles.tabText,
              loginType === 'phone' && styles.tabTextActive
            ]}>Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.tab,
              loginType === 'email' && styles.tabActive
            ]}
            onPress={() => setLoginType('email')}
          >
            <Text style={[
              styles.tabText,
              loginType === 'email' && styles.tabTextActive
            ]}>Email</Text>
          </TouchableOpacity>
        </View>

        {loginType === 'phone' ? (
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
            autoComplete="password"
            placeholderTextColor={Colors.neutral.gray}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
        </View>

        <TouchableOpacity 
          style={styles.forgotPassword}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.loginButton,
            ((loginType === 'phone' && phoneNumber.length >= 10) || 
             (loginType === 'email' && email.includes('@'))) && 
            password.length >= 6 && 
            styles.loginButtonActive
          ]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={styles.loginButtonText}>
            {isLoading ? 'LOGGING IN...' : 'LOGIN'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.registerLink}
          onPress={() => router.push('/auth/register')}
        >
          <Text style={styles.registerText}>Don&apos;t have an account? Register</Text>
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
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: Colors.accent.yellow,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: Colors.neutral.gray,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonActive: {
    backgroundColor: Colors.accent.yellow,
  },
  loginButtonText: {
    color: Colors.neutral.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLink: {
    alignItems: 'center',
  },
  registerText: {
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