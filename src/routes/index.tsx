import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import PrivateModule from '../view/environments/private';
import PRIVATE_PATHS from '../view/environments/private/paths.routes';
import PublicModule from '../view/environments/public';
import PUBLIC_PATHS from '../view/environments/public/paths.routes';

const Routes = () => {
  const { logged } = useAuth();

  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          {PrivateModule}

          {PublicModule}

          <Route
            path="*"
            element={
              <Navigate
                to={logged ? PRIVATE_PATHS.NOT_FOUND : PUBLIC_PATHS.SIGN_IN}
              />
            }
          />
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
};

export default Routes;
