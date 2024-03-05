import React from 'react';
import { Meta } from '@storybook/react';
import Message from '../components/Message/Message';
import Icon from "../components/Common/Icon/Icon";

export default {
    title: 'Message/Message',
    component: Message,
    tags: ['autodocs'],
} as Meta;


const Template = (args) => <Message {...args} />;


export const Info = Template.bind({});
Info.args = {
    message: 'This is a default message',
    status: 'info',
};


export const Error = Template.bind({});
Error.args = {
    message: 'Something went wrong!',
    status: 'error',

};


export const Success = Template.bind({});
Success.args = {
    message: 'Operation successful!',
    status: 'success',
     icon: <Icon name="successIcon" color="green" fontSize="20px" />,
};

export const Warning = Template.bind({});
Warning.args = {
    message: 'Warning!',
    status: 'warning',
};


