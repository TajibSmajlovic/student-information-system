import { useTranslation } from 'react-i18next';

import { SideMenuLinkWrapper as Wrapper, DisabledLink, ActiveLink, Link } from './SideMenu.styles';
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

export default SideMenuLink;
