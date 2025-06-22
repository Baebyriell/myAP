import { router } from 'expo-router';
import SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Splash() {
  const scale = useSharedValue(1);
  const bgOpacity = useSharedValue(0);

  useEffect(() => {
    async function prepare() {
      try {
        // Start with dot animation
        scale.value = withSequence(
          withTiming(20, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
          withTiming(40, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) })
        );

        // Fade in blue background
        bgOpacity.value = withDelay(1500, withTiming(1, { duration: 1000 }));

        // Navigate after animations complete
        setTimeout(() => {
        router.replace('/');
        }, 3000);

        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const dotStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const bgStyle = useAnimatedStyle(() => ({
    opacity: bgOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, bgStyle]} />
      <Animated.View style={[styles.dot, dotStyle]} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary.blue,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary.blue,
  },
}); 