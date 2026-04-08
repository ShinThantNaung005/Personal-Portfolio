"use client";

import * as React from 'react';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  type PaletteMode,
} from '@mui/material';

type ThemeModeContextValue = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

const ThemeModeContext = React.createContext<ThemeModeContextValue | undefined>(undefined);

const buildTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#34d399' : '#0f766e',
      },
      secondary: {
        main: mode === 'dark' ? '#60a5fa' : '#1d4ed8',
      },
      background: {
        default: mode === 'dark' ? '#09111f' : '#f2f7fb',
        paper: mode === 'dark' ? '#101c31' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#e8eefc' : '#11223f',
        secondary: mode === 'dark' ? '#a4b3cc' : '#4f647f',
      },
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: 'var(--font-space-grotesk), "Manrope", sans-serif',
      h1: {
        fontFamily: 'var(--font-fraunces), "DM Serif Display", serif',
      },
      h2: {
        fontFamily: 'var(--font-fraunces), "DM Serif Display", serif',
      },
      h3: {
        fontFamily: 'var(--font-fraunces), "DM Serif Display", serif',
      },
      h4: {
        fontFamily: 'var(--font-fraunces), "DM Serif Display", serif',
      },
      h5: {
        fontFamily: 'var(--font-fraunces), "DM Serif Display", serif',
      },
      h6: {
        fontFamily: 'var(--font-fraunces), "DM Serif Display", serif',
      },
      button: {
        fontWeight: 600,
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            border: '1px solid rgba(108, 140, 182, 0.22)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            textTransform: 'none',
          },
        },
      },
    },
  });

export function useThemeMode(): ThemeModeContextValue {
  const context = React.useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used within PortfolioThemeProvider.');
  }

  return context;
}

export default function PortfolioThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<PaletteMode>('dark');

  React.useEffect(() => {
    const savedMode = window.localStorage.getItem('portfolio-theme');

    if (savedMode === 'light' || savedMode === 'dark') {
      setMode(savedMode);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('portfolio-theme', mode);
  }, [mode]);

  const toggleTheme = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = React.useMemo(() => buildTheme(mode), [mode]);
  const contextValue = React.useMemo(
    () => ({ mode, toggleTheme }),
    [mode, toggleTheme],
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Box
          sx={{
            minHeight: '100vh',
            background:
              mode === 'dark'
                ? 'radial-gradient(circle at 85% 12%, rgba(52,211,153,0.18), transparent 42%), radial-gradient(circle at 12% 18%, rgba(59,130,246,0.22), transparent 45%), #09111f'
                : 'radial-gradient(circle at 82% 14%, rgba(74,222,128,0.16), transparent 40%), radial-gradient(circle at 15% 12%, rgba(59,130,246,0.14), transparent 40%), #f2f7fb',
          }}
        >
          <Box sx={{ position: 'relative', pb: { xs: 4, md: 6 } }}>{children}</Box>
        </Box>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}