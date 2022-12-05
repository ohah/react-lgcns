import { css, Global } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, Toast } from 'components';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const GloblStyles = css`
  body {
    min-height: 100vh;
  }
`;

function App() {
  return (
    <Toast.Context.Provider value={Toast.init()}>
      <Container>
        <Global styles={GloblStyles} />
        <Navigation />
        <Outlet />
        <Toast.Container />
      </Container>
    </Toast.Context.Provider>
  );
}
export default App;
