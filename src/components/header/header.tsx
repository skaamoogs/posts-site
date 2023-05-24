//import style from "./header.module.scss";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LINKS } from "../../const";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "../avatar/avatar";

export const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const navClickHandler = () => {
    setShowOffcanvas(false);
  };

  const hideOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <header className="sticky-top">
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container>
          <Navbar.Toggle
            aria-controls="menu"
            className="border-0 p-0"
            onClick={() => setShowOffcanvas(true)}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={hideOffcanvas}
            id="menu"
            aria-labelledby="menu-title"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="menu-title">Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav onClick={navClickHandler}>
                <Nav.Link as={Link} to={LINKS.Root.path}>
                  Посты
                </Nav.Link>
                <Nav.Link as={Link} to={LINKS.About.path}>
                  Обо мне
                </Nav.Link>
              </Nav>
              <div className="d-flex mt-3 gap-2">
                <Avatar src="./my-avatar.jpg" size="50px" />
                <div>
                  <p className="fw-bold m-0">Александр Шабанов</p>
                  <p>shabalexx@yandex.ru</p>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
