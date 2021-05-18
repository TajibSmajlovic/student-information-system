import { Container } from 'react-bootstrap';

import { Calendar } from 'components';
import events from 'data/professors_calendar';

const AcademicCalendar = () => {
  return (
    <Container fluid>
      <Calendar events={events} />
    </Container>
  );
};

export default AcademicCalendar;
