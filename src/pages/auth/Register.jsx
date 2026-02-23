import Navbar from "../../components/layout/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <main className="auth">
        <form className="auth__card">
          <h2>Create Account</h2>
          <label>
            Full Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="********" required />
          </label>
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
      </main>
    </>
  );
}

export default Register;
