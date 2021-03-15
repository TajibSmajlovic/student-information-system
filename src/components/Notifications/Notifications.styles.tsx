import styled from 'styled-components';
import { Alert as DefaultAlert } from 'react-bootstrap';

export const Alert = styled(DefaultAlert)`
  animation: fadeInFromNone 0.2s ease-out;

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: none;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 8px;
  min-width: 20%;
`;
