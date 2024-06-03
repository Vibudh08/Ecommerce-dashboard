import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setTimeout(() => {
        setError("");
      }, 2000); 
      return false;
    }
    setError("");
    return true;
  };

  const login = async () => {
    if (!validateForm()) {
      return;
    }

    let item = { email, password };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        item
      );

      if (response.data === "wrong") {
        setError("Wrong Password");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        localStorage.setItem("user-info", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <>
      <Header />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </>
  );
}
export default Login;
