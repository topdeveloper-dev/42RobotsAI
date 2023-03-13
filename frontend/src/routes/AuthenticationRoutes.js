import { lazy } from 'react';

// project imports
import Loadable from '../components/Loadable';
import MinimalLayout from '../components/layout/MainLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('../pages/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('../pages/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        }
    ]
};

export default AuthenticationRoutes;
