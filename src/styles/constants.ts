import { css, keyframes } from 'styled-components';

export const skeletonShine = keyframes`
to {
  background-position-x: -200%;
}
`;

export const shakeAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 500px;
    background: transparent;
  }
`;

export const variedMargin = css`
  &.mg-left {
    margin-left: 24px;

    &.s-16 {
      margin-left: 16px;
    }

    &.s-8 {
      margin-left: 8px;
    }
  }

  &.mg-right {
    margin-right: 24px;

    &.s-16 {
      margin-right: 16px;
    }

    &.s-8 {
      margin-right: 8px;
    }
  }

  &.mg-top {
    margin-top: 24px;

    &.s-16 {
      margin-top: 16px;
    }

    &.s-8 {
      margin-top: 8px;
    }
  }

  &.mg-bottom {
    margin-bottom: 24px;

    &.s-16 {
      margin-bottom: 16px;
    }

    &.s-8 {
      margin-bottom: 8px;
    }
  }

  &.mg-vertical {
    margin: 24px 0;

    &.s-16 {
      margin: 16px 0;
    }

    &.s-8 {
      margin: 8px 0;
    }
  }

  &.mg-horizontal {
    margin: 0 24px;

    &.s-16 {
      margin: 0 16px;
    }

    &.s-8 {
      margin: 0 8px;
    }
  }

  &.mg-all {
    margin: 24px;

    &.s-16 {
      margin: 16px;
    }

    &.s-8 {
      margin: 8px;
    }
  }
`;

export const animation = (
  from: 'left' | 'right' | 'top' | 'bottom' | 'opacity' | 'rotate',
  duration = 1,
) => {
  const typesFrom = {
    left: keyframes`
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
    right: keyframes`
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
    top: keyframes`
      from {
        opacity: 0;
        transform: translateY(-50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    bottom: keyframes`
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    opacity: keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `,
    rotate: keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `,
  };

  return css`
    animation: ${typesFrom[from]} ${duration}s;
  `;
};

const loading = (from: string, to: string) => keyframes`
  from {
    background-color: ${from};
  }

  to {
    background-color: ${to};
  }
`;

export const skeleton = css`
  opacity: 0.7;
  animation: ${({ theme }) =>
      loading(theme.colors.neutral.n200, theme.colors.neutral.n100)}
    1s linear infinite alternate;
`;
