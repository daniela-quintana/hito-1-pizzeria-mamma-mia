import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza'
import { usePizza } from '../context/PizzaContext'

const Home = () => {
  const { pizzas, loading, error } = usePizza()

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando pizzas...</span>
        </div>
        <p className="mt-2">Cargando pizzas...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">
          <h5>Error al cargar las pizzas</h5>
          <p>{error}</p>
          <small>Asegúrate de que el backend esté ejecutándose en http://localhost:5000</small>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">Nuestras Pizzas</h2>
        <div className="row">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                id={pizza.id}
                pizza={pizza}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home