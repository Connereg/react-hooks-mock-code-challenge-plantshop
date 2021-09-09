import React, { useState } from "react";

function PlantCard(props) {
  const { id, name, image, price, handlePricePatch, handleDeletePlant} = props;

  //const initialState= () => localStorage.getItem( "InStock" || false )
  
  const [outOfStock, setOutOfStock] = useState(false)
  const [newPrice, setNewPrice] = useState(price)

  function toggleInStockStatus() {
  //  localStorage.setItem("InStock", true)
    setOutOfStock(!outOfStock)
  }

  function handleNewPrice(event){
    setNewPrice(event.target.value)
  }

  function handleSubmitNewPrice(event){
    event.preventDefault()
    handlePricePatch(id, newPrice)

  }

  function handleDeletion(event){
    handleDeletePlant(id)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price:</p>
      <form onSubmit={handleSubmitNewPrice}>
        <input type="number" onChange={handleNewPrice} value={newPrice} />
        <button type="submit"> Submit New Price </button>

      </form>
      {!outOfStock ? (
        <button onClick={toggleInStockStatus} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleInStockStatus} >Out of Stock</button>
      )}
      <button onClick={handleDeletion} > Delete Plant </button>
    </li>
  );
}

export default PlantCard;
