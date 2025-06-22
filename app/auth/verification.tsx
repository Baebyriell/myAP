import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface VerificationScreenProps {
  code: string[];
  onCodeChange: (index: number, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({ code, onCodeChange, onSubmit, onBack }) => (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={onBack}>
      <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
    <Text style={styles.title}>Verification</Text>
    <Text style={styles.subtitle}>Enter the 4-digit code sent to your email address.</Text>
    <View style={styles.codeRow}>
      {code.map((digit, idx) => (
            <TextInput
          key={idx}
          style={styles.codeInput}
              value={digit}
          onChangeText={val => onCodeChange(idx, val.replace(/[^0-9]/g, '').slice(0, 1))}
          keyboardType="number-pad"
              maxLength={1}
          textAlign="center"
            />
          ))}
        </View>
    <TouchableOpacity style={styles.button} onPress={onSubmit} disabled={code.some(d => !d)}>
      <Text style={styles.buttonText}>Verify</Text>
    </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 24,
    padding: 8,
  },
  backText: {
    fontSize: 24,
    color: '#2563eb',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 15,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  codeInput: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    fontSize: 24,
    marginHorizontal: 8,
    color: '#1e293b',
    backgroundColor: '#f1f5f9',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
    opacity: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
}); 

export default VerificationScreen; 