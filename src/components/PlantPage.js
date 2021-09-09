import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// WHAT HAPPENS TO DATA/ MAKE IT RENDER
function PlantPage() {

  const [fetchSwitch, setFetchSwitch] = useState(false)
  
  const [plants, setPlants] = useState([])
  const [filterSearch, setFilterSearch] = useState("")

  useEffect(() => {
    console.log("Fetching Data...");
    fetchPlantData()   
  }, [fetchSwitch])

  function fetchPlantData(){
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then(plantData => {
      console.log("Data Fetched!");
      setPlants(plantData);
    });
  }

  function handleNewPlantAdd(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    }).then(
      console.log("New Plant Posted!"),
      setFetchSwitch(!fetchSwitch)
      
    )
  }

  function handlePricePatch(plantId, newPrice) {
    fetch(`http://localhost:6001/plants/${plantId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      price: newPrice
    })
  }).then(
    console.log("Edited Plant Price!"),
    setFetchSwitch(!fetchSwitch)
  );
  }

  function handleDeletePlant(plantId) {
    fetch(`http://localhost:6001/plants/${plantId}`, {
    method: "DELETE"  
  }).then(
    console.log("Item Deleted"),
    setFetchSwitch(!fetchSwitch)
  )
  }

  const visiblePlants = plants.filter((plant) => 
    filterSearch === "" || plant.name.toLowerCase().includes(filterSearch.toLowerCase())
  )

  console.log(visiblePlants)

  return (
    <main>
      <NewPlantForm handleNewPlantAdd={handleNewPlantAdd}/>
      <Search filterSearch={filterSearch} setFilterSearch={setFilterSearch}/>
      <PlantList plants={visiblePlants} handlePricePatch={handlePricePatch} handleDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
