import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/AppStore';
import { ErrorBoundary, AppIconButton } from '../components';
import { useOnMobile } from '../hooks/layout';
import { BOTTOMBAR_DESKTOP_VISIBLE } from './config';
import { useEventSwitchDarkMode } from '../hooks/event';
import BottomBar from './BottomBar';
import { Stack, Tabs, Tab, AppBar, Toolbar, Container } from '@mui/material';

const BOTTOMBAR_ITEMS = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];

const navigationItems = [
  { label: 'Orders', path: '/orders' },
  { label: 'Users', path: '/users' },
  { label: 'Products', path: '/products' },
  // Add more navigation items as needed
];

/**
 * Renders "Public Layout" composition
 * @component PublicLayout
 */
const PublicLayout = ({ children }) => {
  const onMobile = useOnMobile();
  const onSwitchDarkMode = useEventSwitchDarkMode();
  const [selectedTab, setSelectedTab] = useState(0);
  const [state] = useAppStore();
  const bottomBarVisible = onMobile || BOTTOMBAR_DESKTOP_VISIBLE;
  const navigate = useNavigate();
  // Also Update Tab Title

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    navigate(navigationItems[newValue].path); // Navigate to the selected tab's path
  };

  return (
    <Stack
      sx={{
        minHeight: '100vh',
        // remove padding here if it's causing the top space
      }}
    >
      <AppBar position="static">
        <Container maxWidth="lg">
          {' '}
          {/* Use this container to center the content and set max width */}
          <Toolbar disableGutters>
            {' '}
            {/* disableGutters removes the default padding */}
            <AppIconButton icon="logo" />
            Food delivery
            <Tabs value={selectedTab} onChange={handleTabChange} centered sx={{ flex: 1 }}>
              {navigationItems.map((item) => (
                <Tab key={item.path} label={item.label} onClick={() => navigate(item.path)} />
              ))}
            </Tabs>
            <AppIconButton
              icon="daynight"
              title={state.darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
              onClick={onSwitchDarkMode}
            />
          </Toolbar>
        </Container>
      </AppBar>

      {/* Wrap the main content in the same container to align with the AppBar */}
      <Container maxWidth="lg" sx={{ marginTop: '24px' }}>
        <Stack
          component="main"
          sx={{
            flexGrow: 1,
            padding: 1,
          }}
        >
          <ErrorBoundary name="Content">{children}</ErrorBoundary>
        </Stack>
      </Container>

      {/* If the bottom bar should also be within the same width, wrap it in a Container as well */}
      <Container maxWidth="lg">
        <Stack component="footer">{bottomBarVisible && <BottomBar items={BOTTOMBAR_ITEMS} />}</Stack>
      </Container>
    </Stack>
  );
};

export default PublicLayout;
