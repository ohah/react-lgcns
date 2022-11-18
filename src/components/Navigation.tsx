import logo from 'images/logo.svg';
import { Nav, Row, Image, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Row className="d-flex align-items-center">
      <Col xs={2}>
        <Image src={logo} alt="로고" width="100%" thumbnail className="px-2 py-1 round" />
      </Col>
      <Col xs={10}>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/profile">
              Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
};
export default Navigation;
