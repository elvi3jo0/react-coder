import React, { useState } from 'react';

const ItemListContainer = ({ contador }) => {

  const [count, setCount] = useState(1)

  const suma = () => {
    setCount(count + 1)
  }
  const resta = () => {
    setCount(count - 1)
    count > 1 && setCount(count -1)
  }
  const reset = () => {
    setCount(1)
  }
  return (
    <div className="container mt-4">
      <h2>{contador}</h2>
      <button onClick={suma}>+</button>
      <p>{count}</p>
      <button onClick={resta}>-</button><br></br>
      <button onClick={reset}>Resetear</button>
      

    </div>
  )
}

export default ItemListContainer;
