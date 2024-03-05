import React, { JSX, useState } from 'react';
import { StyledSearchBox } from './SearchBoxStyle';
import Icon from '../Common/Icon/Icon';
import Loading from '../Loading/Loading';
import { TextFieldType } from '../../Types';

const SearchBox: React.FC<TextFieldType> = ({
  placeholder,
  value,
  onChange,
  addOnBefore,
  addOnAfter,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <StyledSearchBox
      placeholder={placeholder || 'جستجو'}
      disabled={disabled}
      addOnBefore={
        !disabled && isLoading ? (
          <Loading color={disabled? '#d9d9d9': '#00C1FF'} />
        ) : (
          addOnBefore || <Icon name={'search'} />
        )
      }
      addOnAfter={
        addOnAfter ||
        (value?.length && !disabled ? (
          <Icon color="#A5BCD5"  name={'close'} onClick={() => onChange && onChange('')} />
        ) : null)
      }
      {...rest}
      value={value}
      onChange={onChange}
    />
  );
};
export default SearchBox;
