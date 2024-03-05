import styled from 'styled-components';
import TextField from '../TextField/TextField';

export const StyledPasswordField = styled(TextField)`
  &:focus-within {
    box-shadow: 0 0 10px 0 ${({ status, disabled }): string =>
      disabled
        ? 'none'
        : status === 'success'
        ? 'rgba(0, 237, 38, 0.40)'
        : status === 'error'
        ? 'rgba(255, 111, 80, 0.40)'
        : 'rgba(0, 193, 255, 0.40)'};
  }
}
`;
