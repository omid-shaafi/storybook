import React, {JSX} from 'react';
import {ButtonContainer} from './ButtonStyle';
import Loading from '../Loading/Loading';

const Button: React.FC<{

    addOnBefore?: string | JSX.Element,
    addOnAfter?: string | JSX.Element,
    buttonType: 'primary' | 'text'
    text: string
    onClick: () => void
    isLoading?: boolean
    disabled?: boolean
}> = ({onClick, text, isLoading, buttonType, addOnBefore, addOnAfter, disabled}) => {


    return (
        <ButtonContainer
            onClick={onClick}
            buttonType={buttonType}
            disabled={isLoading || disabled}
            isLoading={isLoading}
        >
            {isLoading ? (
                <>
                    {
                        buttonType === 'primary' ?
                            <>
                                {!isLoading && addOnBefore}
                                {text} {<Loading color={'#FFF'}/>}
                                {!isLoading && addOnAfter}
                            </>
                            :
                            buttonType === 'text' ?
                                <>  {addOnBefore && <Loading color={'#D9D9D9'}/>}
                                    {isLoading && !addOnBefore && !addOnAfter ? <Loading color={'#D9D9D9'}/> : text}
                                    {addOnAfter && <Loading color={'#D9D9D9'}/>}
                                </>
                                :
                                <Loading color={'#D9D9D9'}/>
                    }
                </>
            ) : (
                <>
                    {addOnBefore} {text} {addOnAfter}
                </>
            )}
        </ButtonContainer>
    );
};
export default Button;
