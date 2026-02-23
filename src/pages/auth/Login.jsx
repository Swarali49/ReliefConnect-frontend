import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { toast } from "react-toastify";

function Login() {
  const [role, setRole] = useState("donor");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Logged in as ${role.toUpperCase()}`);
    if (role === "admin") navigate("/admin");
    else if (role === "donor") navigate("/donor");
    else if (role === "recipient") navigate("/recipient");
    else if (role === "logistics") navigate("/logistics");
  };




  return (
    <>
      <Navbar />
      <main className="auth">
        <form className="auth__card" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="********" required />
          </label>
          <label>
            Role
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
              <option value="logistics">Logistics Coordinator</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <button type="submit" className="btn primary">
            Continue
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
