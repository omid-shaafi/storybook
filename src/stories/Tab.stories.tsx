import React from 'react';
import {Meta} from '@storybook/react';
import Tab from '../components/Tab/Tab';
import Icon from "../components/Common/Icon/Icon";

export default {
    title: 'Tab/Tab',
    component: Tab,
    tags: ['autodocs'],
    argTypes: {
        type: {control: {type: 'radio', options: ['ghost', 'fill']}},
    },
} as Meta;


const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs: [
        {
            key: 1,
            title: ' عنوان تب1 ',
            children: <h1 style={{backgroundColor:'lightgreen'}}>'Child content for tab 1'</h1>
        },
        {
            key: 2,
            title: ' عنوان تب2 ',
            icon: <Icon name={'corporate'}/>,
            children: <h1 style={{backgroundColor:'lightblue'}}>'Child content for tab 2'</h1>
        },
        {
            key: 3,
            title: ' عنوان تب 3',
            icon: <Icon name={'corporate'}/>,
            children: <h1 style={{backgroundColor:'lightpink'}}>'Child content for tab 3'</h1>
        }
    ],
};
