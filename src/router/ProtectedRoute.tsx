import { Navigate, Outlet } from 'react-router-dom';
import { tokenStorage } from '@/utils/storage';
import { ROUTES } from '@/constants/routes';

export const ProtectedRoute = () =>
  tokenStorage.getAccess() ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
