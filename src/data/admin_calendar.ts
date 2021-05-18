const events = [
  { title: 'IUS Open Day', start: getDate('YEAR-MONTH-05'), backgroundColor: '#28a745', borderColor: '#28a745' },
  {
    id: 'neki_id',
    title: 'International Labor Day [Non working Day]',
    start: getDate('YEAR-MONTH-03'),
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  {
    title: 'Preparation for Final Exams',
    start: getDate('YEAR-MONTH-24'),
    end: getDate('YEAR-MONTH-29'),
    backgroundColor: '#ffc107',
    borderColor: '#ffc107',
  },
  {
    id: 'neki_id',
    title: 'Eid',
    start: getDate('YEAR-MONTH-13'),
    end: getDate('YEAR-MONTH-15'),
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  {
    title: 'Some event',
    start: getDate('YEAR-MONTH-18'),
    end: getDate('YEAR-MONTH-19'),
  },
  {
    title: 'Some event',
    start: getDate('YEAR-MONTH-10'),
  },
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
