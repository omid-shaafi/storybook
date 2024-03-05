import React from 'react';
import { Meta } from '@storybook/react';
import ChkBox from '../components/CheckBox/checkbox';

export default {
    title: 'CHECK BOX/CheckBox',
    component: ChkBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} as Meta;



export const Default =(args)=>(
    <ChkBox {...args} />
);
Default.args = {
    label: 'Checkbox Label',
    checked: false,
    disabled: false,
    isIndeterminate: false,
    onChange: () => console.log('Checkbox changed'),
};

export const Checked = (args)=>(
    <ChkBox {...args} />
);
Checked.args = {
    label: 'Checked Checkbox',
    checked: true,
    disabled: false,
    isIndeterminate: false,
    onChange: () => console.log('Checkbox changed'),
};

export const Disabled = (args)=>(
    <ChkBox {...args} />
);
Disabled.args = {
    label: 'Disabled Checkbox',
    checked: false,
    disabled: true,
    isIndeterminate: false,
    onChange: () => console.log('Checkbox changed'),
};


