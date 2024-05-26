import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto nav_bar_wrapper">
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
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
