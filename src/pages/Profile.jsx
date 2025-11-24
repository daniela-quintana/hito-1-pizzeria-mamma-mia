import { Link } from "react-router-dom";

const Profile = () => {

const email = "usuario@example.com"
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <div className="mb-4">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center" 
                     style={{width: '80px', height: '80px'}}>
                  <span className="fs-2">👤</span>
                </div>
              </div>

              <div className="mb-4">
              <h2 className="text-center mb-4 fs-1">Tu perfíl</h2>
                <p className="text-muted mb-1">Correo: {email} </p>
              </div>

              <div className="d-grid">
                <Link to="/" className="btn btn-danger btn-lg fw-bold">
                  Cerrar Sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile