import styled from 'styled-components';

import SideMenuLinks from './SideMenuLinks';
import { routes } from 'utils/routes/routes';
import { IConfigurableRoute } from 'utils/routes/IRoutes';

const SideMenu = () => {
  const menuLinks = Object.values(routes)
    .filter(r => r.configuration)
    .sort((a: IConfigurableRoute, b: IConfigurableRoute) => a.configuration.order - b.configuration.order)
    .map((r: IConfigurableRoute) => r);

  return (
    <Wrapper>
      <Menu>
        <SideMenuLinks links={menuLinks} />
      </Menu>
      <Footer>
        <p className="w-100 text-center">Work in progress</p>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  width: 270px;
  position: sticky;
  top: 79px;
  background-color: var(--white);
  box-shadow: rgb(0 0 0 / 25%) 1px 0px 5px -2px;
`;

const Menu = styled.div`
  height: 70vh;
  width: inherit;
  position: fixed;
  margin-top: 2rem;
  padding: 0 2rem;
`;

const Footer = styled.div`
  width: inherit;
  position: fixed;
  bottom: 0;
  padding: 2rem 2rem 0.7rem 2rem;
  display: flex;
  flex-wrap: wrap;
  color: var(--dark);

  p {
    font-size: 0.875rem;
  }
`;

export default SideMenu;
