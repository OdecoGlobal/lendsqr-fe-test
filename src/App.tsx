import { Route, Routes, Navigate } from "react-router";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<>404- Page not found</>} />
    </Routes>
  );
}

export default App;
