import { useState } from 'react';

import ITableColumn from 'models/ITableColumn';
import { HeadCellWrapper, IconWrapper, SortIconUp, SortIconDown } from './Table.styles';
import { SORT_ORDER } from 'utils/enums';

interface IProps {
  column: ITableColumn;
  // onSort?: (sortBy: string, sortOrder: SORT_ORDER) => void;
}

const HeadCell = ({ column }: IProps) => {
  const [sortOrder, setSortOrder] = useState(column.sortOrder);

  const handleSort = () => {
    const order = sortOrder === SORT_ORDER.DESC ? SORT_ORDER.ASC : SORT_ORDER.DESC;
    setSortOrder(order);

    // if (onSort && column.sortBy) onSort(column.sortBy, order);
  };

  return (
    <HeadCellWrapper>
      <div className="d-flex align-items-center">
        {column.name}
        {column.sortable && (
          <IconWrapper>
            <SortIconUp order={sortOrder} onClick={handleSort} />
            <SortIconDown order={sortOrder} onClick={handleSort} />
          </IconWrapper>
        )}
      </div>
    </HeadCellWrapper>
  );
};

export default HeadCell;
