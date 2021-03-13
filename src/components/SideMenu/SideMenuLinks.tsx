import { useState } from 'react';
import styled from 'styled-components';

import SideMenuLink from './SideMenuLink';
import { IConfigurableRoute } from 'utils/routes/IRoutes';
import { useHistory } from 'react-router-dom';
import { matchRoute } from 'utils/routes/routes';

interface IProps {
  titleLabel?: string;
  links: IConfigurableRoute[];
}

const SideMenuLinks = ({ titleLabel, links }: IProps) => {
  const history = useHistory();
  const currentRoute = matchRoute(history.location.pathname) as IConfigurableRoute;
  const [activeRoute, setActiveRoute] = useState(currentRoute);

  return (
    <>
      {titleLabel && <Title title={titleLabel} />}
      {links.map((link, i) => (
        <SideMenuLink
          key={i}
          link={link}
          isActive={activeRoute.id === link.id || activeRoute.path === link.path}
          onClick={() => setActiveRoute(link)}
        />
      ))}
    </>
  );
};

const Title = styled(({ title, ...rest }) => <div {...rest}>{title}</div>)`
  color: var(--dark);
  font-size: 12px;
  padding: 8px 10px;
  font-weight: 500;
  line-height: 1.5;
`;

export default SideMenuLinks;
