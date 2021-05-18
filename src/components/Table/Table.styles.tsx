import styled, { css } from 'styled-components';
import { Table } from 'react-bootstrap';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

import { SORT_ORDER } from 'utils/enums';

export const TableWrapper = styled(Table)`
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.04);
  border: solid 1px #eaedf3;
  background-color: #ffffff;
  border-radius: 4px;

  && th,
  td,
  thead th div {
    font-size: 14px;
    vertical-align: middle;
  }

  && th {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.57;
    color: var(--dark);
  }

  & td:first-child,
  th:first-child {
    padding-left: 3.5rem;
  }

  & td:last-child,
  th:last-child {
    padding-right: 2.5rem;
    justify-content: flex-start;
  }

  th {
    color: var(--dark);
  }

  td {
    color: var(--secondary);
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: inline;
  margin-left: 5px;
`;

export const SortIconUp = styled(FaSortUp)`
  opacity: ${({ order }) => (order === undefined || order === SORT_ORDER.ASC ? '0.3' : '1')};
  cursor: pointer;
  position: absolute;
  top: -8px;
  left: 0;
`;

export const SortIconDown = styled(FaSortDown)`
  opacity: ${({ order }) => (order === undefined || order === SORT_ORDER.DESC ? '0.3' : '1')};
  cursor: pointer;
  position: absolute;
  top: -8px;
  left: 0;
`;

const Cell = css`
  color: var(--secondary) !important;
  font-family: 'Roboto';
  font-weight: 500;
  vertical-align: middle !important;
`;

export const HeadCellWrapper = styled.th`
  ${Cell};
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  border-bottom: 1px solid #eaedf3 !important;
  text-transform: uppercase;
  font-size: 12px !important;
`;
