import React from 'react';
import { Meta } from '@storybook/react';
import Tooltip from '../components/Tooltip/Tooltip';

export default {
    title: 'Tool tip/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        colorText: { control: 'color' },
        text: { control: 'text' },
        placement: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'],
            },
        },
        space: { control: 'number' },
        disabled: { control: 'boolean' },
        delay: { control: 'number' },
        bg: { control: 'color' },
        trigger: {
            control: {
                type: 'select',
                options: ['hover', 'click', 'focus'],
            },
        },
    },
} as Meta;

const Template = (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Tooltip {...args}>
            <button onClick={() => console.log('Button clicked')}>Click me</button>
        </Tooltip>
    </div>
);
export const Default = Template.bind({});
Default.args = {

    text: 'Tooltip Text',
    placement: 'bottom',
    space: 15,
    disabled: false,
    delay: 0,
    bg: '#000000',
    trigger: 'hover',
};
