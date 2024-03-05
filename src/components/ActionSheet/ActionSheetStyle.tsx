import styled, { keyframes } from 'styled-components';

// const openFromTop = keyframes`
//   from {
//     height: 0;
//   }
//   to {
//     height: 500px;
//   }
// `;
const openFromLeft = keyframes`
  from {
    left: 0;
  }
  to {
    right: 400px;
  }
`;

export const StyledActionSheet = styled.div<{
  isOpen?: any;
  position?: string;
}>`
  width: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  height: 200px;
  background-color: cornflowerblue;
  animation-name: ${({ isOpen }) => (isOpen ? openFromLeft : 'none')};
  transition: 3s;
`;
