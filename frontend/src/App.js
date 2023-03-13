import { useSelector } from 'react-redux';
import { useRoutes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { routes } from './routes/index.js';
import themes from 'themes';
import NavigationScroll from './components/layout/NavigationScroll';
import useNetwork from 'common/hooks/useNetwork/index.js';

const App = () => {

  // Check Network
  const { isOnline: isNetwork } = useNetwork();

  const customization = useSelector((state) => state.customization);
  const content = useRoutes(routes);

  if (!isNetwork)
    return (
      console.log('Check your Internet Connection or your network.')
    );
    else {
      return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    {content}
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
      )
    }
};

export default App;
