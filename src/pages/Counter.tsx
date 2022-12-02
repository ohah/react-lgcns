import { useRef } from 'react';

import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useCounter } from 'store/counter/hook';

const Counter = () => {
  const { count, increment, decrement, incrementByAmount } = useCounter();
  const userInput = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Text onClick={() => increment()}>+</InputGroup.Text>
          <Form.Control aria-label="Conter" value={count} />
          <InputGroup.Text onClick={() => decrement()}>-</InputGroup.Text>
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <Form.Control placeholder="숫자 만큼 증가" type="number" ref={userInput} />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              if (userInput.current) {
                incrementByAmount(userInput.current.valueAsNumber);
              }
            }}
          >
            실행
          </Button>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default Counter;
