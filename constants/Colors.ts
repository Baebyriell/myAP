const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  primary: {
    blue: '#1E3A8A',    // Deep blue for main background
    lightBlue: '#2563EB', // Lighter blue for accents
  },
  accent: {
    yellow: '#FFB800',  // Primary accent color
    orange: '#FF8A00',  // Secondary accent color
  },
  neutral: {
    white: '#FFFFFF',   // Primary text and content
    gray: '#6B7280',    // Secondary text
    black: '#000000',   // Dark text
  },
  error: {
    red: '#DC2626',     // Error color for validation and alerts
    lightRed: '#FEE2E2', // Light error background
  },
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
