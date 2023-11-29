import React from 'react';
/**
 * Note: Don't import/export all Views directly, use lazy loading!
 */
import { withSuspense } from '../components';
import NotFoundView from './NotFoundView';
import NotImplementedView from './NotImplementedView';

/**
 * Views/Pages with Lazy Loading
 */
const WelcomeView = withSuspense(React.lazy(() => import('./Welcome')));
const AboutView = withSuspense(React.lazy(() => import('./About')));
const UsersView = withSuspense(React.lazy(() => import('./UsersList')));
const ToolsView = () => <NotImplementedView name="Tools" />; // Sample of non-implemented View // Sample of non-implemented View

export { NotFoundView, AboutView, WelcomeView, UsersView, ToolsView };
