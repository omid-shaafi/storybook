import React, { useEffect, useState } from 'react';
import {
  StyledCircle,
  StyledInput,
  StyledMiniCircle,
  StyledRadioButtonTitle,
  StyledRadioButtonWrapper
} from './style';
import { RadioButtonType } from '../../Types';

const RadioGroup: React.FC<RadioButtonType> = ({
  options,
  onChange,
  layout,
  disabled,
  defaultCheckedRadio
}) => {
  const [checkedValue, setCheckedValue] = useState(defaultCheckedRadio);

  const toggleRadioHandler = (value: string | number | boolean) => {
    setCheckedValue(value);
    onChange(value);
  };

  return (
    <>
      {options.map((item) => (
        <StyledRadioButtonWrapper
          disabled={disabled}
          layout={layout}
          key={String(item.value)}>
          <StyledRadioButtonTitle disabled={disabled}>
            {item.label}
          </StyledRadioButtonTitle>
          <StyledCircle
            checked={checkedValue === item.value}
            disabled={disabled}
          />
          <StyledInput
            disabled={disabled}
            type={'radio'}
            checked={item.value === checkedValue}
            onChange={() => toggleRadioHandler(item.value)}
          />
        </StyledRadioButtonWrapper>
      ))}
    </>
  );
};

export default RadioGroup;
