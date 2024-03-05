import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import './App.css';
import {StyledMainContainerApp} from './AppStyles';
import TextField from './components/TextField/TextField';
import PasswordField from './components/passwordField/PassField';
import Icon from './components/Common/Icon/Icon';
import './assets/css/icomoon.css'
import SearchBox from './components/SearchBox/SearchBox';
import {ThemeProvider} from 'styled-components';
import {dark, light} from './Theme';
import CheckBox from './components/CheckBox/checkbox';
import MultiCheckbox from './components/MultiCheckBox/MultiCheckbox';
import ActionSheet from './components/ActionSheet/ActionSheet';
import RadioButton from './components/RadioButton/RadioGroup';
import './services';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import Switch from './components/Switch/switch';
import {height} from 'styled-system';
import Tooltip from './components/Tooltip/Tooltip';
import Button from "./components/button/Button";
import Modal from "./components/Modal/Modal";
import Message from "./components/Message/Message";
import Tab from "./components/Tab/Tab";

function App() {
    const {t} = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const [value, onChange] = useState('');
    // const [checked, setChecked] = useState(false);

    // Ask if needed onchange send as prop or not ?
    // const handleCheckBoxChange = () => {
    //   setChecked(!checked);
    // };
    //--------------------------------------------

    const [isOpen, setIsOpen] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);
    const [checkedValues, setCheckedValues] = useState([]);
    const [checkedRadioValues, setCheckedRadio] = useState('');
    const [checked, setChecked] = useState(false);
    // const options = [
    //     {label: 'APple', value: 1},
    //     {label: 'BAn11ana', value: 2},
    //     {label: 'B', value: 3},
    //     {label: 'BAnana', value: 4},
    //     {label: 'B13123', value: '31'},
    //     {label: 'B123', value: 34}
    // ];

    const handleSwitchChange = (newValue) => {
        setSwitchValue(newValue);
    };
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(!open);

    const tabs = [
        {
            key: 1,
            title: ' عنوان تب1 ',

            children: (
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        backgroundColor: 'red'
                    }}>
                    TEST
                </div>
            )
        },
        {
            key: 2,
            title: ' عنوان تب ',
            icon: <Icon name={'corporate'} />,
            children: 'Child content for tab 2'
        },
        {
            key: 3,
            title: ' عنوان تب 3',
            icon: <Icon name={'corporate'} />,
            children: 'Child content for tab 21111111111111111111111111'
        }
    ];


    return (
        <ThemeProvider theme={light}>
            <Tab tabs={tabs} type="ghost" />
            {/*<p>MODALLLLL</p>*/}
            {/*<Modal*/}
            {/*    open={open}*/}
            {/*    modalToggle={openModal}*/}
            {/*    customModal={*/}
            {/*        <div*/}
            {/*            style={{*/}
            {/*                display: 'flex',*/}
            {/*                width: '300px',*/}
            {/*                height: '300px',*/}
            {/*                backgroundColor: 'white'*/}
            {/*            }}>*/}
            {/*            <button onClick={() => console.log('ok')}>op</button>*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*/>*/}
            {/*<button onClick={openModal}>openModal</button>*/}

            {/*<p>MODALLLLL</p>*/}

            {/*<Message message={'test'} status={'info'}/>*/}
            {/*<Button addOnBefore={<Icon color={'red'} name={'bill'}/>} buttonType={'text'} text={'TEXT'}*/}
            {/*        onClick={() => ('log')} isLoading={true}/>*/}
            {/*<div*/}
            {/*  style={{*/}
            {/*    display: 'flex',*/}
            {/*    alignItems: 'center',*/}
            {/*    justifyContent: 'start',*/}
            {/*    // marginTop: '200px',*/}
            {/*    marginLeft: '100px'*/}
            {/*  }}>*/}
            {/*  <Tooltip*/}
            {/*    disabled={false}*/}
            {/*    trigger="hover"*/}
            {/*    placement={'top'}*/}
            {/*    text={*/}
            {/*      'متن تولتیپ متن تولتیپ متن تولتیپ متن متن تولتیپ متن تولتیپ تولتیپ متن تولتیپ متن تولتیپ متن تولتیپ متن تولتیپ متن تولتیپ متن متن تولتیپ متن تولتیپ تولتیپ متن تولتیپ متن تولتیپ'*/}
            {/*    }>*/}
            {/*    /!*<input />*!/*/}
            {/*    <button>tets</button>*/}
            {/*  </Tooltip>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*  style={{*/}
            {/*    display: 'flex',*/}
            {/*    alignItems: 'center',*/}
            {/*    justifyContent: 'start',*/}

            {/*    marginTop: '200px'*/}
            {/*  }}>*/}
            {/*  <Tool*/}
            {/*    placement="right"*/}
            {/*    tooltipContent=" متن تولتیپ  متن تولتیپ متن تولتیپ متن تولتیپ مت  متن تولتیپ">*/}
            {/*    <button*/}
            {/*      style={{ borderRadius: '50%', height: '80px', width: '80px' }}>*/}
            {/*      mahmood ksdlfjsd klsjf slkf jlksjf lsk*/}
            {/*    </button>*/}
            {/*  </Tool>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*  style={{*/}
            {/*    width: '100%',*/}
            {/*    display: 'flex',*/}
            {/*    alignItems: 'center',*/}
            {/*    justifyContent: 'center'*/}
            {/*  }}>*/}
            {/*  <Tooltip*/}
            {/*    position={'bottom'}*/}
            {/*    tooltipTitle={'lkjhasr y usdu udsy fukysd fuysd uysdf'}>*/}
            {/*    <button*/}
            {/*      style={{*/}
            {/*        width: '60px',*/}
            {/*        height: '35px',*/}
            {/*        textAlign: 'center',*/}
            {/*        backgroundColor: 'lightgrey',*/}
            {/*        // position: 'absolute',*/}
            {/*        // top: 200*/}
            {/*        marginTop: '600px'*/}
            {/*      }}>*/}
            {/*      Btn*/}
            {/*    </button>*/}
            {/*  </Tooltip>*/}
            {/*</div>*/}

            {/*<button onClick={() => changeLanguage('en')}>English</button>*/}
            {/*<button onClick={() => changeLanguage('fa')}>Farsi</button>*/}
            {/*<RadioButton*/}
            {/*  options={options}*/}
            {/*  layout="vertical"*/}
            {/*  defaultCheckedRadio={'31'}*/}
            {/*  onChange={setCheckedRadio}*/}
            {/*/>*/}
            {/*<Switch value={switchValue} onChange={handleSwitchChange}   />*/}
            {/*<div>*/}
            {/*  <p>{t('hello')}</p>*/}
            {/*</div>*/}
            {/*<MultiCheckbox*/}
            {/*  options={options}*/}
            {/*  onChange={setCheckedValues}*/}
            {/*  defaultCheckedList={[3,4]}*/}
            {/*/>*/}
            {/*<div onClick={() => isOpen && setIsOpen(!isOpen)}>*/}
            {/*  <button onClick={() => setIsOpen(!isOpen)}>Open Drawer</button>*/}
            {/*  <ActionSheet isOpen={isOpen} />*/}
            {/*</div>*/}

            {/*<CheckBox*/}
            {/* */}
            {/*  label={'lable4444444444'}*/}
            {/*  checked={checked}*/}
            {/*  isIndeterminate={false}*/}
            {/*  onChange={setChecked}*/}
            {/*/>*/}

            {/*<StyledMainContainerApp>*/}
            {/*  <SearchBox onChange={onChange} value={value}     />*/}
            {/*  <br />*/}
            {/*  <br />*/}
            {/*  <TextField*/}
            {/*    status={'error'}*/}
            {/*    addOnBefore={<Icon name={'user_1'} />}*/}
            {/*    disabled*/}
            {/*  />*/}
            {/*  <br />*/}
            {/*  <br />*/}
            {/*  <PasswordField*/}
            {/*    status={'error'}*/}
            {/*    value={value}*/}
            {/*    onChange={onChange}*/}
            {/*    //  disabled*/}
            {/*  />*/}
            {/*</StyledMainContainerApp>*/}
        </ThemeProvider>
    );
}

export default App;
