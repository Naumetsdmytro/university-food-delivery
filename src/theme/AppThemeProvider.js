import { useMemo } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useAppStore } from '../store';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

// Setting .prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

// Client-side cache, shared for the whole session of the user in the browser.
const CLIENT_SIDE_EMOTION_CACHE = createEmotionCache();

/**
 * Renders composition of Emotion's CacheProvider + MUI's ThemeProvider to wrap content of entire App
 * The Light or Dark themes applied depending on global .darkMode state
 * @param {EmotionCache} [emotionCache] - shared Emotion's cache to use in the App
 */
const AppThemeProvider = ({ children, emotionCache = CLIENT_SIDE_EMOTION_CACHE }) => {
  const [state] = useAppStore();
  // TODO: Make theme changes after full app loading.
  // Maybe we need to use https://github.com/pacocoursey/next-themes npm
  // Also take a look on this tutorial https://medium.com/@luca_79189/how-to-get-a-flickerless-persistent-dark-mode-in-your-next-js-app-example-with-mui-9581ea898314
  const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)), [state.darkMode]);

  return (
    <CacheProvider value={emotionCache}>
      {/* <StyledEngineProvider injectFirst> use this instead of Emotion's <CacheProvider/> if you want to use alternate styling library */}
      <ThemeProvider theme={theme}>
        <CssBaseline /* MUI Styles */ />
        {children}
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </CacheProvider>
  );
};

export default AppThemeProvider;
