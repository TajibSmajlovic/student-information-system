import { Dropdown } from 'react-bootstrap';

import { CustomDropdownMenu, DropdownItemBox, DropdownItemText } from './Select.styles';

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
    {ToggleElement ? <ToggleElement /> : <Dropdown.Toggle variant={variant}>{activeItem?.name}</Dropdown.Toggle>}
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

export default Select;
