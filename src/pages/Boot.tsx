import { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

const Boot = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(5);
  }, []);

  return (
    //렌더링 부분
    <Container className="text-center">
      <Row>
        <Col>Column</Col>
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
