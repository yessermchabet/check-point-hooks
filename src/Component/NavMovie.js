import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavMovie=()=>{
    return(
    <Navbar style={{height : "85px"}} bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{fontSize : "50px" , marginLeft : "-245px" , marginBottom : "20px" , textDecoration : "underline"}} href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ fontSize : "40px" , marginLeft : "55px" , textDecoration : "underline"}} href="#home">Home</Nav.Link>
            <Nav.Link style={{ fontSize : "36px" , marginLeft : "55px" , marginTop : "6px" , textDecoration : "underline"}} href="#features">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovie