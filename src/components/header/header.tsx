//import style from "./header.module.scss";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LINKS } from "../../const";
import { Link } from "react-router-dom";

export const Header = () => {
  const expand = false;

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand={expand}>
        <Container>
          <Navbar.Toggle aria-controls="menu" />
          <Navbar.Offcanvas
            id="menu"
            aria-labelledby="menu-title"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="menu-title">
                Меню
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link as={Link} to={LINKS.Root}>Посты</Nav.Link>
                <Nav.Link as={Link} to={LINKS.About}>Обо мне</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
