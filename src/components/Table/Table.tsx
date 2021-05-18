import HeadCell from 'components/Table/HeadCell';
import ITableColumn from 'models/ITableColumn';
import { TableWrapper } from './Table.styles';

interface IProps {
  columns?: ITableColumn[];
  children: React.ReactNode;
  // onSort?: (sortBy: string, sortOrder: SORT_ORDER) => void;
}

const Table = ({ columns, children }: IProps) => (
  <TableWrapper>
    {columns?.length && (
      <thead>
        <tr>
          {columns.map((c, i) => (
            <HeadCell
              key={i}
              column={c}
              // onSort={onSort}
            />
          ))}
        </tr>
      </thead>
    )}
    <tbody>{children}</tbody>
  </TableWrapper>
);

export default Table;
