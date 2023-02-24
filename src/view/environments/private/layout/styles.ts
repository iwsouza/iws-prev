import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: max(100%, 1440px);
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;

  background: ${({ theme }) => theme.colors.shades.white};
`;
