import styled from 'styled-components';

export const StyledMainContainerForIconAndInput = styled.div<{
  status?: string;
  disabled?: boolean;
  value?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  border-radius: 12px;
  padding: 14px;
  transition: all 0.3s ease;
  cursor: ${({disabled}):string=>disabled?'not-allowed':'pointer'};
  background-color: ${({ disabled }): string =>
    disabled ? '#F3F3F3' : '#FFF'};
  border: 1px solid
    ${({ status, disabled, theme }): string =>
      disabled
        ? '#d9d9d9'
        : status === 'success'
        ? '#00ED26'
        : status === 'error'
        ? '#FF6F50'
        : '#D9D9D9'};

  &:focus-within {
    border-color: ${({ status, disabled }): string =>
    !disabled && status !== 'success' && status !== 'error' && !disabled ? '#00C1FF' : ''};
    

    box-shadow: 0 0 10px 0
      ${({ status, disabled }): string =>
        disabled
          ? 'none'
          : status === 'success'
          ? 'rgba(0, 237, 38, 0.40)'
          : status === 'error'
          ? 'rgba(255, 111, 80, 0.40)'
          : 'rgba(0, 193, 255, 0.40)'};
    i:nth-of-type(2) {
      color: #85A0BD;
    }
  }

  i:first-of-type {
    color: ${({ disabled, status }): string =>
      disabled
        ? '#d9d9d9'
        : status === 'success'
        ? '#00ED26'
        : status === 'error'
        ? '#FF6F50'
        : '#85A0BD'};
  }
  i:nth-of-type(2) {
    color: #85A0BD;
  }
}

&:hover {
  border-color: ${({ status, disabled }): string =>
      disabled  ? '#d9d9d9' 
          : status === 'default' ? '#00c1ff' 
          :status === 'error'
          ? '#FF6F50'
          : status === 'success'
              ? '#00ED26'
              : ''};

  
`;

export const StyledTextField = styled.input<{
  status?: string;
  disabled?: boolean;
}>`
  border-radius: 12px;
  width: 100%;
  border: none;
  font-size: 14px;
  font-family: IRANSans;
  font-weight: 500;
  direction: rtl;
  padding: 0 8px;
  cursor: ${({disabled}):string=>disabled?'not-allowed':'pointer'};
  background-color: ${({ disabled }): string =>
    disabled ? '#F3F3F3' : '#FFF'};
  color: ${({ disabled, theme }): string =>
    disabled ? '#D9D9D9' : '#3D5977'};
  outline: none;
  &::placeholder {
    color: #d9d9d9;
  }
`;
