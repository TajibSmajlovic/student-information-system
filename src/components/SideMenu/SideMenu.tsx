import SideMenuLinks from './SideMenuLinks';
import { SideMenuWrapper as Wrapper, Menu, Footer } from './SideMenu.styles';
import { useAvailableUserRoutes } from 'utils/routes/routes';
import { IConfigurableRoute } from 'utils/routes/IRoutes';

const SideMenu = () => {
  const availableUserRoutes = useAvailableUserRoutes();
  const menuLinks = Object.values(availableUserRoutes as IConfigurableRoute[])
    .filter(r => r.configuration && r.isVisible)
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
