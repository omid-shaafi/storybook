import styled from 'styled-components';

export const StyledSwitchButton = styled.button<{
  isChecked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}>`
  margin: 0;
  padding: 0;
  font-size: 14px;
  position: relative;
  width: 38px;
  height: 22px;
  vertical-align: middle;
  border: 0;
  border-radius: 100px;
  outline: none;

  opacity: ${({ isLoading, disabled }): string =>
    isLoading || disabled ? '45%' : '100%'};

  transition: background-color 0.3s ease-in-out;
  cursor: ${({ isLoading, disabled }): string =>
    !isLoading && !disabled ? 'pointer' : 'not-allowed'};
  background-color: ${({ theme, isChecked }): string =>
    isChecked ? '#00ED26' : '#85A0BD'};
  &:active {
    background-color: ${({ isChecked }) =>
      isChecked ? '#00ED26 !important' : '#85A0BD !important'};
    div {
      &:before {
        inset-inline-end: ${({ isChecked, disabled }) =>
          !disabled && isChecked ? '0' : '-30%'};
        inset-inline-start: ${({ isChecked }) => (isChecked ? '-30%' : '0')};
      }
    }
  }
  &:disabled {
    div {
      &:before {
        inset-inline-end: 0;
        inset-inline-start: 0;
      }
    }
  }
  &:hover {
    background-color: ${({ theme, isChecked, isLoading, disabled }): string =>
      isChecked
        ? '#00DB1D'
        : (disabled || isLoading) && isChecked
        ? '#00ED26'
        : (disabled || isLoading) && !isChecked
        ? '#85A0BD'
        : '#3D5977'};
  }
`;
export const StyledCircleToggle = styled.div<{
  isChecked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}>`
  filter: drop-shadow(0px 0px 2px rgba(61, 89, 119, 0.15));
  position: absolute;
  top: 2px;
  inset-inline-start: ${({ isChecked }) =>
    isChecked ? 'calc(100% - 20px)' : '2px'};
  width: 18px;
  height: 18px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    inset-inline-end: 0;
    inset-inline-start: 0;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }
`;
