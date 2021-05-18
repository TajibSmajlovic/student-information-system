import { ListGroup } from 'react-bootstrap';
import { BsCheck, BsX } from 'react-icons/bs';

import mockedData from 'data/course_details_students.json';
import { Title } from 'components/Typography';
import { useSelector } from 'react-redux';
import { getUser } from 'store/reducers/sessionReducer';
import IUser from 'models/redux/IUser';
import { USER_ROLES } from 'utils/enums';

const dates = ['May 25th', 'May 18th', 'May 11th', 'May 4th', 'April 30th', 'April 25th'];

const Attendance = () => {
  const { role } = useSelector(getUser) as IUser;

  const data = role === USER_ROLES.STUDENT ? [mockedData.data[0]] : mockedData.data;

  return (
    <>
      {dates.map((d, datesIndex) => (
        <ListGroup className="mb-5">
          <Title style={{ fontSize: '1.3rem' }}>{d}</Title>
          {data.map((d, i) => (
            <div style={{ margin: '.3rem 0' }}>
              <ListGroup.Item style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', fontSize: '1rem' }}>
                <div style={{ fontSize: '.7rem', marginBottom: 7 }}>{d.studentId}</div>
                {d.studentName}
                {datesIndex === 0 && role !== USER_ROLES.STUDENT ? (
                  <span style={{ float: 'right', cursor: 'pointer' }}>
                    <BsCheck size={20} className="mr-3" />
                    <BsX size={23} />
                  </span>
                ) : (
                  <span style={{ float: 'right' }}>
                    <div>{Math.random() > 0.5 ? <BsCheck size={20} /> : <BsX size={23} />}</div>
                  </span>
                )}
              </ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      ))}
    </>
  );
};

export default Attendance;
