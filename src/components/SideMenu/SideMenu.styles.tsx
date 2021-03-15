import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideMenuWrapper = styled.div`
  height: calc(100vh - 80px);
  width: 270px;
  position: sticky;
  top: 79px;
  background-color: var(--white);
  box-shadow: rgb(0 0 0 / 25%) 1px 0px 5px -2px;
`;

export const Menu = styled.div`
  height: 70vh;
  width: inherit;
  position: fixed;
  margin-top: 2rem;
  padding: 0 2rem;
`;

export const Footer = styled.div`
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

export const Title = styled(({ title, ...rest }) => <div {...rest}>{title}</div>)`
  color: var(--dark);
  font-size: 12px;
  padding: 8px 10px;
  font-weight: 500;
  line-height: 1.5;
`;

export const SideMenuLinkWrapper = styled.div`
  font-weight: 500;
`;

export const Link = styled(NavLink)`
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
    background-color: var(--primary-light);
    color: var(--white);
    text-decoration: none;
  }
`;

export const DisabledLink = styled.div`
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

export const ActiveLink = styled(Link)`
  background-color: var(--primary-light);
  color: var(--white);
`;
