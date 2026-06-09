import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme: any;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    background: isDarkMode ? '#000000' : '#F8FAFC', // OLED Black
    card: isDarkMode ? '#171717' : '#FFF', // Very dark gray
    text: isDarkMode ? '#FFFFFF' : '#0F172A',
    textMuted: isDarkMode ? '#A3A3A3' : '#64748B',
    iconBg: isDarkMode ? '#262626' : '#F1F5F9',
    divider: isDarkMode ? '#262626' : '#F1F5F9',
    iconColor: isDarkMode ? '#FFFFFF' : '#4B5563',
    badgeBg: isDarkMode ? '#171717' : '#F1F5F9',
    badgeBorder: isDarkMode ? '#262626' : '#E2E8F0',
    headerIcon: isDarkMode ? '#FFFFFF' : '#000',
    navBg: isDarkMode ? '#000000' : '#FFF',
    navBorder: isDarkMode ? '#262626' : '#F1F5F9',
    navActive: isDarkMode ? '#FFFFFF' : '#000',
    navInactive: isDarkMode ? '#737373' : '#9CA3AF',
    blue: '#3B82F6',
    green: '#10B981',
    red: '#EF4444',
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
