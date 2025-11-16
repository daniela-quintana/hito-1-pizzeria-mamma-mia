
import { useState, useEffect } from 'react'
import { formatPrice } from '../utils/formatters'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true)

        const pizzaId = id || 'p001'
        const response = await fetch(`http://localhost:5001/api/pizzas/${pizzaId}`)

        if (!response.ok) {
          throw new Error('Pizza no encontrada')
        }

        const data = await response.json()
        setPizza(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [id])

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando pizza...</span>
        </div>
        <p className="mt-2">Cargando pizza...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">
          <h5>Error al cargar la pizza</h5>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!pizza) {
    return (
      <div className="container my-5">
        <div className="alert alert-warning text-center">
          <h5>Pizza no encontrada</h5>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="text-capitalize mb-3">{pizza.name}</h1>

          <div className="mb-4">
            <h3 className="text-success">${formatPrice(pizza.price)}</h3>
          </div>

          <div className="mb-4">
            <h5>Descripción</h5>
            <p className="text-muted">{pizza.desc}</p>
          </div>

          <div className="mb-4">
            <h5>Ingredientes</h5>
            <ul className="list-unstyled">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  <span className="me-2">🍕</span>
                  <span className="text-capitalize">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-grid">
            <button className="btn btn-warning btn-lg py-3">
              Añadir al Carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza