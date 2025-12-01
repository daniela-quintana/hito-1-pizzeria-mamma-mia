import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (pizza) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === pizza.id)

      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizza.id 
            ? { ...item, count: item.count + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...pizza, count: 1 }]
      }
    })
  }

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, count: item.count + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newCount = item.count - 1
          if (newCount === 0) {
            return null
          }
          return { ...item, count: newCount }
        }
        return item
      }).filter(item => item !== null)
    )
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.count), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.count, 0)
  }

  const value = {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    calculateTotal,
    getTotalItems
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}