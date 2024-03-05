import React  from 'react';
import { StyledCircleToggle, StyledSwitchButton } from './style';
import Loading from '../Loading/Loading';

const Switch: React.FC<{
  disabled?: boolean;
  isLoading?: boolean;
  value?: boolean;
  onChange: (newValue: boolean) => void;
}> = ({ value, onChange, disabled, isLoading }) => {
  return (
    <StyledSwitchButton
      onClick={() => onChange(!value)}
      isChecked={value}
      disabled={disabled || isLoading}
      isLoading={isLoading}>
      <StyledCircleToggle
        isChecked={value}
        disabled={disabled}
        isLoading={isLoading}>
        {!disabled && isLoading && (
          <Loading color={value ? '#00ED26' : '#85A0BD'} />
        )}
      </StyledCircleToggle>
    </StyledSwitchButton>
  );
};

export default Switch;
