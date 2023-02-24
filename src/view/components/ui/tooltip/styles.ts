import styled from 'styled-components';
import { convertFont } from '../../../../utils';

export const TooltipStyled = styled.div`
  & .tooltip {
    z-index: 999;
  }
`;

export const Wrapper = styled.div`
  padding: 8px 15px;
  display: flex;
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  color: ${({ theme }) => theme.colors.shades.white};
  background-color: ${({ theme }) => theme.colors.shades.black};

  & > p {
    font-size: ${convertFont.toRem(14)};
  }
`;
