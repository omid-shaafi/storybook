import React from 'react';
import {
  StyledCheckBox,
  StyledInput,
  StyledCheckBoxWrapper,
  StyledTitle,
  StyledCheck
} from './style';
import { CheckboxType } from '../../Types';
import Icon from '../Common/Icon/Icon';
import '../../assets/css/icomoon.css';
// should be removed after icon pack providing
import Rect from './Rectangle 133.svg';

const CheckBox: React.FC<CheckboxType> = ({
  onChange,
  label,
  disabled,
  checked,
  isIndeterminate
}) => {
  return (
    <StyledCheckBoxWrapper>
      <StyledTitle htmlFor={label} disabled={disabled}>
        {label}
      </StyledTitle>
      <StyledCheckBox
        isIndeterminate={isIndeterminate}
        checked={checked}
        disabled={disabled}>
        <StyledInput
          type={'checkbox'}
          id={label}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <StyledCheck>
          {isIndeterminate && <img src={Rect} />}
          {checked && <Icon name="checkbox" color="white" fontSize="23px" />}
        </StyledCheck>
      </StyledCheckBox>
    </StyledCheckBoxWrapper>
  );
};

export default CheckBox;
