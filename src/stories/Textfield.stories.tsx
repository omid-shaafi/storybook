import React from 'react';
import { Meta } from '@storybook/react';
import TextField from '../components/TextField/TextField';

export default {
    title: 'Text Field/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        addOnBefore: {
            control: {
                type: 'text',
            },
        },
        addOnAfter: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta;

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    status: 'default',
    placeholder: 'Enter text',
    value: '',
    onChange: (value) => console.log('Text changed:', value),
    isLoading: false,
    disabled: false,
    type: 'text',
};


export const Disabled = Template.bind({});
Disabled.args = {
    status: 'default',
    placeholder: 'Enter text',
    value: '',
    onChange: (value) => console.log('Text changed:', value),
    isLoading: false,
    disabled: true,
    type: 'text',
};

export const Error = Template.bind({});
Error.args = {
    status: 'error',
    placeholder: 'Enter text',
    value: '',
    onChange: (value) => console.log('Text changed:', value),
    isLoading: false,
    disabled: false,
    type: 'text',
};


export const Success = Template.bind({});
Success.args = {
    status: 'success',
    placeholder: 'Enter text',
    value: '',
    onChange: (value) => console.log('Text changed:', value),
    isLoading: false,
    disabled: false,
    type: 'text',
};