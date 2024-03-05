import React from 'react';
import {Meta} from '@storybook/react';
import Btn from '../components/button/Button';

export default {
    title: 'BUTTON/Button',
    component: Btn,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
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


export const Button = (args) => <Btn {...args} />;
Button.args = {
    buttonType: 'text',
    text: 'Text Button',

};
