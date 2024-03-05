import React from 'react';
import { Meta } from '@storybook/react';
import MltChkBox from '../components/MultiCheckBox/MultiCheckbox';

export default {
    title: 'MULTI CHECK BOX/MultiCheckbox',
    component: MltChkBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} as Meta;

const options = [
    {label: 'A', value: 1},
    {label: 'B', value: 2},
    {label: 'C', value: 3},
    {label: 'D', value: 4},
    {label: 'E', value: 5},
    {label: 'F', value: 6}
];

 const Template = (args) => <MltChkBox {...args} />;

 export const Default = Template.bind({});
Default.args = {
    options: options,
    defaultCheckedList: [],
    onChange: (selectedCheckboxes) => console.log('Selected checkboxes:', selectedCheckboxes),
};

 export const PreChecked = Template.bind({});
PreChecked.args = {
    options: options,
    defaultCheckedList: [4,5],
    onChange: (selectedCheckboxes) => console.log('Selected checkboxes:', selectedCheckboxes),
};

 export const AllChecked = Template.bind({});
AllChecked.args = {
    options: options,
    defaultCheckedList: options.map((i)=>i.value), // Check all options
    onChange: (selectedCheckboxes) => console.log('Selected checkboxes:', selectedCheckboxes),
};
