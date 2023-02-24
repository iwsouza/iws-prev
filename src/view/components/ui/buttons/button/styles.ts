import styled, { css } from 'styled-components';

import { Props } from '.';
import { shakeAnimation } from '../../../../../styles/constants';
import { convertFont } from '../../../../../utils';

export const Wrapper = styled.button<{
  height: number;
  outline?: boolean;
  color: Props['color'];
  disabled: boolean;
  rounded?: boolean;
  vibrate?: boolean;
  size: Props['size'];
}>`
  position: relative;
  height: ${({ height }) => height}px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  gap: 6px;

  & > span {
    position: absolute;
    width: 22px;
    height: 22px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;

    right: -7px;
    top: -11px;
  }

  ${({ rounded }) =>
    rounded &&
    css`
      width: 36px;
      border-radius: 50%;
      padding: 0;
      i {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 26px;
        height: 26px;

        border: 1px dashed ${({ theme }) => theme.colors.shades.white};
        border-radius: 50%;
      }
    `}

  ${({ vibrate }) =>
    vibrate &&
    css`
      animation: ${shakeAnimation} 2.32s ease 7;
    `}

  ${({ theme, outline, color }) =>
    outline
      ? css`
          background: transparent;
          color: ${theme.colors.primary.p900};
          border: 1px solid ${theme.colors.primary.p900};
          svg {
            color: ${theme.colors.primary.p900};
          }
          &:hover {
            background: ${theme.colors.primary.p900};
            &,
            svg {
              color: ${theme.colors.shades.white};
            }
          }

          ${color === 'primary' &&
          css`
            color: ${theme.colors.primary.p900};
            border: 1px solid ${theme.colors.primary.p900};
            &:hover {
              background: ${theme.colors.primary.p900};
            }
            svg {
              color: ${theme.colors.primary.p900};
            }
          `};
          ${color === 'error' &&
          css`
            color: ${theme.colors.red.r800};
            border: 1px solid ${theme.colors.red.r800};
            &:hover {
              background: ${theme.colors.red.r800};
            }
            svg {
              color: ${theme.colors.red.r800};
            }
          `};
          ${color === 'delete' &&
          css`
            color: ${theme.colors.red.r800};
            border: 1px solid ${theme.colors.red.r800};
            &:hover {
              background: ${theme.colors.red.r800};
            }
            svg {
              color: ${theme.colors.red.r800};
            }
          `};
          ${color === 'warning' &&
          css`
            color: ${theme.colors.warning.w800};
            border: 1px solid ${theme.colors.warning.w800};
            &:hover {
              background: ${theme.colors.warning.w800};
            }
            svg {
              color: ${theme.colors.warning.w800};
            }
          `};
          ${color === 'success' &&
          css`
            color: ${theme.colors.green.g700};
            border: 1px solid ${theme.colors.green.g700};
            &:hover {
              background: ${theme.colors.green.g700};
            }
            svg {
              color: ${theme.colors.green.g700};
            }
          `};
          ${color === 'loading' &&
          css`
            color: ${theme.colors.primary.p900};
            border: 1px solid ${theme.colors.primary.p900};
            &:hover {
              background: ${theme.colors.primary.p900};
            }
            svg {
              color: ${theme.colors.primary.p900};
            }
          `};
          ${color === 'white' &&
          css`
            color: ${theme.colors.shades.white};
            border: 1px solid ${theme.colors.shades.white};
            &:hover {
              background: ${theme.colors.shades.white};
              svg {
                color: ${theme.colors.neutral.n600};
              }
            }
            svg {
              color: ${theme.colors.shades.white};
            }
          `};
        `
      : css`
          color: ${theme.colors.shades.white};
          &:hover {
            box-shadow: 0 0 20px rgb(0 0 0 / 30%);
          }
          svg {
            color: ${theme.colors.shades.white};
            font-size: ${convertFont.toRem(14)};
          }
          ${color === 'primary' &&
          css`
            background: ${theme.colors.primary.p900};
            border: 1px solid ${theme.colors.primary.p900};
          `};
          ${color === 'error' &&
          css`
            background: ${theme.colors.red.r800};
            border: 1px solid ${theme.colors.red.r800};
          `};
          ${color === 'delete' &&
          css`
            background: ${theme.colors.red.r800};
            border: 1px solid ${theme.colors.red.r800};
          `};
          ${color === 'warning' &&
          css`
            background: ${theme.colors.warning.w800};
            border: 1px solid ${theme.colors.warning.w800};
          `};
          ${color === 'success' &&
          css`
            background: ${theme.colors.green.g700};
            border: 1px solid ${theme.colors.green.g700};
          `};
          ${color === 'loading' &&
          css`
            background: ${theme.colors.primary.p900};
            border: 1px solid ${theme.colors.primary.p900};
          `};
        `}
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ size }) =>
    size &&
    css`
      ${size === 'xs' &&
      css`
        &,
        svg {
          font-size: ${convertFont.toRem(14)};
        }
      `}
      ${size === 'sm' &&
      css`
        &,
        svg {
          font-size: 1rem;
        }
      `}
          ${size === 'md' &&
      css`
        &,
        svg {
          font-size: 1.125rem;
        }
      `}
          ${size === 'lg' &&
      css`
        &,
        svg {
          font-size: 1.25rem;
        }
      `}
          ${size === 'xl' &&
      css`
        &,
        svg {
          font-size: 1.375rem;
        }
      `}
    `}
`;
