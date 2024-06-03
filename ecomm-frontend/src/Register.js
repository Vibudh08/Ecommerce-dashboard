import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      setTimeout(() => {
        setError("");
      }, 2000); 
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
      setError("Name should only contain alphabets and spaces.");
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

  const signup = async () => {
    if (!validateForm()) {
      return;
    }

    let item = { name, email, password };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        item
      );
      localStorage.setItem("user-info", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.error("Error occurred during sign up:", error);
    }
  };

  return (
    <>
      <Header />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Sign up</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <br />
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
        <button onClick={signup} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}
export default Register;
