import styled, { css } from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import { FaEllipsisH } from 'react-icons/fa';

import Select from 'components/Select/Select';
import ITableActionToggle from 'models/ITableActionToggle';

const TableOptionsToggle = ({ items }) => {
  const onSelect = (item: ITableActionToggle) => {
    item.onClick();
  };

  const Toggle = () => {
    return (
      <DropdownToggle>
        <FaEllipsisH />
      </DropdownToggle>
    );
  };

  return <Select<ITableActionToggle> ToggleElement={Toggle} items={items} onSelect={onSelect} align="left" />;
};

const DropdownToggleOverride = css`
  background-color: transparent !important;
  border: 0 !important;
  color: var(--secondary) !important;
  box-shadow: 0 0 0 0 rgba(139, 142, 146, 0.5) !important;
`;

const DropdownToggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
  border: 0;
  color: var(--secondary);

  &:hover,
  &:active,
  &:focus {
    ${DropdownToggleOverride}
  }

  &:after {
    display: none;
  }
`;

export default TableOptionsToggle;
