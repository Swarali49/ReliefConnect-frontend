import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DonorDashboard from "./pages/donor/DonorDashboard";
import RecipientDashboard from "./pages/recipient/RecipientDashboard";
import LogisticsDashboard from "./pages/logistics/LogisticsDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/donor" element={<DonorDashboard />} />
      <Route path="/recipient" element={<RecipientDashboard />} />
      <Route path="/logistics" element={<LogisticsDashboard />} />
    </Routes>
  );
}

export default App;
