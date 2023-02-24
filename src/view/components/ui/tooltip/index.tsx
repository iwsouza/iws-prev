import { Arrow, Content, Root, Trigger } from '@radix-ui/react-hover-card';
import React from 'react';

import { TooltipStyled, Wrapper } from './styles';
import { Props } from './types';

export const Tooltip = ({
  trigger,
  children,
  offsetArrow,
  useDefaultContent = true,
  ...rest
}: Props) => {
  return (
    <TooltipStyled>
      <Root openDelay={2} closeDelay={0}>
        <Trigger asChild>{trigger}</Trigger>
        <Content {...rest} side="top" className="tooltip">
          {useDefaultContent ? <Wrapper>{children}</Wrapper> : <>{children}</>}
          <Arrow offset={offsetArrow} />
        </Content>
      </Root>
    </TooltipStyled>
  );
};
