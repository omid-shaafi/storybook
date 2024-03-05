const getStatusStyles = (status: string) => {
    const statusStyles = {
        success: {
            backgroundColor: '#ECFFF2',
            borderColor: '#ACF9A2',
            iconName: 'ok_correct_working',
            iconColor: '#00ED26'
        },
        error: {
            backgroundColor: '#FAE9E8',
            borderColor: '#FECCC0',
            iconName: 'danger_incorrect_notworking',
            iconColor: '#F54F30'
        },
        info: {
            backgroundColor: '#DEF5FF',
            borderColor: '#ABE4FF',
            iconName: 'info',
            iconColor: '#00C1FF'
        },
        warning: {
            backgroundColor: '#FFF9EE',
            borderColor: '#FFDF9F',
            iconName: 'alert_low_semiworking',
            iconColor: '#FFA800'
        }
    };

    return statusStyles[status] || {};
};

export default getStatusStyles;
