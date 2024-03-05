import styled from 'styled-components';
import TextField from '../TextField/TextField';
import { StyledIcon } from '../Common/Icon/Style';

export const StyledSearchBox = styled(TextField)`
  border-radius: 40px;

  &:focus-within {
    ${StyledIcon} {
      color: #00c1ff;
    }
  }
`;
