import { Container } from 'react-bootstrap';

import { Calendar } from 'components';
import events from 'data/admin_calendar';

const AcademicCalendar = () => {
  /*
  events.forEach(element => {
    element.backgroundColor = '';
    element.borderColor = '';
  });
*/

  return (
    <Container fluid>
      <Calendar events={events} />
    </Container>
  );
};

export default AcademicCalendar;
