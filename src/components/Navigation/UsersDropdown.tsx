import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, FormText } from 'react-bootstrap';

import IUser from 'models/IUser';
import { routes } from 'utils/routes/routes';
import { logOut } from 'store/actions';
import { getUser } from 'store/reducers/sessionReducer';
import { LOCALIZATION_PAGES } from 'utils/constants';

const UsersDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation(LOCALIZATION_PAGES.NAVIGATION);
  const { name, email } = useSelector(getUser) as IUser;

  const getInitials = () => {
    const fullName = name.split(' ');

    return `${fullName[0][0]} ${fullName[1][0]}`;
  };

  const menu = [
    {
      iconPath: `${process.env.PUBLIC_URL}/assets/icons/list-outline.svg`,
      label: t('my_profile'),
      onClick: () => {},
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

const Initials = styled.div`
  height: 42px;
  width: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--disabled);
  color: var(--light);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 100%;
`;

const CustomToggle = styled(Dropdown.Toggle)`
  height: 45px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent !important;
  border: none !important;

  &&:hover,
  &&:active,
  &&:focus {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:after {
    display: none;
  }
`;

export default UsersDropdown;
