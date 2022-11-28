import { useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal, Tooltip } from 'components';
import logo from 'images/logo.svg';
import react from 'images/react.svg';
import { Alert, Col, Image, Row } from 'react-bootstrap';


const Spin = keyframes`
  0% { 
    transform:rotate(0deg);
  }
  100%  {
    transform: rotate(360deg);
  }
`;
const ReactLogo = styled(Image)`
  animation: ${Spin} infinite 20s linear;
  height: 40vmin;
  width: 50%;
`;
const LgCnsLogo = styled(Image)`
  width: 40vmin;
  width: 50%;
`;

const Home = () => {
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <>
      <Row style={{ overflow: 'hidden' }}>
        <Col>
          <ReactLogo src={react} alt="로고" className="px-2 py-1 round" />
          <LgCnsLogo src={logo} alt="로고" className="px-2 py-1 round" />
        </Col>
      </Row>
      <Row>
        <Col onClick={() => setShow(!isShow)}>
          <Alert variant="info">Hello, React!</Alert>
          <Modal isShow={isShow} close={() => setShow(false)}>
            무야호
          </Modal>
        </Col>
        <Tooltip title="a"> sadf </Tooltip>
      </Row>
    </>
  );
};

export default Home;
