import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 1s linear infinite;
`;
