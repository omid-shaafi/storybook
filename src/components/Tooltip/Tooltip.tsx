import React, { useState, useRef, useEffect } from 'react';
import Portal from './Portal';
import { StyledTooltip } from './style';
import { getPoint } from './util';
import { TooltipType } from '../../Types';

const Tooltip: React.FC<TooltipType> = ({
  colorText,
  text,
  placement = 'bottom',
  space = 15,
  children,
  disabled = false,
  delay,
  bg,
  trigger = 'hover'
}) => {
  const [show, setShow] = useState(false);

  const positionRef: React.MutableRefObject<{
    x: number;
    y: number;
    updatedPlacement?: string;
  }> = useRef({ x: 0, y: 0, updatedPlacement: placement });
  const tooltipRef = useRef();

  const handleMouseOver = (element: { currentTarget: HTMLLIElement }) => {
    if (trigger === 'hover') {
      setShow(true);
      positionRef.current = getPoint(
        element.currentTarget,
        tooltipRef.current,
        placement,
        space
      );
    }
  };
  const handleOnBlur = () => {
    if (trigger === 'focus') {
      setShow(false);
    }
  };
  const handleMouseOut = () => {
    if (trigger === 'hover') {
      setShow(false);
    }
  };

  const handleClick = (element: { currentTarget: HTMLLIElement }) => {
    if (trigger === 'click' || trigger === 'focus') {
      setShow(!show);
      positionRef.current = getPoint(
        element.currentTarget,
        tooltipRef.current,
        placement,
        space
      );
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !isDescendant(tooltipRef.current, event.target as Node) &&
        !(
          children &&
          (children as React.ReactElement).props &&
          (children as React.ReactElement).props.onClick
        )
      ) {
        setShow(false);
      }
    };

    const isDescendant = (parent: Node, child: Node | null): boolean => {
      let node = child;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [children]);

  return (
      <>
        {disabled || !children ? (
            children
        ) : (
            React.cloneElement(children as React.ReactElement, {
              onMouseOver: handleMouseOver,
              onMouseOut: handleMouseOut,
              onClick: handleClick,
              onFocus: handleMouseOver,
              onBlur: handleOnBlur
            })
        )}
        {disabled || (
            <Portal>
              <StyledTooltip
                  colorText={colorText}
                  delay={delay}
                  bg={bg}
                  ref={tooltipRef}
                  positionRef={positionRef}
                  placement={positionRef.current.updatedPlacement || placement}
                  show={show}>
                {text}
              </StyledTooltip>
            </Portal>
        )}
      </>
  );
};

export default Tooltip;
