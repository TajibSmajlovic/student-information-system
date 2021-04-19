import styled from 'styled-components';
import { Navbar, Dropdown } from 'react-bootstrap';

export const Logo = styled.img`
  height: 70px;
  margin-left: 1rem;
`;

export const Navigation = styled(Navbar)`
  top: 0;
  height: 80px;
  position: sticky;
  align-items: center;
  background-color: var(--white);
  box-shadow: rgb(0 0 0 / 25%) 1px 3px 5px -2px;
`;

export const Initials = styled.div`
  height: 42px;
  width: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--disabled);
  color: var(--light);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 100%;
`;

export const CustomToggle = styled(Dropdown.Toggle)`
  height: 45px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent !important;
  border: none !important;

  &&:hover,
  &&:active,
  &&:focus {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:after {
    display: none;
  }
`;
