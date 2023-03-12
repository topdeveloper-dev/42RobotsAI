import { useDispatch } from 'react-redux';
import  { useRoutes, useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { routes } from './router';
import useNetwork from './hooks/useNetwork';

function App() {

  const content = useRoutes(routes);
  const { isOnline: isNetwork } = useNetwork();

  if (!isNetwork) 
    return (
      <>
        <Result
          status = "404"
          title = " No Internet Connection"
          subTitle="Check your Internet Connection or your network."
          extra={
            <Button href="/" type="primary">
              Try Again
            </Button>
          }
        >
        </Result>
      </>
    );
    else {
      return (
        {content}
      );
    }
}

export default App;
