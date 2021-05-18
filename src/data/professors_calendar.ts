import adminEvents from './admin_calendar';

const events = [
  ...adminEvents,
  {
    groupId: '999',
    title: 'Course Lecture',
    start: getDate('YEAR-MONTH-06T16:00:00+00:00'),
  },
  {
    groupId: '999',
    title: 'Course Lecture',
    start: getDate('YEAR-MONTH-20T16:00:00+00:00'),
  },
  { title: 'Some event 1', start: getDate('YEAR-MONTH-18T12:00:00+00:00') },
  { title: 'Some event 2', start: getDate('YEAR-MONTH-19T07:00:00+00:00') },
  { title: 'Meeting', start: getDate('YEAR-MONTH-18T14:30:00+00:00') },
  { title: 'Course Lecture', start: getDate('YEAR-MONTH-18T17:30:00+00:00') },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = '0' + month;
  }

  return dayString.replace('YEAR', year).replace('MONTH', month);
}

export default events;
