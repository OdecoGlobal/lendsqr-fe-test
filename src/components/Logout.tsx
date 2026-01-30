import { useNavigate } from 'react-router';
import { logout } from '../lib/auth';
import Button from './button/Button';

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
