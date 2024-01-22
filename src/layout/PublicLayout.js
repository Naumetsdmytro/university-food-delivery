import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '../components';
import CartModal from '../views/components/CartModal';
import { useEventSwitchDarkMode } from '../hooks/event';
import { useGlobalContext } from '../context';
import { Stack, Tabs, Tab, AppBar, Toolbar, Container, Button } from '@mui/material';
import logo from '../images/logo.svg';
import sun from '../images/sunny.png';
import cart from '../images/trolley.png';

const PublicLayout = ({ children }) => {
  const onSwitchDarkMode = useEventSwitchDarkMode();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCourierFields, setShowCourierFields] = useState(false);
  const {
    userData: { role },
  } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIndex = navigationItems.findIndex((item) => item.path === location.pathname);

    if (currentIndex !== -1) {
      setSelectedTab(currentIndex);
    }
  }, [location.pathname]);

  const navigationItems = useMemo(() => {
    const items = [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
    ];

    if (role === 'admin') {
      items.push({ label: 'Users', path: '/users' });
    }

    if (role && role !== 'user') {
      items.push({ label: 'Orders', path: '/orders' });
    }

    if (role) {
      items.push({ label: 'Products', path: '/products' });
    }

    items.push({ label: 'Sign In', path: '/auth/login' }, { label: 'Sign Up', path: '/auth/signup' });

    return items;
  }, [role]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    navigate(navigationItems[newValue].path);
  };

  const handleModalOpen = () => {
    setIsModalOpen((oldValue) => {
      return !oldValue;
    });
  };

  return (
    <Stack
      sx={{
        minHeight: '100vh',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src={logo} alt="logo" width="25px" height="25px" />
            Japan Symphony
            <Tabs value={selectedTab} onChange={handleTabChange} centered sx={{ flex: 1 }}>
              {navigationItems.map((item) => (
                <Tab key={item.path} label={item.label.toUpperCase()} onClick={() => navigate(item.path)} />
              ))}
            </Tabs>
            <Button onClick={handleModalOpen} color="inherit">
              <img alt="cart" src={cart} width="25px" height="25px" />
            </Button>
            {isModalOpen && <CartModal isModalOpen={isModalOpen} onClose={handleModalOpen} />}
            <img src={sun} onClick={onSwitchDarkMode} alt="switchTheme" width="25px" height="25px" />
          </Toolbar>
        </Container>
      </AppBar>
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
    </Stack>
  );
};

export default PublicLayout;
