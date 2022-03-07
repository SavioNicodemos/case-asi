import { useEffect, useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

function StudentSave() {
  const [initialValue, setInitialValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date_of_joining: Date.now(),
    date_of_leaving: Date.now(),
    date_of_birthday: Date.now(),
  });

  const queryParams = new URLSearchParams(window.location.search);
  const studentId = queryParams.get('studentId');

  const [inputValues, setInputValues] = useState(initialValue);
  const navigate = useNavigate();

  function onChange(ev) {
    const { name, value } = ev.target;

    setInputValues({ ...inputValues, [name]: value });
  }

  async function onSubmit(ev) {
    ev.preventDefault();

    const endpoint = '/students' + (studentId ? `/${studentId}` : '/');
    const request = studentId ? api.patch : api.post;
    await request(endpoint, inputValues);

    navigate('/students');
  }

  useEffect(() => {
    studentId &&
      api
        .get('students/' + studentId)
        .then((response) => {
          setInitialValue(response.data);
          setInputValues(response.data);
        });
  }, [studentId]);

  return (
    <Container fluid>
      <h3>Add/Edit Students</h3>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                onChange={onChange}
                defaultValue={initialValue.first_name}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                onChange={onChange}
                defaultValue={initialValue.last_name}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Student email"
                name="email"
                onChange={onChange}
                defaultValue={initialValue.email}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Joining date</Form.Label>
              <Form.Control
                type="date"
                name="date_of_joining"
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Leaving date</Form.Label>
              <Form.Control
                type="date"
                name="date_of_leaving"
                onChange={onChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Day of birthday</Form.Label>
              <Form.Control
                type="date"
                name="date_of_birthday"
                onChange={onChange}
                defaultValue={initialValue.date_of_birthday}
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

export default StudentSave;
