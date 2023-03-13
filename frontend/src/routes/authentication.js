import { lazy } from 'react';

// project imports
import Loadable from '../components/Loadable';
import MinimalLayout from '../components/layout/MainLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('../pages/pages/authentication/authentication3/Login')));
const AuthRegister = Loadable(lazy(() => import('../pages/pages/authentication/authentication3/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/login/login3',
            element: <AuthLogin />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister />
        }
    ]
};

export default AuthenticationRoutes;
