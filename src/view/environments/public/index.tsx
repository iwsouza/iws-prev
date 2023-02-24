import { Navigate, Route } from 'react-router-dom';

import Layout from './layout';
import PUBLIC_PATHS from './paths.routes';

const PublicModule = (
  <Route element={<Layout />}>
    <Route index element={<Navigate to={PUBLIC_PATHS.HOME} />} />
  </Route>
);

export default PublicModule;
