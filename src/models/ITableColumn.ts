import { SORT_ORDER } from 'utils/enums';

export default interface ITableColumn {
  name: string;
  sortable?: boolean;
  sortOrder?: SORT_ORDER;
}
