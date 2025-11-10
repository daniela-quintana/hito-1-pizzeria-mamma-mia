import { useState } from "react";
import { formatPrice } from "../utils/formatters";
import { pizzaCart } from "../assets/js/pizzas";

const Cart = () => {
  const [cartItems, setCartItems] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === id) {
              const newCount = item.count - 1;
              if (newCount === 0) {
                return null;
              }
              return { ...item, count: newCount };
            }
            return item;
          })
          .filter((item) => item !== null)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h3 className="mb-0">Carrito</h3>
            </div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <div className="text-center py-4">
                  <h5>Tu carrito está vacío</h5>
                  <p className="text-muted">
                    ¡Agrega algunas pizzas!
                  </p>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="card mb-3">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="img-fluid rounded"
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="col-md-4">
                            <h6 className="text-capitalize mb-1">
                              {item.name}
                            </h6>
                            <small className="text-muted">
                              Precio unitario: ${formatPrice(item.price)}
                            </small>
                          </div>
                          <div className="col-md-3">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                -
                              </button>
                              <span className="mx-3 fw-bold">{item.count}</span>
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-md-2 text-center">
                            <strong>
                              ${formatPrice(item.price * item.count)}
                            </strong>
                          </div>
                          <div className="col-md-1 text-end">
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeItem(item.id)}
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="row mt-4">
                    <div className="col-md-8">
                      <h5>Resumen del Pedido</h5>
                      <div className="d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>${formatPrice(calculateTotal())}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Envío:</span>
                        <span>$0</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <strong>Total:</strong>
                        <strong className="h5 text-success">
                          ${formatPrice(calculateTotal())}
                        </strong>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-end">
                      <button className="btn btn-warning w-100 py-2 fw-bold">
                        Pagar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
