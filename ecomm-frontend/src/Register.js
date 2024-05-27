import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate("/")
    }
  },[])
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signup = async () => {
    let item = { name, email, password };
    // console.log(item)
    
    await axios
      .post("http://127.0.0.1:8000/api/register", item)
      .then((response) => {
        // console.log(response.data);
        localStorage.setItem("user-info", JSON.stringify(response.data));
        navigate("/");
      });
  };

  return (
    <>
      <Header />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Sign up</h1>
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
