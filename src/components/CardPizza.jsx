import { formatPrice } from "../utils/formatters";

const CardPizza = ({ name, price, ingredients, img }) => {
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{capitalizeFirstLetter(name)}</h5> 
        <hr />
          <strong className="d-block mb-2">Ingredientes:</strong>
          <ul className="card-text list-unstyled mb-0">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="d-flex align-items-center">
                <span className="text-capitalize">{ingredient}</span>
              </li>
            ))}
          </ul>
        <hr />
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="h5 text-center mb-0 flex-grow-1 text-center">
              Precio: ${formatPrice(price)}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-dark">Ver más 👀</button>
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
