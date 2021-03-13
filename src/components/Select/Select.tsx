import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

interface IProps<T> {
  activeItem?: T | any;
  items: T[];
  variant?: string;
  align?: string;
  onSelect: (arg: T) => void;
  ToggleElement?: () => JSX.Element;
}

const Select = <T,>({ activeItem, items, variant = 'light', align = 'right', onSelect, ToggleElement }: IProps<T>) => (
  <Dropdown>
    {ToggleElement ? <ToggleElement /> : <Dropdown.Toggle variant={variant}>{activeItem.name}</Dropdown.Toggle>}
    <CustomDropdownMenu align={align}>
      {items.map((item: any) => (
        <DropdownItemBox
          key={item.id}
          onClick={() => onSelect(item)}
          active={activeItem?.value === item.value}
          disabled={item?.disabled}
        >
          <DropdownItemText value={item.value} />
        </DropdownItemBox>
      ))}
    </CustomDropdownMenu>
  </Dropdown>
);

const CustomDropdownMenu = styled(Dropdown.Menu)`
  max-height: 250px;
  overflow: auto;
`;

const DropdownItemBox = styled(Dropdown.Item)`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const DropdownItemText = styled(({ value, ...rest }) => <div {...rest}>{value}</div>)`
  font-size: 14px;
  line-height: 1.57;
`;

export default Select;
