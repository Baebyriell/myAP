declare module 'expo-splash-screen' {
  export default {
    preventAutoHideAsync(): Promise<void>;
    hideAsync(): Promise<void>;
  };
} 