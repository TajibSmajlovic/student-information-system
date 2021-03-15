import SideMenuLinks from './SideMenuLinks';
import { SideMenuWrapper as Wrapper, Menu, Footer } from './SideMenu.styles';
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

export default SideMenu;
