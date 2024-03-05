import React, { useEffect } from 'react';
import { StyledActionSheet } from './ActionSheetStyle';

const ActionSheet: React.FC<{ position?: string; isOpen?: boolean }> = ({
  position,
  isOpen
}) => {
  return <StyledActionSheet isOpen={isOpen} />;
};

export default ActionSheet;
