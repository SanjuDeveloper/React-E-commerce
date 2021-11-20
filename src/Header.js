import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import react, { useEffect } from 'react';

function Header() {
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem("user-info"));
  function logOut() {
    localStorage.clear();
    navigate('/login')
  }
  return (

    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto Navbar_wraper">
            <Link to="/home" >HOME</Link>
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link to="/add" >Add Product</Link>
                  <Link to="/update" >Update Product</Link>
                </>
                :
                <>
                  <Link to="/login" >Login</Link>
                  <Link to="/register" >Register</Link>
                </>
            }


          </Nav>
          {
            localStorage.getItem('user-info') ?
              <nav>
                <NavDropdown title={loginUser && loginUser.name}>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavDropdown>
              </nav>
              : null
          }
        </Container>
      </Navbar>
    </div>
  )
}
export default Header