import { Container, Row, Col, Form } from 'react-bootstrap';

import { useNotifications } from 'context/NotificationContext';
import mockedData from 'data/announcements.json';
import { useToggle } from 'utils/hooks';
import ITableActionToggle from 'models/ITableActionToggle';
import ITableColumn from 'models/ITableColumn';
import Input from 'components/Form/Input/Input';
import { Table, ListHeader, LinkButton, TableActionsToggle, Pagination, Modal } from 'components';
import { Label } from 'components/Typography';
import { getUser } from 'store/reducers/sessionReducer';
import { useSelector } from 'react-redux';
import IUser from 'models/redux/IUser';
import { USER_ROLES } from 'utils/enums';

const Announcements = () => {
  const { showNotification } = useNotifications();
  const { role } = useSelector(getUser) as IUser;
  const [isShowing, setIsShowing] = useToggle(false);
  const columns: ITableColumn[] = [
    {
      name: 'Announcement ID',
      sortable: true,
    },
    {
      name: 'Title',
      sortable: true,
    },
    {
      name: 'Date',
      sortable: true,
    },
    {
      name: 'Additional field',
      sortable: true,
    },
    {
      name: 'Additional field',
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
      <ListHeader onSearch={role === USER_ROLES.ADMIN ? () => {} : null}>
        <LinkButton onClick={setIsShowing} text="Add Announcement" />
      </ListHeader>
      <Table columns={columns}>
        {role !== USER_ROLES.ADMIN ? (
          <tr>
            <th>{mockedData.data[5].id}</th>
            <td>{mockedData.data[5].title}</td>
            <td>{mockedData.data[5].date}</td>
            <td>{mockedData.data[5].additionalField}</td>
            <td>{mockedData.data[5].additionalField2}</td>
            <td>
              <TableActionsToggle items={tableActions} />
            </td>
          </tr>
        ) : (
          mockedData.data.map((d, i) => (
            <tr key={i}>
              <th>{d.id}</th>
              <td>{d.title}</td>
              <td>{d.date}</td>
              <td>{d.additionalField}</td>
              <td>{d.additionalField2}</td>
              <td>
                <TableActionsToggle items={tableActions} />
              </td>
            </tr>
          ))
        )}
      </Table>
      {role === USER_ROLES.ADMIN && <Pagination maxPages={5} page={2} count={25} />}
      <Modal
        onClose={setIsShowing}
        onConfirm={() => {
          showNotification('Announcement successfully created');
          setIsShowing();
        }}
        closeButtonText="Cancel"
        confirmButtonText="Add Announcement"
        title="Add new Announcement?"
        show={isShowing}
      >
        <Row>
          <Col md="6">
            <Input label="Event title" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Input label="Additional Field 1" />
          </Col>
          <Col md="6">
            <Input label="Additional Field 2" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Label label="Details" />
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Input label="Date" type="date" />
          </Col>
        </Row>
      </Modal>
    </Container>
  );
};

export default Announcements;
