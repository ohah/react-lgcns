import logo from 'images/logo.svg';
import { Nav, Row, Image, Col, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Row className="d-flex align-items-center z-10">
      <Col xs={2}>
        <Link to="/">
          <Image src={logo} alt="로고" width="100%" className="px-2 py-1 round" />
        </Link>
      </Col>
      <Col xs={10}>
        <Nav variant="pills" defaultActiveKey="/">
          <NavDropdown title="Components" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/components/tooltip">
              Tooltip
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/components/dropdown">
              Dropdown
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/components/tab">
              Tab
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/components/toggle">
              Toggle
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/components/modal">
              Modal
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/components/toast">
              Toast
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/Boot">
              BootStrap
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
