import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const ToggleIconWrapper = styled.span`
  position: absolute;
  right: 1rem;
  top: 33px;
  z-index: 10;
  cursor: pointer;
`;

export const FaEyeIcon = styled(FaEye)`
  font-size: 17px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const FaEyeSlashIcon = styled(FaEyeSlash)`
  font-size: 17px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
