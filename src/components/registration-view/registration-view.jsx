import React, { useState } from 'react';
import propTypes from 'prop-types';
import {Row, Col, Button, Container, Form} from 'react-bootstrap';
import axios from 'axios';
import Link from 'react-router-dom';
// import './registration-view.scss';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthdate, setBirthdate ] = useState('');
    //Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');
   
  

    const validate = () => {
      let isReq = true;
        if(!username){
          setUsernameErr('Username Required');
          isReq = false;
        } else if(username.length < 5) {
          setUsernameErr('Username must be 5 characters long.'); 
          isReq = false;
        } if(!password){
          setPasswordErr('Password Required');
          isReq = false;
        } else if(password.length < 6){
          setPasswordErr('Password must be 6 characters long');
          isReq = false;
        }
        if(!email) {
          setEmailErr('Email is required');
          isReq = false;
        } else if(email.indexOf('@') === -1) {
          setEmailErr('Please enter a valid email');
          isReq = false;
        }
        return isReq; 
  };  


    const handleSubmit = (e) => {
    e.preventDefault(); 
    isReq = validate();
    console.log(username, password, email, birthdate);
    if(isReq) {
      /* Send a request to the server for authentication */
      axios.post('https://fredsflix.herokuapp.com/users', {
        Username: username, 
        Password: password, 
        Email: email, 
        Birthdate: birthdate
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        alert('Registration successful, please login!');
        window.open('/', '_self'); 
      })
      .catch(response => {
        console.error(response);
        alert('unable to register');
      });
    };

    
    /* then call props.Registration(username) */
    props.onRegistration(username);
  };

  return (
    <Row className="mt-5">
      <Col md={12}>
        <Form>
          <h3>Sign Up</h3>
          <p></p>
          <Form.Group controlId="formUsername" className="reg-form-inputs">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
            {usernameErr && <p style={{color: "red"}} className="font-italic">{usernameErr}</p>}
         </Form.Group>

         <Form.Group controlId="formPassword" className="reg-form-inputs">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
            {passwordErr && <p style={{color: "red"}} className="font-italic">{passwordErr}</p>}
         </Form.Group>
        
         <Form.Group controlId="Email" className="reg-form-inputs">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
            {emailErr && <p style={{color: "red"}} className="font-italic">{emailErr}</p>}
         </Form.Group>
         
         <Form.Group controlId="formBirthday" className="reg-form-inputs">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control type="date" name="birthday" onChange={e => setBirthdate(e.target.value)} />
         </Form.Group>
          <Button variant="info" type="submit" onClick={handleSubmit}>Submit</Button>
          <p></p>
      </Form>
     </Col>
    </Row>
  );
}

// RegistrationView.propTypes = {
//   register: PropTypes.shape({
//     Username: PropTypes.string.isRequired, 
//     Password: PropTypes.string.isRequired,
//     Email: PropTypes.string.isRequired
//   }),
// };