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
  isTransitioning: boolean;
};

const ThemeModeContext = React.createContext<ThemeModeContextValue | undefined>(undefined);

const THEME_REVEAL_MS = 620;
const THEME_FADE_MS = 180;

const getBackgroundByMode = (mode: PaletteMode) =>
  mode === 'dark'
    ? 'radial-gradient(circle at 85% 12%, rgba(52,211,153,0.18), transparent 42%), radial-gradient(circle at 12% 18%, rgba(59,130,246,0.22), transparent 45%), #09111f'
    : 'radial-gradient(circle at 82% 14%, rgba(74,222,128,0.16), transparent 40%), radial-gradient(circle at 15% 12%, rgba(59,130,246,0.14), transparent 40%), #f2f7fb';

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
  const [transitionMode, setTransitionMode] = React.useState<PaletteMode | null>(null);
  const [showTransitionOverlay, setShowTransitionOverlay] = React.useState(false);
  const [fadeOutOverlay, setFadeOutOverlay] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const revealTimeoutRef = React.useRef<number | null>(null);
  const fadeTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const savedMode = window.localStorage.getItem('portfolio-theme');

    if (savedMode === 'light' || savedMode === 'dark') {
      setMode(savedMode);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('portfolio-theme', mode);
  }, [mode]);

  React.useEffect(() => {
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }

      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const toggleTheme = React.useCallback(() => {
    if (isTransitioning) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nextMode: PaletteMode = mode === 'light' ? 'dark' : 'light';

    if (prefersReducedMotion) {
      setMode(nextMode);
      return;
    }

    setIsTransitioning(true);
    setTransitionMode(nextMode);
    setFadeOutOverlay(false);

    // Reset clip-path before starting the next reveal.
    setShowTransitionOverlay(false);

    // Start transition on the next frame so the initial clip-path is painted first.
    window.requestAnimationFrame(() => {
      setShowTransitionOverlay(true);
    });

    revealTimeoutRef.current = window.setTimeout(() => {
      setMode(nextMode);

      // Keep overlay fully visible while the new theme is painted, then fade it out.
      setFadeOutOverlay(true);

      fadeTimeoutRef.current = window.setTimeout(() => {
        setShowTransitionOverlay(false);
        setFadeOutOverlay(false);
        setTransitionMode(null);
        setIsTransitioning(false);
        revealTimeoutRef.current = null;
        fadeTimeoutRef.current = null;
      }, THEME_FADE_MS);
    }, THEME_REVEAL_MS);
  }, [isTransitioning, mode]);

  const theme = React.useMemo(() => buildTheme(mode), [mode]);
  const contextValue = React.useMemo(
    () => ({ mode, toggleTheme, isTransitioning }),
    [isTransitioning, mode, toggleTheme],
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Box
          sx={{
            minHeight: '100vh',
            background: getBackgroundByMode(mode),
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'fixed',
              inset: 0,
              zIndex: (theme) => theme.zIndex.modal + 10,
              pointerEvents: 'none',
              visibility: transitionMode ? 'visible' : 'hidden',
              background: getBackgroundByMode(transitionMode ?? mode),
              opacity: fadeOutOverlay ? 0 : 1,
              clipPath: showTransitionOverlay
                ? 'polygon(0 0, 220vmax 0, 0 220vmax)'
                : 'polygon(0 0, 0 0, 0 0)',
              transition: `clip-path ${THEME_REVEAL_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${THEME_FADE_MS}ms ease-out`,
              willChange: 'clip-path, opacity',
            }}
          />
          <Box sx={{ position: 'relative', pb: { xs: 4, md: 6 } }}>{children}</Box>
        </Box>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}