import React, {useState} from 'react';
import {Meta} from '@storybook/react';
import Modal from '../components/Modal/Modal';

export default {
    title: 'Modal/Modal',
    component: Modal,
    argTypes: {
        customModal: {control: 'text'},
    },
    tags: ['autodocs'],
} as Meta;


export const BasicModal = (args) => {
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            {open && <Modal open={open} modalToggle={toggleModal}
                            customModal={args.customModal ? args.customModal :
                                <div style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: "12px",
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>Modal</div>}/>}
            <button onClick={toggleModal}>Toggle Modal</button>
        </div>
    );
};

