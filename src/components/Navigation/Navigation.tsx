import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

import UsersDropdown from './UsersDropdown';
import { LanguageSelect } from 'components';

const Header = () => (
  <Navigation>
    {/* This logo should change!! */}
    <Logo src={`${process.env.PUBLIC_URL}/assets/images/ius_logo.png`} alt="ius_logo" />

    <Nav className="mr-auto" />
    <LanguageSelect />
    <UsersDropdown />
  </Navigation>
);

const Logo = styled.img`
  height: 80px;
`;

const Navigation = styled(Navbar)`
  top: 0;
  height: 80px;
  position: sticky;
  align-items: center;
  background-color: var(--white);
  box-shadow: rgb(0 0 0 / 25%) 1px 3px 5px -2px;
`;

export default Header;
