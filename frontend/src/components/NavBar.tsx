import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const NavBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <Navbar bg='white' data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          Home
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};