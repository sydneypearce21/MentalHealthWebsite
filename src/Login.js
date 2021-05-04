import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const axios = require('axios').default;

/* 
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
        username: "",
        password: ""
    };
  }

// when component mounts, first thing it does is fetch all existing data in our db
// then we incorporate a polling logic so that we can easily see if our db has
// changed and implement those changes into our UI
componentDidMount() {
  this.getDataFromDb();
}

// never let a process live forever
// always kill a process everytime we are done using it
componentWillUnmount() {
  if (this.state.intervalIsSet) {
    clearInterval(this.state.intervalIsSet);
    this.setState({ intervalIsSet: null });
  }
}

// our first get method that uses our backend api to
// fetch data from our data base
getDataFromDb() {
  fetch('http://localhost:9000/testDB')
    .then((user) => user.json())
    .then((res) => this.setState({ username: res.username, password: res.password }))
    .catch(err => err);
};
*/
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
