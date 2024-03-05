import styled from 'styled-components';
import React from 'react';
import { placementHandler } from './util';
import { strict } from 'assert';

export const StyledTooltip = styled.span<{
  positionRef: React.MutableRefObject<{ x: number; y: number }>;
  bg: string;
  show: boolean;
  delay: number;
  placement: string;
  colorText: string;
}>`
  --tooltip-bg: ${({ bg }) => (bg ? bg : '#1b2b3c')};
  min-width: 83px;
  max-width: 200px;
  width: auto;
  position: fixed;
  top: ${({ positionRef }) => positionRef.current.y}px;
  left: ${({ positionRef }) => positionRef.current.x}px;
  font-weight: 400;
  font-family: IRANSansFaNum;
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 0.02em;
  background-color: ${({ bg }): string => (bg ? bg : '#1b2b3c')};
  color: ${({ colorText }): string => (colorText ? colorText : '#FFF')};
  pointer-events: none;
  padding: 6px 8px;
  border-radius: 12px;
  z-index: 1000;
  display: inline-block;
  text-align: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition-property: transform, opacity !important;
  transition-duration: 0.06s !important;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
  transition-delay: ${({ show, delay }) => (show ? delay : 0.02)}s !important;
  transform-origin: ${({ placement }) => placementHandler(placement).negate()};
  transform: scale(${({ show }) => (show ? 1 : 0.7)});

  &::before {
    content: '';
    position: fixed;
    border-style: solid;
    border-width: 5px;
    ${({ placement }) => {
      switch (placement) {
        case 'top':
          return `
            border-color: transparent transparent var(--tooltip-bg) transparent;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) rotate(180deg);
          `;
        case 'right':
          return `
            border-color: transparent var(--tooltip-bg) transparent transparent;
            top: 50%;
            left: -10px;
            transform: translateY(-50%);
          `;
        case 'bottom':
          return `
            border-color: var(--tooltip-bg) transparent transparent transparent;
            top: -10px;
            left: 50%;
            transform: translateX(-50%) rotate(180deg);
          `;
        case 'left':
          return `
            border-color: transparent transparent transparent var(--tooltip-bg);
            top: 50%;
            right: -10px;
            transform: translateY(-50%);
          `;
        default:
          return '';
      }
    }};
  }
`;
