import { Navigate, Route } from 'react-router-dom';

import Layout from './layout';
import { NotMatch } from './modules/not-match';
import { UserSettings } from './modules/user/settings';
import PRIVATE_PATHS from './paths.routes';

const PrivateModule = (
  <Route element={<Layout />}>
    <Route index element={<Navigate to={PRIVATE_PATHS.INITIAL} />} />
    <Route path={PRIVATE_PATHS.USER.SETTINGS} element={<UserSettings />} />
    <Route path={PRIVATE_PATHS.NOT_FOUND} element={<NotMatch />} />
  </Route>
);

export default PrivateModule;
