import React from 'react'
import { Container,Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (

    <section className="content"> 
    <Container>
      

<Form className="form-contact">
<h1>Contact Us</h1>

<div class="mb-3 row">
 <Form.Group  as={Col} className="mb-3" >
   <Form.Label>Your name</Form.Label>
   <Form.Control type="text" placeholder="Your name" />
  
 </Form.Group>

 <Form.Group as={Col} className="mb-3" >
   <Form.Label>Address</Form.Label>
   <Form.Control type="text" placeholder="Address" />
 </Form.Group>
 </div>

 <div class="mb-3 row">
 <Form.Group controlId="date" bsSize="large" as={Col} className="mb-3" >
         <Form.Label>Birthday</Form.Label>
         <Form.Control
           type="date"
         />
</Form.Group>
 <Form.Group as={Col} className="mb-3" >
   <Form.Label>Address</Form.Label>
   <Form.Control type="text" placeholder="Address" />
 </Form.Group>
 </div>


<div class="mb-3 row">
 <Form.Group  as={Col} className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
     We'll never share your email with anyone else.
   </Form.Text>
 </Form.Group>

 <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Password" />
 </Form.Group>
 </div>
 <Form.Group  as={Col} className="mb-3" controlId="formBasicCheckbox">
   <Form.Check type="checkbox" label="Check me out" />
 </Form.Group>
 <Button variant="primary" type="submit">
   Submit
 </Button>

</Form>
</Container>
</section > 

   )
}


export default Contact;
