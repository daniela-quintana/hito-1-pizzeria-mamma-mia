import { formatPrice } from '../utils/formatters'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Pizzeria Mamma Mia!
        </a>
          <button className="btn btn-outline-light me-2">
            🍕 Home
          </button>
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">
                🔓 Profile
              </button>
              <button className="btn btn-outline-light me-2">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">
                🔐 Login
              </button>
              <button className="btn btn-outline-light me-2">
                🔐 Register
              </button>
            </>
          )}
        <div className="navbar-nav ms-auto">
          <button className="btn btn-outline-primary">
            🛒 Total: ${formatPrice(total)}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;