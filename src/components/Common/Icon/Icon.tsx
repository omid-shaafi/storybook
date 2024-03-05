import React from 'react';
import {
  SpaceProps,
  TypographyProps,
  PositionProps,
  LayoutProps,
  BorderProps,
  ColorProps
} from 'styled-system';
import { StyledIcon } from './Style';

export type IconType = SpaceProps &
  TypographyProps &
  PositionProps &
  LayoutProps &
  BorderProps &
  ColorProps & {
    name?: string;
    loading?: boolean;
    disabled?: boolean;
    color?: string;
    onClick?: (e?: any) => void;
  };

const Icon: React.FC<IconType> = ({ name, ...rest }) => {
  return <StyledIcon className={`icon-${name}`} {...rest} />;
};

export default Icon;
