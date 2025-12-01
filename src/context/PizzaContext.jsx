import { createContext, useContext, useState, useEffect } from 'react'

const PizzaContext = createContext()

export const usePizza = () => {
  const context = useContext(PizzaContext)
  if (!context) {
    throw new Error('usePizza debe ser usado dentro de un PizzaProvider')
  }
  return context
}

export const PizzaProvider = ({ children }) => {
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

  const getPizzaById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)

      if (!response.ok) {
        throw new Error('Pizza no encontrada')
      }

      return await response.json()
    } catch (err) {
      setError(err.message)
      return null
    }
  }

  const value = {
    pizzas,
    loading,
    error,
    getPizzaById
  }

  return (
    <PizzaContext.Provider value={value}>
      {children}
    </PizzaContext.Provider>
  )
}