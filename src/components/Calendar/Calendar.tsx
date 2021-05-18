import { Row, Col, Form } from 'react-bootstrap';
import FullCalendar, { EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import './styles.css';
import { useNotifications } from 'context/NotificationContext';
import Input from 'components/Form/Input/Input';
import { Modal, Select, Label } from 'components';
import { useToggle } from 'utils/hooks';
import { getUser } from 'store/reducers/sessionReducer';
import { useSelector } from 'react-redux';
import IUser from 'models/redux/IUser';
import { USER_ROLES } from 'utils/enums';
import ICourse from 'models/ICourse';

const Calendar = ({ events = [], editable = true } = {}) => {
  const { showNotification } = useNotifications();
  const [isShowing, setIsShowing] = useToggle(false);
  const [isAllDay, setIsAllDay] = useToggle(false);
  const { role } = useSelector(getUser) as IUser;

  return (
    <div>
      <FullCalendar
        // headerToolbar={{}}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        editable={editable}
        selectable={editable}
        weekends={false}
        select={editable && setIsShowing}
        events={events}
        eventContent={(e: EventContentArg) => (
          <>
            <b>{e.timeText}</b>
            <i>{e.event.title}</i>
          </>
        )}
      />
      <Modal
        onClose={setIsShowing}
        onConfirm={() => {
          showNotification('Announcement successfully created');
          setIsShowing();
        }}
        closeButtonText="Cancel"
        confirmButtonText="Add Event"
        title="Add new Event?"
        show={isShowing}
      >
        {role === USER_ROLES.PROFESSOR && (
          <Row className="mb-4">
            <Col md="6">
              <Label label="Course" />
              <Select<ICourse>
                activeItem={{ name: 'Select course' }}
                onSelect={() => {}}
                items={[
                  { id: 1, value: 'Course I' },
                  { id: 2, value: 'Course II' },
                  { id: 3, value: 'Course III' },
                ]}
              />
            </Col>
          </Row>
        )}

        <Row>
          <Col md="6">
            <Input label="Event title" />
          </Col>
          <Col md="3">
            <Form.Group controlId="formBasicCheckbox" style={{ position: 'relative', top: 30 }}>
              <Form.Check type="checkbox" label="All day event" value={isAllDay} onChange={setIsAllDay} />
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="formBasicCheckbox1" style={{ position: 'relative', top: 30 }}>
              <Form.Check type="checkbox" label="Repeating event" />
            </Form.Group>
          </Col>
        </Row>
        {role === USER_ROLES.ADMIN && (
          <Row className="mt-3">
            <Col md="2">
              <Input label="Color" type="color" />
            </Col>
          </Row>
        )}
        <Row className="mt-4">
          <Col md="6">
            <Input label="Start date" type="date" />
          </Col>
          <Col md="6">
            <Input type="date" label="End date" />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md="6">
            <Input label="Start time" type="time" disabled={isAllDay} />
          </Col>
          <Col md="6">
            <Input type="time" label="End time" disabled={isAllDay} />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Calendar;
