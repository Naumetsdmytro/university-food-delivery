import { Route, Routes } from 'react-router-dom';
import { AboutView, NotFoundView } from '../views';

/**
 * List of routes available only for authenticated users
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/about/*" element={<AboutView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default PrivateRoutes;
