import React, { JSX, useState } from 'react';
import { StyledPasswordField } from './PassFieldStyle';
import Icon from '../Common/Icon/Icon';
import { TextFieldType } from '../../Types';

const PasswordField: React.FC<TextFieldType> = ({
  status = 'default',
  value,
  onChange,
  disabled,
  addOnBefore,
  addOnAfter,
  placeholder
}) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <StyledPasswordField
      placeholder={placeholder || 'رمزعبور'}
      addOnBefore={addOnBefore || <Icon name="password_locked" />}
      addOnAfter={
        !disabled && addOnAfter ? (
          addOnAfter
        ) : (
          <Icon
            name={isShowPass ? 'view_on' : 'view_off'}
            color={isShowPass ? 'active' : 'minorText'}
            fontSize="22px"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowPass(!isShowPass);
            }}
          />
        )
      }
      value={value}
      onChange={onChange}
      disabled={disabled}
      status={status}
      type={isShowPass ? 'text' : 'password'}
    />
  );
};

export default PasswordField;
