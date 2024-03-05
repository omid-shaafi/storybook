import React from 'react';
import {TabType} from '../../../src/Types/index';
import {StyledButton} from './style';

type FilledTabProps = {
    tab: TabType['tabs'][0];
    isSelected: boolean;
    onSelect: () => void;
    icon?: string;
    type: string;
    index?: number;
};

const FilledTab: React.FC<FilledTabProps> = ({
                                                 tab,
                                                 isSelected,
                                                 onSelect,
                                                 type,
                                                 index
                                             }) => {
    return (
        <StyledButton
            onClick={onSelect}
            isSelected={isSelected}
            type={type}
            index={index}>
            <>
                {tab.title}
                {tab.icon}
            </>
        </StyledButton>
    );
};

export default FilledTab;
