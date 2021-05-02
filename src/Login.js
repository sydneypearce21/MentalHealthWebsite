import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = (props) => {
  return (
    <>
      <h1>Login to your account</h1>

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
      
      </>
  );
}

export default Login;