import React from 'react';
import { Meta } from '@storybook/react';
import RadioGroup from '../components/RadioButton/RadioGroup';

export default {
    title: 'Radio Group/RadioGroup',
    tags: ['autodocs'],
    component: RadioGroup,
} as Meta;

const Template = (args) => <RadioGroup {...args} />;

export const vertical = Template.bind({});
vertical.args = {
    options: [
        { value: 'option1', label: 'Option -- 1' },
        { value: 'option2', label: 'Option -- 2' },
        { value: 'option3', label: 'Option -- 3' },
    ],
    onChange: (value) => console.log('Selected option:', value),
    layout: 'vertical',
    disabled: false,
    defaultCheckedRadio: 'option1',
};
export const horizontal = Template.bind({});
horizontal.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    onChange: (value) => console.log('Selected option:', value),
    layout: 'horizontal',
    disabled: false,
    defaultCheckedRadio: 'option1',
};
