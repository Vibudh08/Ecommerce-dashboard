import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate()
  const logout = ()=>{
    localStorage.clear()
    navigate('/login')
  }
  const user = JSON.parse(localStorage.getItem("user-info"));
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          <Nav>
            {localStorage.getItem("user-info") ? (
              <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
