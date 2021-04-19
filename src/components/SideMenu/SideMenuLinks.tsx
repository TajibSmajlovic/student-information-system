import SideMenuLink from './SideMenuLink';
import { Title } from './SideMenu.styles';
import { IConfigurableRoute } from 'utils/routes/IRoutes';
import { useLocation } from 'react-router-dom';
import { matchRoute } from 'utils/routes/routes';

interface IProps {
  titleLabel?: string;
  links: IConfigurableRoute[];
}

const SideMenuLinks = ({ titleLabel, links }: IProps) => {
  const location = useLocation();
  const currentRoute = matchRoute(location.pathname) as IConfigurableRoute;

  return (
    <>
      {titleLabel && <Title title={titleLabel} />}
      {links.map((link, i) => (
        <SideMenuLink key={i} link={link} isActive={currentRoute.id === link.id || currentRoute.path === link.path} />
      ))}
    </>
  );
};

export default SideMenuLinks;
