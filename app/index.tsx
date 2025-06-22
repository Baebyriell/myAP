import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function Welcome() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logo}>
        <View style={styles.logoInner} />
      </View>

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Autopadi</Text>
      <Text style={styles.subtitle}>
        Find the best solution for vehicle maintenance and repair. Connect with trusted mechanics and manage your vehicle's health efficiently.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/auth/verification')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: Colors.neutral.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logoInner: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primary.blue,
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.neutral.white,
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.neutral.white,
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  button: {
    backgroundColor: Colors.neutral.white,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
  },
  buttonText: {
    color: Colors.primary.blue,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 