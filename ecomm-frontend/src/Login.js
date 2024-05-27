import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let item = { email, password };
    // console.log(item);

    await axios
      .post("http://127.0.0.1:8000/api/login", item)
      .then((response) => {
        // console.log(response.data);
        localStorage.setItem("user-info", JSON.stringify(response.data));
        navigate("/add");
      });
  };

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Login</h1>
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
