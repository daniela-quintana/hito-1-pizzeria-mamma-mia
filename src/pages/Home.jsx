import { useState, useEffect } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5000/api/pizzas')

        if (!response.ok) {
          throw new Error('Error al cargar las pizzas')
        }

        const data = await response.json()
        setPizzas(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [])

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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home