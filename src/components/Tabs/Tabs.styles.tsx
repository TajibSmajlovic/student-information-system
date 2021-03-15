import styled from 'styled-components';
import { Tabs } from 'react-bootstrap';

export const TabsComponents = styled(Tabs)`
  width: fit-content;
  margin-bottom: 2rem;
  padding: 0.2rem;
  border-radius: 7px;
  font-size: 0.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  background-color: var(--white);

  .nav-link {
    height: 35px;
    margin: 2px;
    padding: 0.7rem 3rem;
    line-height: 1.14;
    letter-spacing: 1.25px;
    text-align: center;
    color: var(--primary);
    background-color: transparent;
    border: transparent;

    &.disabled {
      opacity: 0.5;
    }

    &:hover {
      border-radius: 5px;
      background-color: rgba(76, 157, 217, 0.1);
    }
  }

  .nav-item.nav-link.active {
    border-radius: 5px;
    color: var(--primary);
    border: transparent;
    background-color: rgba(76, 157, 217, 0.1);
  }
`;
