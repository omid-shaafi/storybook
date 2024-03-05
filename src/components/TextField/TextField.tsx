import React, { JSX, useRef, useState } from 'react';
import { StyledMainContainerForIconAndInput, StyledTextField } from './style';
import '../../assets/css/icomoon.css';
import { TextFieldType } from '../../Types';

const TextField: React.FC<TextFieldType> = ({
  status = 'default',
  placeholder,
  value,
  onChange,
  addOnBefore,
  addOnAfter,
  isLoading,
  disabled,
  type,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputContainerRef = useRef<HTMLInputElement | null>(null);

  const handleRef = () => {
    inputRef.current?.focus();
  };

  return (
    <StyledMainContainerForIconAndInput
      value={value}
      ref={inputContainerRef}
      status={status}
      disabled={disabled}
      onClick={handleRef}
      {...rest}>
      <>
        {addOnBefore}
        <StyledTextField
          ref={inputRef}
          status={status}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder ? placeholder : 'جانگهدار'}
          value={value}
          type={type || 'text'}
        />
        {addOnAfter}
      </>
    </StyledMainContainerForIconAndInput>
  );
};

export default TextField;
