import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './';
import AuthenticationRoutes from './authentication.js/index.js';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes]);
}
