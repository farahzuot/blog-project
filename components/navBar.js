import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'


export default function Navbar(){
    return(
      <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/posts/ssg-ssr' eventKey="link-1">Rendering</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/posts/pre-rendering' eventKey="link-2">
          Pre-rendering
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }