import styled from 'styled-components';
export const StyledMessage = styled.div<{
    backgroundColor?: string;
    borderColor?: string;
}>`
  width: 100%;
  margin-top: 5px;
  display: flex;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ borderColor }): string => borderColor};
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }): string => backgroundColor};
`;

export const StyledMessageText = styled.span`
  color: ${({ theme }): string => '#3D5977'};
  margin-right: 6px;
  font-family: IRANSans;
`;
