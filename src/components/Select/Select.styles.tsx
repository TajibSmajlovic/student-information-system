import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const CustomDropdownMenu = styled(Dropdown.Menu)`
  max-height: 250px;
  overflow: auto;
`;

export const DropdownItemBox = styled(Dropdown.Item)`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const DropdownItemText = styled(({ value, ...rest }) => <div {...rest}>{value}</div>)`
  font-size: 14px;
  line-height: 1.57;
`;
