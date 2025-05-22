import { lazy, type FC, type JSX, type LazyExoticComponent } from 'react';
import AuthLayout from '@/layout/AuthLayout';
// import DashboardLayout from '../layouts/DashboardLayout';
// import ErrorLayout from '../layouts/ErrorLayout';
// import ProtectedRoute from './ProtectedRoute';

// Lazy-loaded pages
const LoginForm = lazy(() => import('@/form/LoginForm'));
const RegisterForm = lazy(() => import('@/form/RegisterForm'));
const DashboardLayout = lazy(() => import('@/layout/DashboardLayout'));


const Home = () => {
  return <div>Home</div>;

}

type RouteChild = {
  path: string;
  element: JSX.Element;
  allowedRoles?: string[];
};

export type RouteConfig = {
  layout: FC<{}> | LazyExoticComponent<() => JSX.Element>;
  guard?: FC<{ children: React.ReactNode }>;
  children: RouteChild[];
};

export const routes: RouteConfig[] = [
  {
    layout: AuthLayout,
    children: [
      { path: '/login', element: <LoginForm />, allowedRoles: [] },
      { path: '/register', element: <RegisterForm />, allowedRoles: [] }

    ],
  },
  {
    layout: DashboardLayout,
    // guard: ProtectedRoute,
    children: [
      { path: '/dashboard', element: <Home />, allowedRoles: [] },
      // { path: '/dashboard/profile', element: <Profile /> },
      // {
      //   path: '/dashboard/admin',
      //   element: <AdminPanel />,
      //   allowedRoles: ['admin'],
      // },
    ],
  },
  //   {
  //     layout: ErrorLayout,
  //     children: [
  //       { path: '/unauthorized', element: <Unauthorized /> },
  //       { path: '*', element: <NotFound /> },
  //     ],
  //   },
];
