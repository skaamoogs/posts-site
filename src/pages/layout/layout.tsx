import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Container } from "react-bootstrap";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container className="my-4">
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};
