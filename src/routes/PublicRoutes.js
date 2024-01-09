import { Route, Routes } from 'react-router-dom';
import SignupView from '../views/Auth/Signup/Signup';
import { AboutView, NotFoundView, UsersView, ProductsView, HomeView } from '../views';
import LoginEmailView from '../views/Auth/Login/Email';

/**
 * List of routes available only for anonymous users
 * @component PublicRoutes
 */
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="auth/login" element={<LoginEmailView />} />
      <Route path="auth/signup" element={<SignupView />} />
      <Route path="about" element={<AboutView />} />
      <Route path="users" element={<UsersView />} />
      <Route path="products" element={<ProductsView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default PublicRoutes;
