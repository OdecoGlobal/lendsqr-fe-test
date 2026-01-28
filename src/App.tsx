import { Route, Routes, Navigate } from "react-router";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
