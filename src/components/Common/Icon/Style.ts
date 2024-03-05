import styled from 'styled-components';
import { color, ColorProps, typography } from 'styled-system';
import { IconType } from './Icon';
import { colorPallet } from '../../../Theme/ColorPallets';

export const StyledIcon = styled.i<IconType & ColorProps>`
  ${color};
  ${typography}
  ::before {
    ${color};
  }
`;
