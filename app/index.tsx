import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AutoPadi</Text>
      <Text style={styles.subtitle}>Your Auto Service Companion</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {}}
      >
        <Link href="/auth/login" style={styles.buttonText}>
          Get Started
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.primary.blue,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.neutral.white,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.neutral.white,
    marginBottom: 40,
    textAlign: 'center',
    opacity: 0.9,
  },
  button: {
    backgroundColor: Colors.accent.yellow,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral.black,
    textTransform: 'uppercase',
  },
}); 