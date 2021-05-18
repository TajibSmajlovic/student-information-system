import styled, { css } from 'styled-components';
import { FormControl } from 'react-bootstrap';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const InputComponent = styled(FormControl)`
  width: 100%;
  height: 38px;
  font-size: 0.875rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: transparent !important;
      font-weight: bold;
      border: none;
    `}
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
