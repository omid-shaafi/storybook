import styled from 'styled-components';

export const ButtonContainer = styled.button<{ buttonType: string, isLoading?: boolean, disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  border: none;
  padding: 10px 16px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 12px;
  background-color: ${({
                         isLoading,
                         buttonType,
                         disabled
                         }): string => (isLoading || disabled) ? 
                         (buttonType === 'primary' ? '#D9D9D9' : 'transparent') :
                         (buttonType === 'primary' ? '#BEFF00' : 'transparent')};
  cursor: ${({disabled}):string => disabled ? 'not-allowed' : 'pointer' } ;

  color: ${({ buttonType, isLoading, disabled }): string =>
          (buttonType === 'primary' && (disabled || isLoading)) ? '#FFFF' :
          (buttonType === 'primary') ? '#3D5977' :
          (buttonType === 'text' && (disabled || isLoading)) ? '#D9D9D9' : '#00C1FF'
  };

 
  
  font-size: 14px;
  font-family: IRANSans;


  &:hover {
    background-color: ${({ buttonType, isLoading, disabled }): string =>
            (buttonType === 'primary' && (isLoading || disabled)) ? '#D9D9D9' :
            (buttonType === 'text' && (isLoading || disabled)) ? 'transparent' :
            buttonType === 'primary' ? '#B4EB00' : 'transparent'};

    color: ${({ buttonType, isLoading, disabled }): string =>
            (buttonType === 'primary' && (isLoading || disabled)) ? '#FFF' :
            (buttonType === 'text' && (isLoading || disabled)) ? '#D9D9D9' :
            (buttonType === 'primary') ? '#3D5977' : '#0085DB'}
  }

  &:active {
    background-color: ${({ buttonType, isLoading, disabled }): string =>
            (buttonType === 'primary' && (isLoading || disabled)) ? '#D9D9D9' :
            (buttonType === 'text' && (isLoading || disabled)) ? 'transparent' :
             buttonType === 'primary' ? '#A5D400' : 'transparent'
    };
    color: ${({ buttonType, isLoading, disabled }): string =>
            (buttonType === 'text' && (isLoading || disabled)) ? '#D9D9D9' :
            (buttonType === 'primary' && (isLoading || disabled)) ? '#FFF' :
            (buttonType === 'text') ? '#0053A4' : '#3D5977'
    }
`;
