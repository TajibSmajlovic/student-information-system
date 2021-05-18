import { Button } from 'react-bootstrap';

import mockedData from 'data/students_data.json';
import ITableColumn from 'models/ITableColumn';

import { Table } from 'components';
import Input from 'components/Form/Input/Input';

const Grades = ({ disabled = false } = {}) => {
  const columns: ITableColumn[] = [
    {
      name: 'Student ID',
    },
    {
      name: 'Student Name',
    },
    { name: 'Quiz 1' },
    {
      name: 'Quiz 2',
    },
    {
      name: 'Homework 1',
    },
    {
      name: 'Homework 2',
    },
    {
      name: 'Midterm',
    },
    {
      name: 'Final Exam',
    },
  ];

  const data = disabled ? [mockedData.data[0]] : mockedData.data;

  return (
    <>
      <Table columns={columns}>
        {data.map((d, i) => (
          <tr key={i}>
            <th>{d.id}</th>
            <td>{d.courseName}</td>
            <td>
              <Input disabled={disabled} style={{ width: 100 }} placeholder={disabled ? 75 : ''} />
            </td>
            <td>
              <Input disabled={disabled} style={{ width: 100 }} placeholder={disabled ? 95 : ''} />
            </td>
            <td>
              <Input disabled={disabled} style={{ width: 100 }} placeholder={disabled ? 85 : ''} />
            </td>
            <td>
              <Input disabled={disabled} style={{ width: 100 }} placeholder={disabled ? 65 : ''} />
            </td>
            <td>
              <Input disabled={disabled} style={{ width: 100 }} placeholder={disabled ? 45 : ''} />
            </td>
            <td>
              <Input disabled={disabled} style={{ width: 100 }} placeholder={disabled ? '-' : ''} />
            </td>
            {!disabled && (
              <td style={{ width: 50 }}>
                <Button className="px-4" variant="secondary">
                  SAVE
                </Button>
              </td>
            )}
          </tr>
        ))}
      </Table>
    </>
  );
};

export default Grades;
