import styled from 'styled-components';

export const StyledCircle = styled.span<{
  checked?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background-color: #ffff;
  border-color: ${({ checked, disabled }): string =>
    checked && !disabled ? '#3D5977' : disabled ? '#D9D9D9' : '#85A0BD'};
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  transition: all 0.5s;
  &:after {
    position: absolute;
    border-radius: 100%;
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${({ checked, disabled }): string =>
      !disabled && checked
        ? '#00ED26'
        : disabled && checked
        ? '#D9D9D9'
        : 'transparent'};
    transition: all 0.2s;
  }
`;

export const StyledInput = styled.input`
  position: relative;
  cursor: pointer;
  opacity: 0;
`;

export const StyledRadioButtonTitle = styled.span<{ disabled?: boolean }>`
  padding-inline-start: 8px;
  padding-inline-end: 8px;
  text-align: right;
  color: ${({ disabled }): string => (disabled ? '#D9D9D9' : '#3d5977')};
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledRadioButtonWrapper = styled.label<{
  checked?: boolean;
  layout: string;
  disabled?: boolean;
}>`
  display: ${({ layout }): string =>
    layout === 'horizontal' ? 'inline-flex' : 'flex'};
  &:hover {
    ${StyledCircle} {
      border-color: ${({ checked, disabled }): string =>
        disabled ? '#D9D9D9' : !checked ? '#00DB1D' : '#3D5977'};
    }
    cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')}
  };

}
`;

export const StyledMiniCircle = styled.span<{
  checked?: boolean;
  disabled?: boolean;
}>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ checked, disabled }): string =>
    !disabled && checked
      ? '#00ED26'
      : disabled && checked
      ? '#D9D9D9'
      : 'transparent'};
  display: flex;
`;
