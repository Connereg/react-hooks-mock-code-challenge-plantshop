import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  const {plants, handlePricePatch, handleDeletePlant} = props;

  const plantCardsList = plants.map(plant => {
    return (
      <PlantCard
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        handlePricePatch={handlePricePatch}
        handleDeletePlant={handleDeletePlant}
      />
    )
  })


  return (
    <ul className="cards">{plantCardsList}</ul>
  );
}

export default PlantList;
