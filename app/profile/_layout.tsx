import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="setup1"
        options={{
          title: 'Profile Setup 1',
        }}
      />
      <Stack.Screen
        name="setup2"
        options={{
          title: 'Profile Setup 2',
        }}
      />
      <Stack.Screen
        name="setup3"
        options={{
          title: 'Profile Setup 3',
        }}
      />
    </Stack>
  );
} 