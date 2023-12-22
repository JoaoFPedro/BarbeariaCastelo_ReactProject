import { useEffect, type ReactElement } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter } from 'react-router-dom';
import './config/axios';
import Router from './config/router';
import useLogin from './shared/hooks/useLogin';

function App(): ReactElement {
  const { refreshLogin } = useLogin();

  useEffect(() => {
    refreshLogin();
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
