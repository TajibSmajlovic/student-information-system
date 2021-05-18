import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import mockedData from 'data/courses_data.json';
import ITableColumn from 'models/ITableColumn';
import { Table, ListHeader, LinkButton, TableActionsToggle, Pagination } from 'components';
import { LOCALIZATION_PAGES } from 'utils/constants';
import ITableActionToggle from 'models/ITableActionToggle';

const CoursesManagement = () => {
  const { t } = useTranslation(LOCALIZATION_PAGES.COURSES_MANAGEMENT);
  const columns: ITableColumn[] = [
    {
      name: t('course_id'),
      sortable: true,
    },
    {
      name: t('course_name'),
      sortable: true,
    },
    { name: t('faculty'), sortable: true },
    {
      name: t('Type'),
      sortable: true,
    },
    {
      name: t('Students NO.'),
      sortable: true,
    },
    {
      name: t('additional_field'),
      sortable: true,
    },
    { name: 'Actions' },
  ];

  const tableActions: ITableActionToggle[] = [
    { value: 'Edit', onClick: () => {} },
    { value: 'Delete', onClick: () => {} },
  ];

  return (
    <Container fluid>
      <ListHeader onSearch={() => {}}>
        <LinkButton to={`courses/add`} text="Add Course" />
      </ListHeader>
      <Table columns={columns}>
        {mockedData.data?.length &&
          mockedData.data.map((d, i) => (
            <tr key={i}>
              <th>{d.id}</th>
              <td>{d.courseName}</td>
              <td>{d.faculty}</td>
              <td>{d.type}</td>
              <td>{d.studentsNumber}</td>
              <td>{d.additionalField3}</td>
              <td>
                <TableActionsToggle items={tableActions} />
              </td>
            </tr>
          ))}
      </Table>
      <Pagination maxPages={2} page={2} count={25} />
    </Container>
  );
};

export default CoursesManagement;
