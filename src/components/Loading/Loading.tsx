import React from 'react';
import { StyledLoading } from './LoadingStyle';
import { Interpolation } from 'styled-components';

const Loading: React.FC<{
  color?: string;
  disabled?: boolean;
  type?: string;
}> = ({ color }) => {
  return (
    <StyledLoading>
      <svg
        style={{ padding: '2px' }}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 22 22"
        fill="none">
        <path
          d="M21.2266 11.7734C20.799 11.7734 20.4531 11.4275 20.4531 11C20.4531 9.72383 20.2039 8.48633 19.7098 7.31973C19.2344 6.19665 18.5465 5.17604 17.6838 4.31406C16.8228 3.45021 15.8019 2.76211 14.6781 2.28809C13.5137 1.79609 12.2762 1.54688 11 1.54688C10.5725 1.54688 10.2266 1.20098 10.2266 0.773438C10.2266 0.345898 10.5725 0 11 0C12.4846 0 13.9262 0.290039 15.2818 0.86582C16.5924 1.41797 17.7676 2.21289 18.7773 3.22266C19.7871 4.23242 20.5799 5.40977 21.1342 6.71816C21.7078 8.07383 21.9979 9.51543 21.9979 11C22 11.4275 21.6541 11.7734 21.2266 11.7734Z"
          fill={color}
        />
      </svg>
    </StyledLoading>
  );
};

export default Loading;
