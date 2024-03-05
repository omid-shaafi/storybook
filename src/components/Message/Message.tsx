import React from 'react';
import { StyledMessage, StyledMessageText } from './style';
import { MessageType } from '../../Types/index';
import Icon from '../Common/Icon/Icon';
import getStatusStyles from './Utils';

const Message: React.FC<MessageType> = ({ message, status, icon }) => {
    const { backgroundColor, borderColor, iconName, iconColor } =
        getStatusStyles(status);

    return (
        <StyledMessage backgroundColor={backgroundColor} borderColor={borderColor}>
            <StyledMessageText>{message}</StyledMessageText>
            {icon ?? <Icon name={iconName} color={iconColor} fontSize="23px" />}
        </StyledMessage>
    );
};

export default Message;
