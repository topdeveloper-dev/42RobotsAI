import { lazy } from 'react';

// project imports
import MainLayout from '../components/layout/MainLayout';
import Loadable from '../components/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../pages/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../pages/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../pages/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../pages/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../pages/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
