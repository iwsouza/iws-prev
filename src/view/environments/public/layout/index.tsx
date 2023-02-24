import { Outlet, useNavigate } from 'react-router-dom';
import PUBLIC_PATHS from '../../public/paths.routes';

import * as S from './styles';

const Layout = () => {
  const navigate = useNavigate();
  /**
   * Ação para navegar p/outra página
   */
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <button onClick={() => handleNavigate(PUBLIC_PATHS.SIGN_IN)}>
            Login
          </button>
        </S.Header>
      </S.Container>
      <Outlet />
    </S.Wrapper>
  );
};

export default Layout;
