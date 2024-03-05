import React ,{useState} from 'react';
import {Meta} from '@storybook/react';
import SrhBox from '../components/SearchBox/SearchBox';

export default {
    title: 'Search Box/SearchBox',
    component: SrhBox,
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


export const Default = (args: any) => {
    return <SrhBox {...args} />
};
Default.args = {
    placeholder: 'Search...',
    value: '',
    onChange: (value) => console.log('Search query:', value),
    isLoading: false,

};

export const WithLoading = (args) => {
    return <SrhBox {...args} />
}
WithLoading.args = {
    placeholder: 'Search...',
    value: '',
    onChange: (value) => console.log('Search query:', value),
    isLoading: true,

};


export const WithValue = (args) => {
    const [value , setValue]=useState('Example query')
    return <SrhBox {...args}  value={value} onChange={setValue}/>
}
WithValue.args = {
    placeholder: 'Search...',
    isLoading: false,
};

export const Disabled = (args) => {
    return <SrhBox {...args} />
}
Disabled.args = {
    placeholder: 'Search...',
    value: '',
    onChange: (value) => console.log('Search query:', value),
    isLoading: false,
    disabled: true
};

export const Error = (args) => {
    return <SrhBox {...args} />
}
Error.args = {
    placeholder: 'Search...',
    value: '',
    onChange: (value) => console.log('Search query:', value),
    isLoading: false,
    status: 'error'
};

export const Success = (args) => {
    return <SrhBox {...args} />
}
Success.args = {
    placeholder: 'Search...',
    value: '',
    onChange: (value) => console.log('Search query:', value),
    isLoading: false,
    status: 'success'
};


