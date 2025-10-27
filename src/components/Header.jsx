import HeaderImage from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <header className="position-relative">
      <img
        src={HeaderImage}
        alt="Pizzeria Mamma Mia"
        className="w-100"
        style={{ height: '400px', objectFit: 'cover' }}
      />
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      >
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold">¡Pizzería Mamma Mia!</h1>
          <p className="lead fs-4">
            ¡Tenemos las mejores pizzas que podrías encontrar!
          </p>
          <hr />
        </div>
      </div>
    </header>
  )
}

export default Header;