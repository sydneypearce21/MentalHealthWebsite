import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Register = (props) => {
  return (
      <>

    <h1>Create an account</h1>

    <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Enter your email address" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="Enter your password" />
      </FormGroup>
      <FormGroup>
        <Button>Submit</Button>
      </FormGroup>
    </Form>

    <h4>Create an account to receive updates via our weekly newsletters!</h4>
    </>
  );
}

export default Register;