import React, { JSX } from 'react';

export type TextFieldType = {
  status?: 'success' | 'error' | 'default' | string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  addOnBefore?: string | JSX.Element;
  addOnAfter?: string | JSX.Element | null;
  ViewIcon?: string;
  isLoading?: boolean;
  type?: 'simple' | string;
  checked?: boolean;
};

export type CheckboxType = {
  onChange: (value?: boolean) => void;
  label: string;
  disabled?: boolean;
  checked?: boolean;
  isIndeterminate?: boolean;
  value?: string[];
};

export type OptionType = {
  label: string;
  value: string | number | boolean;
  checked?: boolean;
};

export type MultiCheckboxType = {
  options: OptionType[];
  defaultCheckedList?: (string | number | boolean)[];
  onChange?: (value?: any) => void;
  disabled?: boolean;
};

export type RadioButtonType = {
  options?: { label: string | number; value: string | number | boolean }[];
  defaultCheckedRadio?: string | number | boolean;
  onChange?: (value?: any) => void;
  layout: 'horizontal' | 'vertical';
  disabled?: boolean;
};

export type TooltipType = {
  text: string | React.ReactNode;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  space?: number;
  disabled?: boolean;
  bg?: string;
  delay?: number;
  tooltipTitle?: string;
  position?: string;
  colorText?: string;
  trigger: 'hover' | 'focus' | 'click';
};
export type ModalType = {
  open?: boolean;
  modalToggle?: () => void;
  customModal?: JSX.Element;
};
export type MessageType = {
  message: string;
  icon?: string | JSX.Element;
  status: 'warning' | 'success' | 'info' | 'error';
};

export type TabType = {
  tabs: {
    title: string | number;
    icon?: JSX.Element | string;
    children?: string | React.ReactNode;
  }[];
  type: 'filled' | 'ghost';
  index?: number;
};
