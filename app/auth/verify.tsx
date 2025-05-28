import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { authService } from '../../services/auth';

export default function Verify() {
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    // Get stored phone number
    const getPhoneNumber = async () => {
      const storedPhone = await AsyncStorage.getItem('temp_phone');
      if (storedPhone) {
        setPhoneNumber(storedPhone);
      } else {
        // If no phone number is stored, go back to login
        router.replace('/auth/login');
      }
    };
    getPhoneNumber();
  }, []);

  useEffect(() => {
    // Countdown timer for resend code
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleVerify = async () => {
    if (!code) {
      setError('Please enter the verification code');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await authService.verifyPhone(phoneNumber, code);
      
      // Check if we have a stored password (registration flow)
      const storedPassword = await AsyncStorage.getItem('temp_password');
      
      if (storedPassword) {
        // This is a registration flow
        await AsyncStorage.removeItem('temp_password');
        // Redirect to profile creation
        router.replace('/auth/create-profile');
      } else {
        // This is a login flow
        router.replace('/(tabs)');
      }
    } catch (error) {
      let errorMessage = 'Verification failed. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!canResend) return;

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await authService.resendCode(phoneNumber);
      
      Alert.alert(
        'Code Resent',
        response.message || 'A new verification code has been sent to your phone.',
        [{ text: 'OK' }]
      );

      // Reset countdown
      setCountdown(60);
      setCanResend(false);
    } catch (error) {
      let errorMessage = 'Failed to resend code. Please try again.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Stack.Screen options={{ title: 'Verify Phone' }} />
      <View style={styles.content}>
        <Text style={styles.header}>Verify Your Phone</Text>
        <Text style={styles.subheader}>
          Enter the verification code sent to {phoneNumber}
        </Text>

        <View style={styles.codeContainer}>
          <TextInput
            style={[
              styles.codeInput,
              error && styles.inputError
            ]}
            placeholder="Enter 6-digit code"
            keyboardType="number-pad"
            value={code}
            onChangeText={(value) => {
              setCode(value);
              setError(null);
            }}
            maxLength={6}
            placeholderTextColor={Colors.neutral.gray}
          />
          {error && (
            <Text style={styles.errorText}>{error}</Text>
          )}
        </View>

        <TouchableOpacity 
          style={[
            styles.verifyButton,
            code.length === 6 && styles.verifyButtonActive
          ]}
          onPress={handleVerify}
          disabled={isLoading || code.length !== 6}
        >
          <Text style={styles.verifyButtonText}>
            {isLoading ? 'VERIFYING...' : 'VERIFY'}
          </Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn&apos;t receive the code?{' '}
            {canResend ? (
              <Text 
                style={styles.resendLink}
                onPress={handleResendCode}
              >
                Resend
              </Text>
            ) : (
              <Text style={styles.resendTimer}>
                Resend in {countdown}s
              </Text>
            )}
          </Text>
        </View>
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
  codeContainer: {
    marginBottom: 30,
  },
  codeInput: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 15,
    fontSize: 24,
    color: Colors.neutral.black,
    textAlign: 'center',
    letterSpacing: 8,
  },
  verifyButton: {
    backgroundColor: Colors.neutral.gray,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonActive: {
    backgroundColor: Colors.accent.yellow,
  },
  verifyButtonText: {
    color: Colors.neutral.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendContainer: {
    alignItems: 'center',
  },
  resendText: {
    color: Colors.neutral.white,
    fontSize: 16,
  },
  resendLink: {
    color: Colors.accent.yellow,
    fontWeight: '600',
  },
  resendTimer: {
    color: Colors.neutral.gray,
  },
  inputError: {
    borderWidth: 1,
    borderColor: Colors.error.red,
  },
  errorText: {
    color: Colors.error.red,
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
}); 