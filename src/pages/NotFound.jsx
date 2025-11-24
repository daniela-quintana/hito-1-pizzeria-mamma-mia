import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card shadow">
            <div className="card-body py-5">
              <h1 className="display-1 text-warning fw-bold">404</h1>
              <h2 className="mb-4 fw-bold">¡PÁGINA NO ENCONTRADA!</h2>
              <p className="text-muted mb-4">
                La página que estás buscando no existe.
              </p>
              <div className="mb-4">
                <span className="fs-1">🍕</span>
              </div>
              <Link to="/" className="btn btn-warning btn-lg fw-bold">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound