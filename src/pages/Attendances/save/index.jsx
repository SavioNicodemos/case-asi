import { useEffect, useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const attendanceSelectOptions = ['Present', 'Absent', 'Tardy'];

function AttendanceSave() {
  const [initialValue, setInitialValue] = useState({
    student_name: '',
    class: '',
    date: '2020-01-01',
    attendance: '',
    excused: null,
    note: '',
  });

  const queryParams = new URLSearchParams(window.location.search);
  const attendanceId = queryParams.get('attendanceId');

  const [inputValues, setInputValues] = useState(initialValue);
  const navigate = useNavigate();

  function onChange(ev) {
    const { name, value } = ev.target;

    setInputValues({ ...inputValues, [name]: value });
  }

  async function onSubmit(ev) {
    ev.preventDefault();

    const endpoint = '/attendances' + (attendanceId ? `/${attendanceId}` : '/');
    const request = attendanceId ? api.patch : api.post;
    await request(endpoint, inputValues);

    navigate('/attendances');
  }

  useEffect(() => {
    attendanceId &&
      api.get('attendances/' + attendanceId).then((response) => {
        setInitialValue(response.data);
        setInputValues(response.data);
      });
  }, [attendanceId]);

  return (
    <Container fluid>
      <h3>Add/Edit attendances</h3>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Student name</Form.Label>
              <Form.Control
                type="text"
                name="student_name"
                onChange={onChange}
                defaultValue={initialValue.student_name}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                name="class"
                onChange={onChange}
                defaultValue={initialValue.class}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                onChange={onChange}
                defaultValue={initialValue.date}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Attendance</Form.Label>

              <Form.Select
                aria-label="Default select example"
                name="attendance"
                onChange={onChange}
              >
                {attendanceSelectOptions.map((attendanceOption) => (
                  <option
                    selected={attendanceOption === initialValue.attendance}
                    key={attendanceOption}
                    value={attendanceOption}
                  >
                    {attendanceOption}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Excused</Form.Label>
              <Form.Check
                type="checkbox"
                name="excused"
                onChange={onChange}
                defaultChecked={initialValue.excused}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="note"
                onChange={onChange}
                defaultValue={initialValue.note}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default AttendanceSave;
