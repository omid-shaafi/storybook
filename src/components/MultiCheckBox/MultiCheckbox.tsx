import React, { useState } from 'react';
import { MultiCheckboxType } from '../../Types';
import CheckBox from '../CheckBox/checkbox';

const MultiCheckbox: React.FC<MultiCheckboxType> = ({
  options,
  defaultCheckedList,
  onChange
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] =
    useState(defaultCheckedList);
  const [selectedAllCheckboxes, setSelectedAllCheckboxes] = useState(false);

  const toggleSingleCheckbox = (value: string | number | boolean) => {
    setSelectedCheckboxes((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
    onChange(selectedCheckboxes);
  };

  const toggleAllCheckboxes = () => {
    setSelectedAllCheckboxes((prevState) => !prevState);
    selectedAllCheckboxes
      ? setSelectedCheckboxes([])
      : setSelectedCheckboxes(options.map((item) => item.value));
    onChange(selectedCheckboxes);
  };

  return (
    <>
      <CheckBox
        onChange={() => toggleAllCheckboxes()}
        label={'checkAll'}
        checked={selectedCheckboxes.length === options.length}
        isIndeterminate={
          selectedCheckboxes.length !== options.length &&
          selectedCheckboxes.length > 0
        }
      />
      {options.map((checkbox) => (
        <CheckBox
          key={checkbox.label}
          onChange={() => toggleSingleCheckbox(checkbox.value)}
          label={checkbox.label}
          checked={selectedCheckboxes.includes(checkbox.value)}
        />
      ))}
    </>
  );
};

export default MultiCheckbox;
