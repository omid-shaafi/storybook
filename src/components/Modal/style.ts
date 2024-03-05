import styled from 'styled-components';

export const StyledModal = styled.div<{ visible?: boolean; closing?: boolean }>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  position: fixed;
  top: 0;
  display: ${({ visible }): string => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(61, 89, 119, 0.3);
  backdrop-filter: blur(10px);
  animation-name: ${({ closing }) => (closing ? 'fadeOut' : 'fadeIn')};
  animation-duration: 0.5s;
`;
