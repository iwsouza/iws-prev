import { useCallback, useRef, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/auth';
import { useLocationState } from '../../../../hooks/location-state';
import PUBLIC_PATHS from '../../public/paths.routes';

import * as S from './styles';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocationState();
  const { logged, signOut } = useAuth();
  const headerRef = useRef<HTMLHeadElement>(null);
  const [loading, setLoading] = useState(false);

  const handelSignOut = useCallback(async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      signOut();

      navigate(PUBLIC_PATHS.SIGN_IN);
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }, [navigate, signOut]);

  if (!logged) {
    return (
      <Navigate to={PUBLIC_PATHS.SIGN_IN} state={{ from: location }} replace />
    );
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header ref={headerRef}>
          <button onClick={() => handelSignOut()}>Sair</button>
        </S.Header>
      </S.Container>
      <Outlet />
    </S.Wrapper>
  );
};

export default Layout;
