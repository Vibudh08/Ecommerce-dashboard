import { useState } from "react"
function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const signup = ()=>{
    let item = {name,email,password}
    console.log(item)
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Sign up</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <br />
      <button onClick={signup} className="btn btn-primary">Sign Up</button>
    </div>
  );
}
export default Register