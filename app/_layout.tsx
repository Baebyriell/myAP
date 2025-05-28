import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="splash"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: 'AutoPadi',
        }}
      />
      <Stack.Screen
        name="auth/login"
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="auth/register"
        options={{
          title: 'Register',
        }}
      />
      </Stack>
  );
}
