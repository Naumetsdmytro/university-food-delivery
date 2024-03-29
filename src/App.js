import { BrowserRouter } from 'react-router-dom';
import { AppStoreProvider } from './store';
import { AppThemeProvider } from './theme';
import { AppSnackBarProvider } from './components/AppSnackBar';
import { ContextProvider } from './context';
import Routes from './routes';
import Layout from './layout';
import { ErrorBoundary } from './components';
import IdleTimer from './components/IdleTimer';

/**
 * Root Application Component
 * @component App
 */
const App = () => {
  return (
    <ErrorBoundary name="App">
      <AppStoreProvider>
        <IdleTimer />
        <AppThemeProvider>
          <AppSnackBarProvider>
            <ContextProvider>
              <BrowserRouter>
                <Layout>
                  <Routes />
                </Layout>
              </BrowserRouter>
            </ContextProvider>
          </AppSnackBarProvider>
        </AppThemeProvider>
      </AppStoreProvider>
    </ErrorBoundary>
  );
};

export default App;
