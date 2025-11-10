import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/js/pizzas'

const Home = () => {

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home