import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Container from './pages/Container';
import './styles/global.css';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
