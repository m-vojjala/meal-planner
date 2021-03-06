import { useState, useContext } from "react"
import {Form,Button,Col} from "react-bootstrap"
import axios from "axios";
import { AuthContext } from "../context/authContext";
import "./Register.scss";

export default function Register(props){
  const [fName, setFirstName] = useState();
  const [lName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user, setUser } = useContext(AuthContext);

  function handleSubmit(event){
  
    event.preventDefault();

    axios({
      method: 'POST',
      url: '/register',
      data: {
        fName, 
        lName, 
        email, 
        password
      }
      
    })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setUser({...res.data.user});
      })
      .catch((err) => {
        console.log(err.response.data)
      });
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return  (
    <section id="register">
      <Col md={{ span: 3, offset: 4 }} xs={2}>
        <Form>
          <h1 className="register">Register</h1>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control size="lg"
            style={{paddingTop:"10px",width: "580px",height:"60px" , border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px"}} type="text" placeholder="Enter First Name" value={fName} onChange={handleFirstNameChange}/>
            <p></p>
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Control type="text"
            style={{paddingTop:"10px",width: "580px",height:"60px" , border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px"}}size="lg" placeholder="Enter Last Name" value={lName} onChange={handleLastNameChange}/>
            <p></p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email"
            style={{paddingTop:"10px",width: "580px",height:"60px" , border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px"}} size="lg" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password"
            style={{paddingTop:"10px",width: "580px",height:"60px" , border: "2px solid #999999",borderRadius:"30px",marginLeft:"130px"}}size="lg" placeholder="Password" value={password} onChange={handlePasswordChange}/>
          </Form.Group>

          <Button variant="primary" style={{backgroundColor:'#4B7DFE',marginLeft:"230px"}} size="lg" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    </section>
)
  }