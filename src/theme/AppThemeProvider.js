import { useMemo } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useAppStore } from '../store';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

const AppThemeProvider = ({ children, emotionCache = CLIENT_SIDE_EMOTION_CACHE }) => {
  const [state] = useAppStore();
  const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)), [state.darkMode]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppThemeProvider;
