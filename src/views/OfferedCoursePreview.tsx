import { Row, Col, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { Card, Text, Label } from 'components';
import Input from 'components/Form/Input/Input';
import { useHistory } from 'react-router';
import { routes } from 'utils/routes/routes';

const OfferedCoursePreview = () => {
  const history = useHistory();

  return (
    <Container fluid>
      <Card>
        <Row className="mb-4">
          <Col md="2">
            <Button variant="primary" className="px-4" onClick={() => history.push(routes.OFFERED_COURSES.path)}>
              Back
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="12" lg="3">
            <UserAvatar>
              <Text fontSize="5rem" color="white">
                {'CS542'}
              </Text>
            </UserAvatar>
          </Col>

          <Col sm="12" lg="9">
            <>
              <Text className="mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                Basic Information
              </Text>
              <Row>
                <Col xs="12" lg="4" className="my-2">
                  <Input type="text" label="Course name" disabled={true} value={'COurse Name'} />
                </Col>
                <Col xs="12" lg="4" className="my-2">
                  <Input type="text" autoFocus label="Course Code" disabled={true} value={'CS542'} />
                </Col>
              </Row>
              <div style={{ flexDirection: 'column' }}>
                <Label label="Schedule" />
                <Row>
                  <Col xs="12" lg="2" className="my-2">
                    <Input name="asd" type="time" value={'12:00'} disabled={true} />
                  </Col>
                  <Col xs="12" lg="2" className="my-2">
                    <Input type="time" value={'15:00'} disabled={true} />
                  </Col>
                  <Col xs="12" lg="4" className="my-2">
                    <Input type="date" disabled={true} />
                  </Col>
                </Row>

                <Row>
                  <Col xs="12" lg="4" className="my-2">
                    <Input label="Professor" disabled={true} value={'Professor name'} />
                  </Col>
                  <Col xs="12" lg="4" className="my-2">
                    <Input type="email" name="email" label="e-mail" disabled={true} value={'Some value'} />
                  </Col>
                </Row>
              </div>
            </>
            <Break className="my-5" />

            <>
              <Text className="mt-4 mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                Section 2
              </Text>
              <Row>
                <Col xs="12" lg="4" className="my-2">
                  <Input disabled={true} type="text" label="Textbook" value={'Some value'} />
                </Col>
                <Col xs="12" lg="4" className="my-2">
                  <Input disabled={true} type="text" label="Label" />
                </Col>
              </Row>
              <Row>
                <Col xs="12" lg="12" className="my-2">
                  <Label label="Details" value={'Some value'} />
                  <Input
                    style={{ height: 100 }}
                    disabled={true}
                    as="textarea"
                    rows={5}
                    value={
                      'The student is expected to carry out a semester long project in order to demonstrate the skills required to implement task and user targeted user interface. First 10 weeks, there will be 3 hours of lectures including project guidance. For the remaining weeks 4 weeks, there will be regular consultation meetings with the students in order to guide and evaluate the term project.'
                    }
                  />
                </Col>
              </Row>
            </>

            <>
              <Text className="mt-4 mb-3" fontWeight="500" lineHeight="1.88" fontSize="1rem">
                Section 3
              </Text>
              <Row>
                <Col xs="12" lg="4" className="my-2">
                  <Input disabled={true} type="text" label="Label" value={'Some value'} />
                </Col>
                <Col xs="12" lg="4" className="my-2">
                  <Input disabled={true} type="text" label="Label" value={'Some value'} />
                </Col>
              </Row>
              <Row>
                <Col xs="12" lg="12" className="my-2">
                  <Label label="Label" value={'Some value'} />
                  <Input
                    style={{ height: 100 }}
                    disabled={true}
                    as="textarea"
                    rows={5}
                    value={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
                  />
                </Col>
              </Row>
            </>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

const Break = styled.hr`
  background-color: #f5f5f5;
`;

const UserAvatar = styled.div`
  height: 215px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  cursor: default;
  background-color: var(--disabled);
`;

export default OfferedCoursePreview;
