import adminEvents from './admin_calendar';

const events = [
  ...adminEvents,
  { title: 'CS521', start: getDate('YEAR-MONTH-18T12:00:00+00:00') },
  { title: 'CS666', start: getDate('YEAR-MONTH-19T07:00:00+00:00') },
  { title: 'CS402', start: getDate('YEAR-MONTH-18T14:30:00+00:00') },
  { title: 'CS123', start: getDate('YEAR-MONTH-17T17:30:00+00:00') },
  { title: 'CS521', start: getDate('YEAR-MONTH-20T12:00:00+00:00') },
  { title: 'CS666', start: getDate('YEAR-MONTH-22T07:00:00+00:00') },
  { title: 'CS402', start: getDate('YEAR-MONTH-12T14:30:00+00:00') },
  { title: 'CS123', start: getDate('YEAR-MONTH-11T17:30:00+00:00') },
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
