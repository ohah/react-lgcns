import 'App.scss';
import { Navigation } from 'components';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default App;
