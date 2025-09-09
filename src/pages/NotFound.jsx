import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="text-center">
      <h1 className="display-6">404</h1>
      <p className="text-muted">Página no encontrada.</p>
      <Link to="/" className="btn btn-outline-primary">Ir al inicio</Link>
    </div>
  )
}
