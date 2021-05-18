import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, FormText } from 'react-bootstrap';

import IUser from 'models/redux/IUser';
import { CustomToggle, Initials } from './Navigation.styles';
import { routes } from 'utils/routes/routes';
import { logOut } from 'store/actions';
import { getUser } from 'store/reducers/sessionReducer';
import { LOCALIZATION_PAGES } from 'utils/constants';

const UsersDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation(LOCALIZATION_PAGES.NAVIGATION);
  const { name, email } = useSelector(getUser) as IUser;

  const menu = [
    {
      iconPath: `${process.env.PUBLIC_URL}/assets/icons/list-outline.svg`,
      label: t('my_profile'),
      onClick: () => history.push(routes.MY_PROFILE.path),
    },
    {
      iconPath: `${process.env.PUBLIC_URL}/assets/icons/log-out-outline.svg`,
      label: t('log_out'),
      // example
      onClick: () => {
        dispatch(logOut());
        history.push(routes.LOGIN.path);
      },
    },
  ];

  const getInitials = () => {
    const fullName = name.split(' ');

    return `${fullName[0][0]} ${fullName[1][0]}`;
  };

  return (
    <Dropdown className="ml-3">
      <CustomToggle variant="light">
        <Initials>{getInitials()}</Initials>
      </CustomToggle>
      <Dropdown.Menu align="right">
        <Dropdown.Header>
          <b>{name}</b>
          <FormText className="mt-0">{email}</FormText>
        </Dropdown.Header>
        <Dropdown.Divider />
        {menu.map(m => (
          <Dropdown.Item className="d-flex align-items-center" key={m.label} onClick={m.onClick}>
            <img className="mr-2" alt={m.label} src={m.iconPath} />
            <FormText className="m-0" color="dark">
              {m.label}
            </FormText>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UsersDropdown;
