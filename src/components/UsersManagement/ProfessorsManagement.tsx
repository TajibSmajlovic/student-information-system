import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import mockedData from 'data/professors_data.json';
import ITableColumn from 'models/ITableColumn';
import { Table, ListHeader, LinkButton, Pagination, TableActionsToggle } from 'components';
import { LOCALIZATION_PAGES } from 'utils/constants';
import ITableActionToggle from 'models/ITableActionToggle';

const ProfessorsManagement = () => {
  const { t } = useTranslation(LOCALIZATION_PAGES.PROFESSORS_MANAGEMENT);
  const { t: tCommon } = useTranslation(LOCALIZATION_PAGES.COMMON);
  const columns: ITableColumn[] = [
    {
      name: t('professor id'),
      sortable: true,
    },
    {
      name: t('professor name'),
      sortable: true,
    },
    { name: t('faculty'), sortable: true },
    {
      name: t('department'),
      sortable: true,
    },
    {
      name: t('title'),
      sortable: true,
    },
    {
      name: t('classes'),
      sortable: true,
    },
    { name: tCommon('actions') },
  ];

  const tableActions: ITableActionToggle[] = [
    { value: 'Edit', onClick: () => {} },
    { value: 'Delete', onClick: () => {} },
  ];

  return (
    <Container fluid>
      <ListHeader onSearch={() => {}}>
        <LinkButton to={`professors/add`} text="Add Professor" />
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
              <td>
                <TableActionsToggle items={tableActions} />
              </td>
            </tr>
          ))}
      </Table>
      <Pagination maxPages={3} page={3} count={25} />
    </Container>
  );
};

export default ProfessorsManagement;
