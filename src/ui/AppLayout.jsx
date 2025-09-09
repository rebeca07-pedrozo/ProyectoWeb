import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">MyBlog</NavLink>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><NavLink className="nav-link" end to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/posts">Posts</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
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
