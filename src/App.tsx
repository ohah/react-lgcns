import { css, Global } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from 'components';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const GloblStyles = css`
  body {
    min-height: 100vh;
  }
`;

function App() {
  return (
    <Container>
      <Global styles={GloblStyles} />
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default App;
