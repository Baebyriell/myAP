import { router } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';

export default function Splash() {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);
  const slideUp = useSharedValue(50);

  useEffect(() => {
    // Initial fade in
    opacity.value = withTiming(1, { duration: 1000 });

    // Scale animation
    scale.value = withRepeat(
      withSequence(
        withSpring(1.1, { damping: 4 }),
        withSpring(1, { damping: 4 })
      ),
      2,
      false
    );

    // Slide up animation
    slideUp.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.cubic)
    });

    // Fade out and navigate
    opacity.value = withDelay(
      2500,
      withTiming(0, { duration: 500 }, () => {
        router.replace('/');
      })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateY: slideUp.value }
    ],
    opacity: opacity.value,
  }));

  return (
    <ImageBackground
       source={require('../assets/images/splash.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.content, animatedStyle]}>
          <Text style={styles.title}>AutoPadi</Text>
          <Text style={styles.subtitle}>Experience Road Safety</Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(30, 58, 138, 0.85)', // Primary blue with opacity
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 24,
    color: Colors.accent.yellow,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
}); 