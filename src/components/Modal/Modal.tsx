import React, { ReactElement, useEffect, useState } from 'react';
import { StyledModal } from './style';
import { ModalType } from '../../Types';

const Modal: React.FC<ModalType> = ({ open, modalToggle, customModal }) => {
  const [visible, setVisible] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    } else {
      setClosing(true);
      const timeoutId = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  const handleBlurClick = () => {
    if (!closing) {
      modalToggle();
    }
  };

  return (
    <StyledModal onClick={handleBlurClick} visible={visible} closing={closing}>
      {React.cloneElement(customModal as ReactElement, {
        onClick: (e: MouseEvent) => {
          e.stopPropagation();
        }
      })}
    </StyledModal>
  );
};

export default Modal;
