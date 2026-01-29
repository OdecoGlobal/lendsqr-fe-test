import { Route, Routes, Navigate } from 'react-router';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
