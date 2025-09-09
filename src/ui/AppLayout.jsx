import { Link, Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function AppLayout() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            🛍️ Mi Tienda
          </Navbar.Brand>

          {/* BOTÓN RESPONSIVE */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* LINKS */}
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Productos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                Carrito
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CONTENIDO PRINCIPAL */}
      <main className="py-4">
        <Container>
          {/* Aquí se inyectan las páginas hijas */}
          <Outlet />
        </Container>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
