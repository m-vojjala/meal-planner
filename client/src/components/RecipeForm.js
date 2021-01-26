import {Form,Col,Button} from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import IngredientsForm from "./IngredientsForm";



export default function RecipeForm(){
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [recipeId, setRecipeId] = useState();
  const [disabled, setDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name: ", name, "instructions: ", instructions, "image: ", image)
    axios({
      method: 'POST',
      url: 'recipes/new',
      data: {
        name, instructions, image
      }
    })
    .then((response) => {
      console.log("* from axios response.data.id: ", response.data.id);
      setRecipeId(response.data.id);
      setDisabled(true);
    })
    .catch( err => console.log(err))
  }

  return <section>
    <Col md={{ span: 3, offset: 4 }} xs={2}>
<Form style={{marginTop:"30px"}}>
    <h1 style={{color:"#26466D",margin:"30px"}}>Create New Recipe</h1>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control 
      type="text" 
      placeholder="Name of the Recipe" 
      disabled={disabled}
      value={name} 
      onChange={event => setName(event.target.value)} 
    />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Control 
      type="text" 
      placeholder="Image URL" 
      disabled={disabled}
      value={image} 
      onChange={event => setImage(event.target.value)}
    />
  </Form.Group>
  {/* <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder="List of Ingredients" rows={3} />
  </Form.Group> */}
  <Form.Group controlId="exampleForm.ControlTextarea2">
    <Form.Control 
      as="textarea" 
      placeholder="Cooking Instructions"
      disabled={disabled}
      rows={5} 
      value={instructions} 
      onChange={event => setInstructions(event.target.value)}
    />
  </Form.Group>
  <div className="mb-2">
    <Button variant="primary" style={{backgroundColor:'#4B7DFE',margin:"10px"}} size="lg" onClick={handleSubmit}>
      CREATE
    </Button>{' '}</div>
</Form></Col>
{ recipeId && (<IngredientsForm recipeId={recipeId}/>)}

</section>
}