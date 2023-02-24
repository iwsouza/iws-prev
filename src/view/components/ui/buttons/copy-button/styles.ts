import styled, { css } from 'styled-components';

export const Wrapper = styled.button<{
  size?: 'sm' | 'md' | 'lg';
  anatomy?: 'contained' | 'outline' | 'text';
  rounded?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
  }

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `}
  ${({ size }) =>
    size
      ? css`
          ${size === 'sm' &&
          css`
            width: 20px;
            height: 20px;
            svg {
              font-size: 16px;
            }
          `};
          ${size === 'md' &&
          css`
            width: 28px;
            height: 28px;
            svg {
              font-size: 18px;
            }
          `};
          ${size === 'lg' &&
          css`
            width: 36px;
            height: 36px;
            svg {
              font-size: 24px;
            }
          `};
        `
      : css`
          width: 20px;
          height: 20px;
        `}

  ${({ anatomy, theme }) =>
    anatomy
      ? css`
          ${anatomy === 'contained' &&
          css`
            background: ${theme.colors.neutral.n400};
            border: 1px solid ${theme.colors.neutral.n400};
            color: ${theme.colors.shades.white};

            &:hover {
              background: transparent;
              border: 1px solid ${theme.colors.neutral.n400};
              color: ${theme.colors.neutral.n400};
            }
          `};
          ${anatomy === 'outline' &&
          css`
            background: transparent;
            border: 1px solid ${theme.colors.neutral.n400};
            color: ${theme.colors.neutral.n400};

            &:hover {
              background: ${theme.colors.neutral.n400};
              border: 1px solid ${theme.colors.neutral.n400};
              color: ${theme.colors.shades.white};
            }
          `};
          ${anatomy === 'text' &&
          css`
            background: transparent;
            border: 1px solid transparent;
            color: ${theme.colors.neutral.n400};

            &:hover {
              background: ${theme.colors.neutral.n400};
              border: 1px solid ${theme.colors.neutral.n400};
              color: ${theme.colors.shades.white};
            }
          `};
        `
      : css`
          background: ${theme.colors.neutral.n400};
          border: 1px solid ${theme.colors.neutral.n400};
          color: ${theme.colors.shades.white};
          width: 20px;
          height: 20px;
        `}
`;
