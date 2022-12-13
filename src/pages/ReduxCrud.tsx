/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import { Button, Container, Form, InputGroup, ListGroup, Row, Stack } from 'react-bootstrap';
import { useReduxTodos } from 'store/todo/hook';
import { ITodos } from 'store/todo/slice';

const ReduxCrud = () => {
  const { todoList: data, create, update, remove } = useReduxTodos();

  const [todo, setTodo] = useState<Omit<ITodos, 'id'>>({ title: '', content: '' });
  return (
    <Container>
      <Stack gap={3}>
        <ListGroup as="ol" numbered>
          {data?.map(row => {
            return (
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={row.id}>
                <div className="ms-2 me-auto">
                  <div className="mb-2">
                    <InputGroup>
                      <InputGroup.Text>제목</InputGroup.Text>
                      <Form.Control defaultValue={row.title} />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Text>내용</InputGroup.Text>
                      <Form.Control defaultValue={row.content} />
                    </InputGroup>
                  </div>
                </div>
                <div>
                  <Row className="mb-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        update({ id: row.id, title: '수정', content: '수정입니다' });
                      }}
                    >
                      수정
                    </Button>
                  </Row>
                  <Row>
                    <Button variant="danger" size="sm" onClick={() => remove({ id: row.id })}>
                      삭제
                    </Button>
                  </Row>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        <Stack gap={2}>
          <div>
            <InputGroup>
              <InputGroup.Text id="input-title">제목</InputGroup.Text>
              <Form.Control
                placeholder="제목"
                aria-label="제목"
                aria-describedby="input-title"
                defaultValue={todo.title}
                onChange={e => {
                  setTodo(todo => {
                    return {
                      ...todo,
                      title: e.target?.value || '',
                    };
                  });
                }}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="input-content">내용</InputGroup.Text>
              <Form.Control
                placeholder="내용"
                aria-label="내용"
                aria-describedby="input-content"
                defaultValue={todo.content}
                onChange={e => {
                  setTodo(todo => {
                    return {
                      ...todo,
                      content: e.target?.value || '',
                    };
                  });
                }}
              />
            </InputGroup>
          </div>
          <Button
            variant="success"
            onClick={() => {
              create(todo);
              setTodo({
                title: '',
                content: '',
              });
            }}
          >
            추가
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ReduxCrud;
