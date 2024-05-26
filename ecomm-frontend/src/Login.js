import Header from "./Header";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  return (
    <>
      <Header />
      <div>Login</div>
    </>
  );
}
export default Login;
