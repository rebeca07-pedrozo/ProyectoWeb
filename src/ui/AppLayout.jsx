
import { NavLink, Outlet } from 'react-router-dom'
import "./Navbar.css";
export default function AppLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            🍔El Restaurante De los Sistematesaurios🥤
          </NavLink>

          {/* Botón toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" end to="/">Home Jurásico</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">Manjares Prehistóricos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">DinoPromociones</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container my-4">
        <Outlet />
      </main>
    </>
  )
}