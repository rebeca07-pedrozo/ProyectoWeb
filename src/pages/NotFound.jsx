
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <h1 className="display-1 fw-bold text-danger mb-3">404</h1>
      <p className="lead text-dark mb-4">
        ¡Ups! Parece que esta página no existe.
      </p>
      <p className="text-muted mb-4">
        Puede que hayas escrito mal la dirección o la página haya sido movida.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Volver al inicio
      </Link>
    </div>
  );
}
