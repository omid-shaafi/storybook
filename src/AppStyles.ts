import styled from 'styled-components';

export const StyledMainContainerApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }): string => theme.colors.mainBackground};
  padding: 14px;
  box-sizing: border-box;
`;
