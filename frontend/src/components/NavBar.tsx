import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const NavBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
      alert('Logout failed. Please try again.');
    }
  };

  return (
    <Navbar style={{ backgroundColor: '#B8B8D9', padding: '10px' }} data-bs-theme="white">
      <Container>
        <Navbar.Brand href="/">
          Home
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant='outline-dark' onClick={handleLogout}>Sign Out</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};