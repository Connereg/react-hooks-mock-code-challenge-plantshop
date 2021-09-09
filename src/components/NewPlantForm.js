import React,{useState} from "react";

function NewPlantForm(props) {

  const {handleNewPlantAdd} = props;

  const [addPlantName, setAddPlantName] = useState("");
  const [addPlantImage, setAddPlantImage] = useState("");
  const [addPlantPrice, setAddPlantPrice] = useState(0)

  //Create New Plant Object With Supplied Data From Form
  function handleAddPlantName(event) {
    setAddPlantName(event.target.value)
  }
  function handleAddPlantImage(event) {
    setAddPlantImage(event.target.value)
  }
  function handleAddPlantPrice(event) {
    setAddPlantPrice(event.target.value)
  }

  //Make Plant Obj Shape
  function handleSubmitNewPlant(event) {
    event.preventDefault();
    handleNewPlantAdd({

      name: (addPlantName),
      image: (addPlantImage),
      price: (addPlantPrice)

    })
    setAddPlantName("")
    setAddPlantImage("")
    setAddPlantPrice("")
  }




  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitNewPlant}>
        <input 
         type="text"
         name="name" 
         placeholder="Plant name" 
         onChange={handleAddPlantName} 
         value={addPlantName}/>

        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={handleAddPlantImage}
        value={addPlantImage}/>

        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={handleAddPlantPrice}
        value={addPlantPrice}/>

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
