import styled from 'styled-components';

export const Wrapper = styled.div`
  gap: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > img {
    width: auto;
    height: auto;
    max-width: 300px;
  }

  & > h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.dark.d100};
  }
`;
