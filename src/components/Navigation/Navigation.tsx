import { Nav } from 'react-bootstrap';

import UsersDropdown from './UsersDropdown';
import { Navigation, Logo } from './Navigation.styles';
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

export default Header;
