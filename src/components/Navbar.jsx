import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatters'

const Navbar = () => {
  const total = 0
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ms-auto d-flex flex-column flex-lg-row align-items-end align-items-lg-center gap-2 py-2 py-lg-0">

            <Link className="btn btn-outline-light" to="/">
              Home
            </Link>

            {token ? (
              <div className="d-flex flex-column flex-lg-row gap-2">
                <Link className="btn btn-outline-light" to="/profile">
                  🔓 Profile
                </Link>
                <button className="btn btn-outline-light">
                  🔒 Logout
                </button>
              </div>
            ) : (
              <div className="d-flex flex-column flex-lg-row gap-2">
                <Link className="btn btn-outline-light" to="/login">
                  Login
                </Link>
                <Link className="btn btn-outline-light" to="/register">
                  Register
                </Link>
                <Link className='btn btn-outline-light' to="/profile">
                  Profile
                </Link>
              </div>
            )}

            <Link className="btn btn-warning mt-lg-0" to="/cart">
              🛒 ${formatPrice(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;