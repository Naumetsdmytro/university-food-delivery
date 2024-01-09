import React from 'react';
import { withSuspense } from '../components';
import NotFoundView from './NotFoundView';

const AboutView = withSuspense(React.lazy(() => import('./About')));
const HomeView = withSuspense(React.lazy(() => import('./Home')));
const UsersView = withSuspense(React.lazy(() => import('./UsersList')));
const ProductsView = withSuspense(React.lazy(() => import('./ProductsList')));

export { NotFoundView, AboutView, UsersView, ProductsView, HomeView };
