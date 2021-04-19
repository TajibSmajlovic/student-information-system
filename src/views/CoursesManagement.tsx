import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import mockedData from 'data/courses_data.json';
import ITableColumn from 'models/ITableColumn';
import { Table } from 'components';
import { Link } from 'components/Typography';
import { LOCALIZATION_PAGES } from 'utils/constants';

const CoursesManagement = () => {
  const { t } = useTranslation(LOCALIZATION_PAGES.COURSES_MANAGEMENT);
  const { t: tCommon } = useTranslation(LOCALIZATION_PAGES.COMMON);
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
      name: t('additional_field'),
      sortable: true,
    },
    {
      name: t('additional_field'),
      sortable: true,
    },
    {
      name: t('additional_field'),
      sortable: true,
    },
    { name: tCommon('actions') },
  ];

  return (
    <Container fluid>
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
                <Link to={`courses-management/${d.id}`} linkText={t('edit')} />
              </td>
            </tr>
          ))}
      </Table>
    </Container>
  );
};

export default CoursesManagement;
