import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface WelcomeScreenProps {
  onGetStarted?: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <View style={styles.logoOuter}>
        <View style={styles.logoInner}>
          <Text style={styles.logoText}>A</Text>
        </View>
      </View>
    </View>
    <Text style={styles.title}>Welcome to Autopadi</Text>
    <Text style={styles.subtitle}>
      Your one-stop app for vehicle maintenance and repair. Connect with trusted mechanics and manage your vehicle's health efficiently.
    </Text>
    <TouchableOpacity style={styles.button} onPress={onGetStarted}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logoOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#bfdbfe',
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default WelcomeScreen; 