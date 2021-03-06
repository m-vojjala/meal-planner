import { Image, Col, Button, Form } from "react-bootstrap";
import { useState, useContext } from 'react';
import {AuthContext} from "../context/authContext";
import {useHistory} from "react-router-dom";
import axios from "axios";

export default function ProfileEdit(props) {
  const [diet, setDiet] = useState("");
  const [avoidances, setAvoidances] = useState("");
  const [favorites, setFavorites] = useState("");
  const { user } = useContext(AuthContext);
  const history = useHistory();

  function handleSubmit(event){

    event.preventDefault();
    axios.post('/profile/new',
      {diet, avoidances, favorites, id: user.id},
      {headers: {"x-auth-token": localStorage.getItem("token")}}
    );
    history.push("/profile");
  }

  return (
    <section className="profile">
      <Col md={{ span: 3, offset: 4 }}>
      <Image style={{textAlign:"center", paddingLeft:"150px"}} src="https://cdn.dribbble.com/users/1070859/screenshots/5869416/gal-_dribbble__still_2x.gif?compress=1&resize=200x200" roundedCircle />
      </Col>

      <br />

      <Col md={{ span: 3, offset: 4 }} xs={2}> 
        <Form>
        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
<Form.Label style={{color:"#26466D",fontFamily: "'Oxygen', sans-serif",fontSize:"1.75em",paddingLeft:"190px"}}><strong>Diet</strong></Form.Label>
    <Form.Control as="select" size="lg"  style={{paddingTop:"10px",width: "600px",height:"60px" ,border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px",paddingBottom:"20px",fontFamily: "'Oxygen', sans-serif", color:"#506987"
      }} custom value={diet} onChange={(e) => setDiet(e.target.value)} >
                <option>Select your Diet</option>
                <option>Vegetarian</option>
                <option>Gluten Free</option>
                <option>Ketogenic</option>
                <option>Lacto-Vegetarian</option>
                <option>Pescetarian</option>
                <option>Paleo</option>
                <option>Primal</option>
                <option>Whole30</option>
            </Form.Control>
          </Form.Group>

          <br/>

          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label style={{color:"#26466D",fontFamily: "'Oxygen', sans-serif",fontSize:"1.75em",paddingLeft:"190px"}}><strong>Avoidances</strong></Form.Label>
            <Form.Control multiple as="select" size="lg"  style={{paddingTop:"10px",border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px",paddingBottom:"20px",fontFamily: "'Oxygen', sans-serif", color:"#506987"}} custom value={avoidances} onChange={(e) => setAvoidances((prev)=>[...prev,e.target.value])}>
              <option>Alcohol</option>
              <option>Caffeine</option>
              <option>Celery</option>
              <option>Egg</option>
              <option>Gluten</option>
              <option>Peanut</option>
              <option>Dairy</option>
              <option>Sesame</option>
              <option>Soy</option>
              <option>Tree nut</option>
              <option>Wheat</option>
              <option>Yeast</option>
            </Form.Control>
          </Form.Group>

          <br/>

          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label style={{color:"#26466D",fontFamily: "'Oxygen', sans-serif",fontSize:"1.75em",paddingLeft:"190px"}}><strong>Favourite Ingredients</strong></Form.Label>
            <Form.Control multiple as="select" size="lg"  style={{paddingTop:"10px" ,border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px",paddingBottom:"20px",fontFamily: "'Oxygen', sans-serif", color:"#506987"}}  custom value={favorites} onChange={(e) => setFavorites((prev)=>[...prev,e.target.value])} >
              <option>Egg</option>
              <option>Bacon</option>
              <option>Steak</option>
              <option>Bread</option>
              <option>Apple</option>
              <option>Banana</option>
              <option>Mayo</option>
              <option>Butter</option>
              <option>Cheese</option>
              <option>Broccoli</option>
              <option>Kale</option>
              <option>Potato</option>
              <option>Pizza</option>
            </Form.Control>
          </Form.Group>

          <br />

          <Button variant="primary" type="submit" style={{backgroundColor:'#4B7DFE',marginLeft:"180px"}} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </section>
  )
}
