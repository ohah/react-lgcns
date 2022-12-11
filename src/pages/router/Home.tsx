import styled from '@emotion/styled/macro';
import { Alert, Button, Col, Row, Stack } from 'react-bootstrap';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';

const RouterWrapper = styled.div`
  .active {
    color: red;
  }
`;

const Home = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  return (
    <RouterWrapper>
      <Stack gap={2}>
        <Row>
          <Col>
            <NavLink to="/"> 홈 </NavLink>
          </Col>
          <Col>
            <NavLink to="/router"> 현재페이지 </NavLink>
          </Col>
        </Row>
        <Row>
          <Link to="/router?page=1&limit=10"> 쿼리스트링 </Link>
        </Row>
        <Row>
          <Button type="button" onClick={goToHome}>
            메인으로!
          </Button>
        </Row>
        <Alert>
          <p className="page-query"> page : {searchParams.get('page')} </p>
          <p className="limit-page"> limit : {searchParams.get('limit')} </p>
        </Alert>
      </Stack>
    </RouterWrapper>
  );
};

export default Home;
