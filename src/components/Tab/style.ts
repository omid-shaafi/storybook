import styled from 'styled-components';

export const StyledTab = styled.div<{ type?: string }>`
  display: inline-flex;
  flex-direction: row;
  padding: 4px;
  border-radius: 10px;
  background-color: ${({ type }): string =>
    type === 'filled' ? '#F3F3F3' : 'transparent'};
`;



const getColor = (type: string, isSelected: boolean) => {
    switch (type) {
        case 'filled':
            return isSelected ? '#3d5977' : '#3d5977';
        case 'ghost':
            return isSelected ? '#00ED26' : '#3d5977';
        default:
            return '#3d5977';
    }
};

export const StyledButton = styled.button<{
    isSelected: boolean;
    type?: string;
    index?: number;
}>`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 4px;
  min-width: ${({ type }): string => (type === 'filled' ? '83px' : '165px')};
  height: 37px;
  color: ${({ type, isSelected }) => getColor(type, isSelected)};
  font-family: IRANSans;
  border: none;
  font-size: 12px;
  padding: 0 14px;
  margin: 1px;
  border-radius: ${({ type }): string => (type === 'filled' ? '10px' : '0')};
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({ isSelected, type }): string =>
    type === 'filled' ? (isSelected ? '#BEFF00' : '#F3F3F3') : 'transparent'};
  &:hover {
    background-color: ${({ isSelected, type }): string =>
    type === 'filled' ? (isSelected ? '#BEFF00' : '#D9D9D9') : 'transparent'};
    color: ${({ isSelected, type }): string =>
    type === 'ghost' ? (isSelected ? '#00ED26' : '#85A0BD') : '#3D5977'};
  }

  border-right: ${({ index, type }): string =>
    type === 'ghost' &&
    (index === 0 || index > 0 ? '1px solid #d9d9d9' : 'none')};

  &:last-child {
    border-right: none;
  }
`;
