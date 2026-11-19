import { lazy, Suspense, type ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '@/components/layout';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from '@/constants/routes';

const Login = lazy(() => import('@/pages/Login/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

const withSuspense = (node: ReactNode) => <Suspense fallback={null}>{node}</Suspense>;

export const router = createBrowserRouter([
  { path: ROUTES.LOGIN, element: withSuspense(<Login />) },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [{ path: ROUTES.DASHBOARD, element: withSuspense(<Dashboard />) }],
      },
    ],
  },
  { path: ROUTES.NOT_FOUND, element: withSuspense(<NotFound />) },
]);
