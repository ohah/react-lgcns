import styled from '@emotion/styled/macro';
import { Col, Container, Row, Button as BootButton, ButtonProps } from 'react-bootstrap';

const Button = styled(BootButton)<ButtonProps>`
  background-color: green;
`;

const Boot = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <Button variant="outline-success" href="#">
            커스텀 버튼
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>Column</Col>
      </Row>
      <Row>
        <Col>Column</Col>
      </Row>
    </Container>
  );
};

export default Boot;
