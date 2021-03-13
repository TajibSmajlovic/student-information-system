import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { IConfigurableRoute } from 'utils/routes/IRoutes';
import { LOCALIZATION_PAGES } from 'utils/constants';

interface IProps {
  link: IConfigurableRoute;
  isActive: boolean;
  onClick: () => void;
}

const SideMenuLink = ({ link, isActive, onClick }: IProps) => {
  const { t } = useTranslation(LOCALIZATION_PAGES.NAVIGATION);
  const { path, configuration } = link;
  const { label, isDisabled } = configuration;

  return (
    <Wrapper onClick={onClick}>
      {isDisabled && <DisabledLink>{t(label)}</DisabledLink>}
      {isActive && !isDisabled && <ActiveLink to={path}>{t(label)}</ActiveLink>}
      {!isActive && !isDisabled && <Link to={path}>{t(label)}</Link>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-weight: 500;
`;

const Link = styled(NavLink)`
  cursor: pointer;
  margin: 0.3rem 0;
  padding: 0.2rem 0 0.2rem 0.9rem;
  color: var(--primary);
  font-size: 1rem;
  line-height: 2.8;
  letter-spacing: normal;
  border-radius: 4px;
  display: block;

  :hover {
    background-color: var(--primary);
    color: var(--white);
    text-decoration: none;
  }
`;

const DisabledLink = styled.div`
  padding: 0.2rem 0 0.2rem 0.9rem;
  font-size: 1rem;
  line-height: 2.86;
  letter-spacing: normal;
  color: var(--disabled);
  margin-bottom: 4px;
  border-radius: 4px;
  display: block;
  cursor: not-allowed;
`;

const ActiveLink = styled(Link)`
  background-color: var(--primary);
  color: var(--white);
`;

export default SideMenuLink;
