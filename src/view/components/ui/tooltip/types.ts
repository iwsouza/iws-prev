import { HoverCardContentProps } from '@radix-ui/react-hover-card';
import { ReactNode } from 'react';

export type Props = {
  trigger: ReactNode;
  className?: string;
  offsetArrow?: number;
  useDefaultContent?: boolean;
} & HoverCardContentProps;
