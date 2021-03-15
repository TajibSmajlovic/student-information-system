import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

export const CustomToggle = styled(Dropdown.Toggle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border: solid 1px #d8dce6;

  :after {
    display: none;
  }
`;

export const LanguageContainer = styled.div`
  height: 38px;
  width: 104px;
  align-items: center;
`;

export const Icon = styled.img`
  height: 15px;
  width: 15px;
`;
