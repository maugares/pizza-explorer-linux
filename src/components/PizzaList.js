import * as React from 'react'

export default function PizzaList(props) {
  return (<div>
    <h1>Pizza Explorer</h1>
    <ul>
      {props.pizzas.map(pizza => {
        return <li key={pizza.id} onClick={() => console.log(props.selectPizza(pizza.id))}>
          {pizza.name}
        </li>
        }
      )}
    </ul>
  </div>)
}