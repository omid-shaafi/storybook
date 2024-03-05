import styled from 'styled-components';

export const StyledCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledTitle = styled.label<{ disabled?: boolean }>`
  font-family: IRANSans;
  font-size: 12px;
  color: ${({ disabled }): string => (disabled ? '#D9D9D9' : '#3d5977')};
  font-weight: 500;
  margin-right: 14px;
  cursor: pointer;
`;

export const StyledCheckBox = styled.div<{
  checked?: boolean;
  disabled?: boolean;
  isIndeterminate?: boolean;
}>`
  width: 18px;
  height: 18px;
  border: 2px solid;
  transition: border 0.2s;
  cursor: pointer;
  border-color: ${({ checked, disabled, isIndeterminate }): string =>
    isIndeterminate && !disabled
      ? '#A5BCD5'
      : disabled && !checked
      ? '#D9D9D9'
      : checked
      ? 'transparent'
      : '#A5BCD5'};
  border-radius: 6px;
  background-color: ${({ checked, disabled }): string =>
    disabled && checked ? '#D9D9D9' : checked ? '#00ed26' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ checked, disabled }): string =>
      disabled && checked ? '#D9D9D9' : checked ? '#00DB1D' : 'transparent'};
    border-color: ${({ checked, disabled, isIndeterminate }): string =>
      !disabled && isIndeterminate && checked
        ? '#00DB1D'
        : disabled && !checked
        ? '#D9D9D9'
        : checked
        ? 'transparent'
        : '#00ED26'};
  }
`;
export const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const StyledCheck = styled.span`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
