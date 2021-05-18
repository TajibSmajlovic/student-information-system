import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import mockedData from 'data/students_data.json';
import ITableColumn from 'models/ITableColumn';
import { Table, ListHeader, LinkButton, TableActionsToggle, Pagination } from 'components';
import { LOCALIZATION_PAGES } from 'utils/constants';
import ITableActionToggle from 'models/ITableActionToggle';

const StudentsManagement = ({ showPagination = true, showAddButton = true, showActions = true } = {}) => {
  const { t } = useTranslation(LOCALIZATION_PAGES.STUDENTS_MANAGEMENT);
  const { t: tCommon } = useTranslation(LOCALIZATION_PAGES.COMMON);
  const columns: ITableColumn[] = [
    {
      name: t('student id'),
      sortable: true,
    },
    {
      name: t('student name'),
      sortable: true,
    },
    { name: t('faculty'), sortable: true },
    {
      name: t('department'),
      sortable: true,
    },
    {
      name: t('cycle'),
      sortable: true,
    },
    {
      name: t('cgpa'),
      sortable: true,
    },
  ];

  if (showActions) columns.push({ name: tCommon('actions') });

  const tableActions: ITableActionToggle[] = [
    { value: 'Edit', onClick: () => {} },
    { value: 'Delete', onClick: () => {} },
  ];

  return (
    <Container fluid>
      <ListHeader onSearch={() => {}}>
        {showAddButton && <LinkButton to={`students/add`} text="Add Student" />}
      </ListHeader>
      <Table columns={columns}>
        {mockedData.data?.length &&
          mockedData.data.map((d, i) => (
            <tr key={i}>
              <th>{d.id}</th>
              <td>{d.courseName}</td>
              <td>{d.faculty}</td>
              <td>{d.additionalField1}</td>
              <td>{d.additionalField2}</td>
              <td>{d.additionalField3}</td>
              {showActions && (
                <td>
                  <TableActionsToggle items={tableActions} />
                </td>
              )}
            </tr>
          ))}
      </Table>
      {showPagination && <Pagination maxPages={9} page={9} count={25} />}
    </Container>
  );
};

export default StudentsManagement;
